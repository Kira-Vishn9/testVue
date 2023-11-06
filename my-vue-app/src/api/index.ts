import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onPost('/your-api-endpoint').reply(200, {
    message: 'Данные успешно отправлены',
});

type dataType = {
    inputName: string,
    inputEmail: string,
    inputPosition: string,
    inputPassword: string,
    inputPasswordRepeat: string,
    isVisibilityProfile: boolean,
    agreement: boolean
}

 export const submitData = async (Data: dataType) => {
     try {
         const response = await axios.post('/your-api-endpoint', {
             public: true,
             username: Data.inputName,
             role: Data.inputPosition,
             email: Data.inputEmail,
             password: Data.inputPassword,
             password_repeat: Data.inputPasswordRepeat,
         });

         if(response.status === 200) {
             return 200
         }
          throw new Error('Ошибка')
     } catch (error) {
         console.log(error)
     }
};

