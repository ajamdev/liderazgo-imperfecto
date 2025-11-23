interface HubSpotField {
          objectTypeId: string;
          name: string;
          value: string;
        }

        interface HubSpotPayload {
          fields: HubSpotField[];
        }

        interface HubSpotError {
          message: string;
        }

        interface HubSpotResponse {
          errors?: HubSpotError[];
          message?: string;
        }

        const form = document.getElementById('contactForm') as HTMLFormElement;
        const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
        const messageDiv = document.getElementById('message') as HTMLDivElement;

        form.addEventListener('submit', async (e: Event): Promise<void> => {
          e.preventDefault();
          
          const nombreInput = document.getElementById('nombre') as HTMLInputElement;
          const correoInput = document.getElementById('correo') as HTMLInputElement;
          
          const nombre: string = nombreInput.value;
          const correo: string = correoInput.value;
          
          submitBtn.disabled = true;
          submitBtn.textContent = 'Enviando...';
          messageDiv.textContent = '';
          messageDiv.className = 'message';

          try {
            // Configuración de HubSpot
            const portalId = '46019030';
            const formGuid = '8a326b54-93aa-48f3-98f5-06ad97ef1757';

            const url: string = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;
            const payload: HubSpotPayload = {
              fields: [
                {
                  objectTypeId: "0-1",
                  name: 'firstname',
                  value: nombre
                },
                {
                  objectTypeId: "0-1",
                  name: 'email',
                  value: correo
                }
              ]
            };
            
            console.log('URL:', url);
            console.log('Payload:', JSON.stringify(payload, null, 2));
            
            const response: Response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload)
            });

            console.log('Status:', response.status);
            
            const data: HubSpotResponse = await response.json();
            console.log('Respuesta completa:', data);

            if (response.ok) {
              messageDiv.textContent = '¡Formulario enviado exitosamente!';
              messageDiv.classList.add('success');
              form.reset();
            } else {
              console.error('❌ Error de HubSpot:', data);
              let errorMsg: string = 'Error al enviar';
              if (data.errors && data.errors.length > 0) {
                errorMsg = data.errors[0].message;
              } else if (data.message) {
                errorMsg = data.message;
              }
              messageDiv.textContent = `Error: ${errorMsg}`;
              messageDiv.classList.add('error');
            }
          } catch (error: unknown) {
            messageDiv.textContent = 'Error de red o CORS. Revisa la consola (F12).';
            messageDiv.classList.add('error');
            console.error('❌ Error completo:', error);
          } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar';
          }
        });