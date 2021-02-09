import EmailForm from './EmailForm';
import PromoImage from './PromoImage';

const images = {
  customKetoDiet: '/easy-keto-recipes-cover.png',
  clickWealthSystem: '/click-wealth-system-banner.png',
};

const FormContainer = ({ offerLink, offerKey }) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-between', gap: '30px' }}
    >
      <EmailForm {...{ offerKey }} {...{ offerLink }} />
      <PromoImage image={images[offerKey]} />
    </div>
  );
};

export default FormContainer;
