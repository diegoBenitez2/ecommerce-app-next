// import Button from "@atoms/Button/Button";
// import Checkbox from "@atoms/Checkbox/Checkbox";
// import InpuText from "@atoms/InputText/InpuText";
// import Stepper from "@atoms/Stepper/Stepper";
// import FeatureCard from "@atoms/FeatureCard/FeatureCard";
// import ProductCard from "@atoms/ProductCard/ProductCard";
// import SignUpMail from "@molecules/SignUpMail/SignUpMail";
import Header  from '@organisms/Header/Header';
import Nav from '@organisms/Nav/Nav';
import Footer from "@organisms/Footer/Footer";
import { useState } from "react";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [form, setForm] = useState({
    count: 0,
    filter: '',
    signUp: 'diego@email.com',
    product: {
      id: 1,
      link: '#',
      image: {
        url: '',
        alt: '',
      },
      title: 'The Daily chair',
      price: 250,
    },
  });


  return (
    <div className="App">
      {/* <Header />
      <Nav /> */}
      <Header />
      <Nav />
      {/* <Button className="background-dark-primary" />
      <Checkbox id='sofa' name='filter' onchange={handleForm} value={'Sofas'}/>
      { form.filter }
      <InpuText name='text' value={form.text} oninput={handleForm} />
      <Stepper name='count' value={form.count} onstep={handleForm} />
      <FeatureCard title='Esto es un titulo' desc='Esta es la descripcion de la la card.' /> */}
      {/* <ProductCard   
            id={1}
            link='https://freepngimg.com/png/563-chair-png-image'
            title='The Daily chair'
            price={250}
            urlImage='https://th.bing.com/th/id/R.586be63c1a0c3e1a295e5d2cef816705?rik=kZ2Z70hOiz8%2bNw&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fchair%2f44-chair-png-image.png&ehk=B6V7bRa2aaC%2feycSQYDyGP%2b3IsVn8LJ5VwFSePWQEEI%3d&risl=&pid=ImgRaw&r=0'
            altImage='chair image'
    addShoppingCard={handleForm} />*/}
      <Footer />
    </div>
  );
}

export default App;
