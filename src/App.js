import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProtectedRoute } from './routes/ProtectedRoute'
import LoginModule from './Pages/LoginModule'
import Dashboard from './Pages/Dashboard'
import ContactUs from './Pages/ContactUs'
import { Provider, useStore } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Page_Name_Reducer from './Redux/Reducers/Page_Name_Reducer'
import User_Data_Reducer from './Redux/Reducers/User_Data_Reducer'
import Login_Reducer from './Redux/Reducers/Login_Reducer'
import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { store, persistedStore } from './Redux/Stores/Store'
import { PersistGate } from 'redux-persist/integration/react'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'hi': 'hello',
          'Login': 'Login Page',
          'Language': 'Lang',
          'Dashboard': 'Dashboard',
          'LoginT': 'Login',
          'LogoutT': 'Logout',
          'Welcome': 'Please login to continue!',
          'Mail': 'E-Mail',
          'Alert': 'You must log in first!',
          'Pw': 'Password',
          'ContactUs': 'Contact Us',
          'Title': 'Scorpion',
          'PwForgotten': 'Forgot your password?',
          'ScorpionText': 'Scorpions are predatory arachnids of the order Scorpiones. They have eight legs, and are easily recognized by a pair of grasping pincers and a narrow, segmented tail, often carried in a characteristic forward curve over the back and always ending with a stinger. The evolutionary history of scorpions goes back 435 million years. They mainly live in deserts but have adapted to a wide range of environmental conditions, and can be found on all continents except Antarctica. There are over 2,500 described species, with 22 extant (living) families recognized to date. Their taxonomy is being revised to account for 21st-century genomic studies.',
          'NameField': 'Full Name',
          'EmailField': 'E-Mail',
          'PhoneField': 'Phone Number',
          'CountryField': 'Country Code',
          'Code': 'Code',
          'Send': 'Send',
          'Incorrect': 'Incorrect E-Mail or Password!',
          'TextField': 'Your Message',
          'FeedBack': 'Check your browser console!',
        }
      },
      tr: {
        translation: {
          'hi': 'Merhaba',
          'Login': 'Giri?? Sayfas??',
          'Incorrect': 'E-Posta veya ??ifreniz Hatal??!',
          'Send': 'G??nder',
          'LogoutT': '????k????',
          'Dashboard': 'Anasayfa',
          'Alert': '??nce giri?? yapmal??s??n??z!',
          'FeedBack': 'Taray??c??n??z??n konsolunu kontrol edin!',
          'Title': 'Akrep',
          'ContactUs': '??leti??im',
          'Language': 'Dil',
          'LoginT': 'Giri?? Yap',
          'Welcome': 'L??tfen devam etmek i??in giri?? yap??n??z!',
          'Mail': 'E-Posta',
          'Pw': '??ifre',
          'PwForgotten': '??ifrenizi mi unuttunuz?',
          'ScorpionText': 'Akrep, ??r??mce??imsiler s??n??f??n??n Scorpiones tak??m??n?? olu??turan genellikle s??cak ve nemli b??lgelerde ya??ayan v??cutlar?? sert kitin bir tabaka ile ??rt??l?? k??vr??k ve kalk??k kuyru??unda zehir i??nesi bulunan eklembacakl??lara verilen ad.2009 y??l?? rakamlar??na g??re akreplerin ya??ayan 1753 t??r?? bulunur.T??rkiye"de 11 cinste toplanan 23 t??r?? bulunur. D??nyan??n en uzun birinci akrebi 23 cm boyuyla Heterometrus swammerdami, ikincisi ise 20 cm boyuyla Pandinus imperator t??rleridir Teraryumda bak??lan baz?? akrepler 8 y??la kadar ya??asa da do??ada ??m??rleri bundan daha k??sad??r.Akrepler araknoloji bilim dal?? i??erisinde araknologlar taraf??ndan incelenir.',
          'NameField': '??sim',
          'EmailField': 'E-Posta',
          'PhoneField': 'Telefon Numaras??',
          'CountryField': '??lke Kodu',
          'TextField': 'Mesaj??n??z',
          'Code': 'Kod',
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
  })


function App() {
  const { t } = useTranslation();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Router>
          <Switch>
            <Route exact path='/' component={LoginModule} />
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/ContactUs' component={ContactUs} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
