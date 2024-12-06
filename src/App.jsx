import Button from "./components/button/button";
import CardContainer from "./components/Card-container/CardContainer";
import Card from "./components/Card/card";
import Image from "./components/imgage/imgage";
import Text from "./components/text/text";
import Title from "./components/title/title";

const App = () => {
  return (
    <>
      <CardContainer>
        <Card color="orange">
          <Image url={'./assets/images/icon-sedans.svg'}/>
          <Title text={'SEDANS'}/>
          <Text text={'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'} />
          <Button color= 'orange' />
        </Card>
        <Card color="blue">
        <Image url={'./assets/images/icon-suvs.svg'}/>
          <Title text={'SUVS'}/>
          <Text text={'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'} />
          <Button color= 'blue' />
        </Card>
        <Card color="green">
        <Image url={'./assets/images/icon-luxury.svg'}/>
          <Title text={'LUXURY'}/>
          <Text text={'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'} />
          <Button color= 'green' />
        </Card>
      </CardContainer>
    </>
  );
};

export default App;
