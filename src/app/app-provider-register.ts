import { Provider } from "@angular/core";
import { MovieService } from "./services/movie.service";
import { MOVIE_SERVICE } from "./services/Imovies.service";

export const ProviderList : Provider[]=[
    {
        provide:MOVIE_SERVICE,
        useClass:MovieService
    }
]