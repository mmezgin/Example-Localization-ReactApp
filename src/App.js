import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProtectedRoute } from './routes/ProtectedRoute'
import LoginModule from './Pages/LoginModule'
import { Provider, useStore } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Page_Name_Reducer from './Redux/Reducers/Page_Name_Reducer'
import User_Data_Reducer from './Redux/Reducers/User_Data_Reducer'
import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'


const appReducer = combineReducers({
  Page_Name_Reducer: Page_Name_Reducer,
  User_Data_Reducer: User_Data_Reducer,

})
const rootReducer = (state, action) => {
  if (action.type === 'DATA_TRANSFER') {
    state = undefined
  }
  return appReducer(state, action)
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'hi': 'hello',
          'Login': 'Login Page',
          'Language': 'Language',
          'LoginT': 'Login',

        }
      },
      tr: {
        translation: {
          'hi': 'Merhaba',
          'Login': 'Giriş Sayfası',
          'Language': 'Dil',
          'LoginT': 'Giriş Yap',
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
  });



function App() {
  const { t } = useTranslation();
  const store = createStore(rootReducer, applyMiddleware(thunk))




  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginModule} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
