import {createStore} from 'vuex';
import axiosClient from '../axios';

// const tmpSurveys = [
//     {
//         id: 100,
//         title: 'TheCodeholic Youtube channel content',
//         slug: 'thecodeholic-youtube-channel-content',
//         status: 'draft',
//         image_url: "https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
//         created_at: "2021-12-20 18:00:00",
//         updated_at: "2021-12-20 18:00:00",
//         expire_date: "2021-12-20 18:00:00",
//         questions: [
//             {
//                 id:1,
//                 type: 'select',
//                 question: 'From which country are you?',
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//                 data: {
//                     options: [
//                         {
//                             uuid: "f8affdlajfldj",
//                             text: "USA"
//                         },
//                         {
//                             uuid: "f8affdlfldj",
//                             text: "Georgia"
//                         },
//                         {
//                             uuid: "f8affdlajfj",
//                             text: "Germany"
//                         }
//                     ],
//                 },
//             },
//         ],
//     },
//     {
//         id: 200,
//         title: 'TheCodeholic Youtube channel content',
//         slug: 'thecodeholic-youtube-channel-content',
//         status: 'draft',
//         image_url: "https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
//         created_at: "2021-12-20 18:00:00",
//         updated_at: "2021-12-20 18:00:00",
//         expire_date: "2021-12-20 18:00:00",
//         questions: [
//             {
//                 id:1,
//                 type: 'select',
//                 question: 'From which country are you?',
//                 description: null,
//                 data: {
//                     options: [
//                         {
//                             uuid: "f8affdlajfldj",
//                             text: "USA"
//                         },
//                         {
//                             uuid: "f8affdlfldj",
//                             text: "Georgia"
//                         },
//                         {
//                             uuid: "f8affdlajfj",
//                             text: "Germany"
//                         }
//                     ],
//                 },
//             },
//         ],
//     },
//     {
//         id: 300,
//         title: 'TheCodeholic Youtube channel content',
//         slug: 'thecodeholic-youtube-channel-content',
//         status: 'draft',
//         image_url: "https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
//         created_at: "2021-12-20 18:00:00",
//         updated_at: "2021-12-20 18:00:00",
//         expire_date: "2021-12-20 18:00:00",
//         questions: [
//             {
//                 id:1,
//                 type: 'select',
//                 question: 'From which country are you?',
//                 description: null,
//                 data: {
//                     options: [
//                         {
//                             uuid: "f8affdlajfldj",
//                             text: "USA"
//                         },
//                         {
//                             uuid: "f8affdlfldj",
//                             text: "Georgia"
//                         },
//                         {
//                             uuid: "f8affdlajfj",
//                             text: "Germany"
//                         }
//                     ],
//                 },
//             },
//         ],
//     },
//     {
//         id: 400,
//         title: 'TheCodeholic Youtube channel content',
//         slug: 'thecodeholic-youtube-channel-content',
//         status: 'draft',
//         image_url: "https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
//         created_at: "2021-12-20 18:00:00",
//         updated_at: "2021-12-20 18:00:00",
//         expire_date: "2021-12-20 18:00:00",
//         questions: [
//             {
//                 id:1,
//                 type: 'select',
//                 question: 'From which country are you?',
//                 description: null,
//                 data: {
//                     options: [
//                         {
//                             uuid: "f8affdlajfldj",
//                             text: "USA"
//                         },
//                         {
//                             uuid: "f8affdlfldj",
//                             text: "Georgia"
//                         },
//                         {
//                             uuid: "f8affdlajfj",
//                             text: "Germany"
//                         }
//                     ],
//                 },
//             },
//         ],
//     }
// ]

const store = createStore({
    state:{
        user:{
            data:{},
            token: sessionStorage.getItem('TOKEN')
        },
        dashboard:{
            loading: false,
            data: {}
        },
        currentSurvey: {
            loading: false,
            data: {}
        },
        surveys: {
            loading: false,
            links: [],
            data: []
        },
        questionTypes: ['select', 'radio', 'text', 'checkbox'],
        notification: {
            show: false,
            type: null,
            message: null
        }
    },
    getters:{},
    actions:{
        register({commit}, user) {
            return axiosClient.post('/register', user)
              .then(({data}) => {
                commit('setUser', data.user);
                commit('setToken', data.token)
                return data;
              })
          },
        login({commit}, user){
            return axiosClient.post('/login', user)
                .then(({data}) => {
                    commit('setUser', data.user);
                    commit('setToken', data.token);
                })
          },
        logout({commit}) {
            return axiosClient.post('/logout')
              .then(response => {
                commit('logout')
                return response;
              })
          },
        saveSurvey({commit}, survey){
            delete survey.image_url;
            let response;
            if(survey.id){
                response = axiosClient.put(`/survey/${survey.id}`, survey)
                .then((res) => {
                    commit('setCurrentSurvey', res.data);
                    return res;
                });
            } else {
                response = axiosClient.post('/survey', survey)
                .then((res)=>{
                    commit('setCurrentSurvey', res.data);
                    return res;
                });
            }

            return response;
          },
        getSurvey({commit}, id){
            commit('setCurrentSurveyLoading', true);
            return axiosClient
                .get(`/survey/${id}`)
                .then((res) => {
                    commit('setCurrentSurvey', res.data);
                    commit('setCurrentSurveyLoading', false)
                    return res;
                })
                .catch((err) => {
                    commit('setCurrentSurveyLoading', false);
                    throw err;
                })
          },
        deleteSurvey({}, id){
            return axiosClient.delete(`/survey/${id}`);
        },
        getSurveys({commit}, {url = null} = {}){
            url = url || '/survey'
            commit('setSurveysLoading', true);
            return axiosClient.get(url)
                .then((res)=>{
                   commit('setSurveysLoading', false);
                   commit('setSurveys', res.data)
                    return res;
                })
        },
        getSurveyBySlug({ commit }, slug) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient
              .get(`/survey-by-slug/${slug}`)
              .then((res) => {
                commit("setCurrentSurvey", res.data);
                commit("setCurrentSurveyLoading", false);
                return res;
              })
              .catch((err) => {
                commit("setCurrentSurveyLoading", false);
                throw err;
              });
          },
        saveSurveyAnswer({commit}, {surveyId, answers}){
            return axiosClient.post(`/survey/${surveyId}/answer`, {answers});
          },
        getDashboardData({commit}) {
            commit('dashboardLoading', true)
            return axiosClient.get(`/dashboard`)
            .then((res) => {
              commit('dashboardLoading', false)
              commit('setDashboardData', res.data)
              return res;
            })
            .catch(error => {
              commit('dashboardLoading', false)
              return error;
            })

        },
    },
    mutations:{
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
            sessionStorage.removeItem("TOKEN");
        },
        setUser: (state, user) => {
            state.user.data = user;
        },
        setToken: (state, token) => {
            state.user.token = token;
            sessionStorage.setItem('TOKEN', token);
        },
        // saveSurvey:(state, survey) => {
        //     state.surveys = [...state.surveys, survey.data];
        // },
        // updateSurvey:(state, survey)=>{
        //     state.surveys = state.surveys.map((s)=>{
        //         if(s.id == survey.data.id){
        //             return survey.data;
        //         }
        //         return s;
        //     })
        // },
        setCurrentSurveyLoading: (state, loading) => {
            state.currentSurvey.loading = loading;
        },
        setCurrentSurvey: (state, survey) => {
            state.currentSurvey.data = survey.data;
        },
    setSurveysLoading: (state, loading) => {
            state.surveys.loading = loading;
        },
        setSurveys: (state, surveys) => {
            state.surveys.links = surveys.meta.links;
            state.surveys.data = surveys.data;
        },
        notify: (state, {message, type}) => {
            state.notification.show = true,
            state.notification.type = type,
            state.notification.message = message,
            setTimeout(() => {
                state.notification.show = false;
            }, 3000)
        },
        dashboardLoading: (state, loading) => {
            state.dashboard.loading = loading;
        },
        setDashboardData: (state, data) => {
            state.dashboard.data = data
        }

    },
    modules:{}
})


export default store;
