import axios from "axios";


export const fetchApi = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{
        Authorization:'barear'+'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWNjYmIxYTk2ODhmN2ZkYWY2NWU1NjQ3MzRlNTMwMiIsInN1YiI6IjY1MmY5MzQwY2FlZjJkMDBhZGE4OWQyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pitRcM_qOix7NkhD_4c1KoYrneUUAp2m8K6osIHFSLM'
    }
})