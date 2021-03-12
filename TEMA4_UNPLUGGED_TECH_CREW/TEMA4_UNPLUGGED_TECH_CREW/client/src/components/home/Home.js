import React from 'react';
import './Home.css';
import food from '../../food.png';
import infpic1 from '../../infpic1.png';
import infpic2 from '../../infpic2.png';
import infpic3 from '../../infpic3.png';

class Home extends React.Component {
    render() {
        return (
            <div>
            <h1>Food waste</h1>

            
             <img className="pic1" src ={food} alt="food"></img>
              <div className="flexbox-container">
            <div><img src ={infpic1}></img></div>
            <div><img src ={infpic2}></img></div>
            <div><img src ={infpic3}></img></div>

            </div>
                <div >
                <a>More info:</a>
                <a class="resp-sharing-button__link" href="https://www.facebook.com/search/top/?q=food%20waste&epa=SEARCH_BOX" target="_blank" rel="noopener" aria-label="Share on Facebook">
                  <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z"/></svg>
                    </div>Facebook</div>
                </a>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <a href="https://www.instagram.com/explore/tags/foodwaste/" class="fa fa-instagram">Instagram</a>
                </div>
                
                <div>
                <a>Share:</a>
                <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Make%20a%20change.%20Start%20donating%20food%20with%20the%20Food%20Waste%20App!%0A&amp;url=http%3A%2F%2F18.222.182.79:3000/" target="_blank" rel="noopener" aria-label="Share on Twitter">
                  <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z"/></svg>
                    </div>Share on Twitter</div>
                </a>
                
                </div>

            </div>

        );
    }

}

export default Home;
