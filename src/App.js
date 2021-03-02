import Accordion from './components/Accordion/Accordion';

const AccordionData =[
  {
    title: 'Accordion Item 1 !',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dignissimos molestias ut tenetur consequatur nostrum alias! Doloremque, quaerat quod! Consequatur odit exercitationem blanditiis? Pariatur quae ad laboriosam nisi consectetur atque.',
  },

  {
    title: 'Accordion Item 2 !',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dignissimos molestias ut tenetur consequatur nostrum alias! Doloremque, quaerat quod! Consequatur odit exercitationem blanditiis? Pariatur quae ad laboriosam nisi consectetur atque.',
  },

  {
    title: 'Accordion Item 3 !',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dignissimos molestias ut tenetur consequatur nostrum alias! Doloremque, quaerat quod! Consequatur odit exercitationem blanditiis? Pariatur quae ad laboriosam nisi consectetur atque.',
  }
];

function App() {   
  return(
    <Accordion data={AccordionData}/>
  )
}

export default App;
