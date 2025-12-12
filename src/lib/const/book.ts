import dna from "@/assets/icons/dna.svg"
import boom from "@/assets/icons/boom.svg"
import cristalBall from "@/assets/icons/cristal-ball.svg"
import tools from "@/assets/icons/tools.svg"
import target from "@/assets/icons/target.svg"
import bulb from "@/assets/icons/bulb.svg"
import earth from "@/assets/icons/earth.svg"
import spiral from "@/assets/icons/spiral.svg"
import bank from "@/assets/icons/bank.svg"

interface Book {
  name: string;
  icon: {
    name: any
  }
  book: {
    title: string;
    author: string;
  }[]
}

export const BOOKS_INFO: Book[] = [
  {
    name: "Datos, Analítica y Decisiones Estratégicas",
    icon: {
      name: dna
    },
    book: [
      { title: "Introduction to People Analytics", author: "Nadeem Khan" },
      {title: "Excellent in People Analytics", author: "David Green"},
      {title: "Making Numbers Count", author: "Chip Heath"},
      {title: "The Number Bias", author: "Sanne Blauw"},
      {title: "Ciencia de los datos", author: "Herbert Jones"},
      {title: "Algorithms to Live By", author: "Brian Christian"},
      {title: "Pensar rápido, pensar despacio", author: "Daniel Kahneman"},
      {title: "Ruido", author: "Daniel Kahneman"},
      {title: "Superforecasting", author: "Phillip Tetlock"},
      {title: "Rigth kind of wrong", author: "Emy Edmondson"},
    ]
  },
  {
    name: "Estratégia y Conocimiento del Entorno",
    icon: {
      name: boom
    },
    book: [
      { title: "The Coming Wave", author: "Mustafa Suleyman" },
      {title: "How the World Really Works", author: "Vaclav Smil"},
      {title: "The Future Is Faster Than You Think", author: "Peter Diamandis"},
      {title: "Whiplash", author: "Joi Ito"},
      {title: "AI Superpowers", author: "Kai-Fu Lee"},
      {title: "El juego infinito", author: "Simon Sinek"},
      {title: "I, Human", author: "Tomás Chamorro-Premuzic"},
      {title: "Prisioneros de la geografía", author: "Tim Marshall"},
      {title: "El arte de la guerra", author: "Sun Tzu"},
      {title: "Collaborating with the Enemy", author: "Adam Kahane"},
    ]
  },
  {
    name: "Futuro del Trabajo y Modelos Emergentes",
    icon: {
      name: cristalBall
    },
    book: [
      { title: "The comming wave", author: "Mustafa Suleyman" },
      {title: "Reinventing Jobs", author: "Ravin Jesuthasan"},
      {title: "Work Without Jobs", author: "Ravin Jesuthasan"},
      {title: "Work Different", author: "Kate Bravery"},
      {title: "Redesigning the Work", author: "Lynda Gratton"},
      {title: "Agile Talent", author: "Jon Younger"},
      {title: "Changing the Job", author: "Jennifer Garvey Berger"},
      {title: "Organization Design", author: "Nicolay Worren"},
      {title: "Rethink Operating Models", author: "Kentucky McMillan"},
      {title: "The Flow System Playbook", author: "John R. Turner, Nigel Thurlow"},
    ]
  },
  {
    name: "Liderazgo Práctico",
    icon: {
      name: tools
    },
    book: [
      { title: "Cabeza, corazón y manos", author: "Alvaro González-Alorda" },
      {title: "Multipliers", author: "Liz Wiseman"},
      {title: "El contrato de liderazgo", author: "Vince Molinaro"},
      {title: "The Future Leader", author: "Jacob Morgan"},
      {title: "Lead Yourself First", author: "Kethledge y Erwin"},
      {title: "Leadership by Algorithm", author: "David de Cremer"},
      {title: "Unlock Your Leadership Story", author: "Pat Wadors"},
      {title: "CEO Excellence", author: "Carolyn Dewar"},
      {title: "Tribu de Mentores", author: "Tim Ferris"},
      {title: "Maximizing Board Effectiveness", author: "James C. Galvin"},
    ]
  },
  {
    name: "Ejecución, Talento y Rendimiento Organizacional",
    icon: {
      name: target
    },
    book: [
      { title: "The Alliance", author: "Reid Hoffman, Ben Casnocha" },
      {title: "Las 4 Disciplinas de la Ejecución", author: "Sean Covey"},
      {title: "Impact Players", author: "Liz Wiseman"},
      {title: "Rebel Talent", author: "Francesca Gino"},
      {title: "The Talent Manifesto", author: "RJ Heckman"},
      {title: "Victory Through Organization", author: "Dave Ulrich"},
      {title: "Good to Great", author: "Jim Collins"},
      {title: "The Talent Delusion", author: "Tomás Chamorro-Premuzic"},
      {title: "The Portafolio of Life", author: "Christina Wallace"},
      {title: "Tribal Leadership", author: "Dave Logan"},
    ]
  },
  {
    name: "Productividad, Hábitos y Enfoque",
    icon: {
      name: bulb
    },
    book: [
      { title: "Deep Work", author: "Cal Newport" },
      {title: "Execution", author: "Larry Bossidy & Ram Charan"},
      {title: "Hábitos Atómicos", author: "James Clear"},
      {title: "Se más eficaz", author: "David Allen"},
      {title: "The 80/20 Principle", author: "Richard Koch"},
      {title: "Cómo construir la autodisciplina", author: "Martín Meadows"},
      {title: "Will It Make the Boat Go Faster?", author: "Ben Hunt-Davis"},
      {title: "La tiranía del mérito", author: "Michael J. Sandel"},
      {title: "La generación ansiosa", author: "Jonathan Haidt"},
      {title: "Generation Me", author: "Jean M. Twenge"},
    ]
  },
  {
    name: "Humanismo y Sentido",
    icon: {
      name: earth
    },
    book: [
      { title: "El hombre en busca de sentido", author: "Victor Frankl" },
      {title: "Meditaciones", author: "Marco Aurelio"},
      {title: "Cartas a Lucilio,Seneca", author: "Seneca"},
      {title: "El Tao Te Ching", author: "Lao Tzu"},
      {title: "El Sutra del Diamante", author: "Desconocido"},
      {title: "Decir sí a la vida", author: "Joan Garriga"},
      {title: "Liderazgo Virtuoso", author: "Alexandre Havard"},
      {title: "Dualidad: el ego y el ser", author: "Arantxa Abad"},
      {title: "Ikigai esencial", author: "Ken Mogi"},
      {title: "Stolen Focus", author: "Johann Hari"},
    ]
  },
  {
    name: "Filosofía, Existencialismo y Condición Humana",
    icon: {
      name: spiral
    },
    book: [
      { title: "La insoportable levedad del ser", author: "Milan Kundera" },
      {title: "Recuerdos, sueños, pensamientos", author: "Carl Jung"},
      {title: "Un mundo feliz", author: "Aldous Huxley"},
      {title: "La sociedad del cansancio", author: "Byung-Chul Han"},
      {title: "Homo Deus", author: "Yuval Noah Harari"},
      {title: "Sapiens", author: "Yuval Noah Harari"},
      {title: "Nexus", author: "Yuval Noah Harari"},
      {title: "Being Wrong", author: "Kathryn Schulz"},
      {title: "Los Miserables", author: "Victor Hugo"},
      {title: "Momentos estelares de la humanidad", author: "Stefan Zweig"},
    ]
  },
  {
    name: "Grandes Clásicos y Visiones del Mundo",
    icon: {
      name: bank
    },
    book: [
      { title: "La Odisea", author: "Homero" },
      {title: "Fausto", author: "Goethe"},
      {title: "Ulises", author: "James Joyce"},
      {title: "La Divina Comedia", author: "Dante Alighieri"},
      {title: "Tristán e Isolda", author: "Gottfried von Strassburg"},
      {title: "La comedia humana", author: "Honoré de Balzac"},
      {title: "Moby Dick", author: "Herman Melville"},
      {title: "Crimen y Castigo", author: "Dostoievski"},
      {title: "Guerra y Paz", author: "Tolstói"},
      {title: "El nombre de la rosa", author: "Umberto Eco"},
    ]
  }
] 