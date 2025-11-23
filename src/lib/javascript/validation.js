 const form = document.getElementById('contactForm');
        const nombreInput = document.getElementById('nombre');
        const correoInput = document.getElementById('correo');
        const nombreError = document.getElementById('nombreError');
        const correoError = document.getElementById('correoError');
        const message = document.getElementById('message');
        const submitBtn = document.getElementById('submitBtn');

        // Validación en tiempo real
        nombreInput.addEventListener('input', validateNombre);
        correoInput.addEventListener('input', validateCorreo);

        function validateNombre() {
            const valor = nombreInput.value.trim();
            
            if (valor === '') {
                nombreInput.classList.add('error');
                nombreError.textContent = 'El nombre es obligatorio';
                return false;
            } else if (valor.length < 2) {
                nombreInput.classList.add('error');
                nombreError.textContent = 'El nombre debe tener al menos 2 caracteres';
                return false;
            } else if (!/^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/.test(valor)) {
                nombreInput.classList.add('error');
                nombreError.textContent = 'El nombre solo debe contener letras';
                return false;
            } else {
                nombreInput.classList.remove('error');
                nombreError.textContent = '';
                return true;
            }
        }

        function validateCorreo() {
            const valor = correoInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (valor === '') {
                correoInput.classList.add('error');
                correoError.textContent = 'El correo es obligatorio';
                return false;
            } else if (!emailRegex.test(valor)) {
                correoInput.classList.add('error');
                correoError.textContent = 'Por favor, ingresa un correo válido';
                return false;
            } else {
                correoInput.classList.remove('error');
                correoError.textContent = '';
                return true;
            }
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombreValido = validateNombre();
            const correoValido = validateCorreo();
            
            if (nombreValido && correoValido) {
                message.className = 'mt-4 text-center success-message text-lg';
                message.textContent = '¡Formulario enviado correctamente!';
                
                // Simular envío
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
                
                setTimeout(() => {
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar';
                    
                    setTimeout(() => {
                        message.textContent = '';
                    }, 3000);
                }, 1500);
            } else {
                message.className = 'mt-4 text-center error-message text-lg';
                message.textContent = 'Por favor, corrige los errores del formulario';
            }
        });