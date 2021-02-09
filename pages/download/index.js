import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

const downloads = {
  clickWealthSystem: '/30DaysToBiggerEmailList-Ebook.pdf',
  customKetoDiet: '/Deliciously_Easy_Keto_Recipes.pdf',
};

const DownloadPage = () => {
  const router = useRouter();
  const { offerKey, offerLink } = router.query;

  const sendToOfferPage = () => {
    setTimeout(() => {
      router.push(offerLink);
    }, 2000);
  };

  return (
    <div className='container'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Thank You! Find your download below</h1>
        <a href={downloads[offerKey]} download>
          <button
            onClick={sendToOfferPage}
            id='download-button'
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '2px',
              backgroundColor: '#0077ee',
              cursor: 'pointer',
              boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.9)',
              color: 'white',
              fontSize: '1.3rem',
            }}
          >
            Download Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default DownloadPage;
