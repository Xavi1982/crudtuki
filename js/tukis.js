const {createApp} = Vue;

createApp({
    data(){
        return{
            tuki: [],
            url: 'https://crudtuki.pythonanywhere.com/tukis',
            cargando: true,
            error: false
        }
    },

    methods: {

        fetchApi(url){
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                this.tuki = data;
                this.cargando = false;
                console.log(data)
            })
            .catch(err=>{
                console.error(err);
                this.error = true;
            })
        },

        eliminar(id){
            const url = this.url+"/"+id
            let options = {
                method: 'DELETE'
            }

            fetch(url,options)
            .then(res => res.json())
            .then(data =>{
                location.reload();
            })
            .catch(err => console.error(err))
        }
    },

    created(){
        this.fetchApi(this.url);
    }
    
}).mount('#app')
