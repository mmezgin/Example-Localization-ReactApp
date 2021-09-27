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
          'Login': 'Giriş Sayfası',
          'Incorrect': 'E-Posta veya Şifreniz Hatalı!',
          'Send': 'Gönder',
          'LogoutT': 'Çıkış',
          'Dashboard': 'Anasayfa',
          'Alert': 'Önce giriş yapmalısınız!',
          'FeedBack': 'Tarayıcınızın konsolunu kontrol edin!',
          'Title': 'Akrep',
          'ContactUs': 'İletişim',
          'Language': 'Dil',
          'LoginT': 'Giriş Yap',
          'Welcome': 'Lütfen devam etmek için giriş yapınız!',
          'Mail': 'E-Posta',
          'Pw': 'Şifre',
          'PwForgotten': 'Şifrenizi mi unuttunuz?',
          'ScorpionText': 'Akrep, örümceğimsiler sınıfının Scorpiones takımını oluşturan genellikle sıcak ve nemli bölgelerde yaşayan vücutları sert kitin bir tabaka ile örtülü kıvrık ve kalkık kuyruğunda zehir iğnesi bulunan eklembacaklılara verilen ad.2009 yılı rakamlarına göre akreplerin yaşayan 1753 türü bulunur.Türkiye"de 11 cinste toplanan 23 türü bulunur. Dünyanın en uzun birinci akrebi 23 cm boyuyla Heterometrus swammerdami, ikincisi ise 20 cm boyuyla Pandinus imperator türleridir Teraryumda bakılan bazı akrepler 8 yıla kadar yaşasa da doğada ömürleri bundan daha kısadır.Akrepler araknoloji bilim dalı içerisinde araknologlar tarafından incelenir.',
          'NameField': 'İsim',
          'EmailField': 'E-Posta',
          'PhoneField': 'Telefon Numarası',
          'CountryField': 'Ülke Kodu',
          'TextField': 'Mesajınız',
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
