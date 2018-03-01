import firebase from 'firebase'

export default {
    name: 'login',
    data () {
        return {
            menu: false,
            auth: null,
            providers: [{
                id: 'google',
                name: 'Google',
                provider: new firebase.auth.GoogleAuthProvider()
            }, {
                id: 'facebook',
                name: 'Facebook',
                provider: new firebase.auth.FacebookAuthProvider()
            }],
            isNotification: true,
            isEmail: true
        }
    },
    methods: {
        selectProvider: function(item) {
            this.menu = false;
            firebase.auth().signInWithPopup(item.provider).then((result) => {
                this.auth = result;
            }).catch((error) => {
                console.log(error);
                this.auth = null;
            });
        },
        signout: function() {
            this.menu = false;
            firebase.auth().signOut().then(() => {
            }).catch(function (error) {
                console.log(error)
            });
        }
    },
    created: function() {
        firebase.auth().onAuthStateChanged((user) => {
            this.auth = user || null;
        });
    }
}
