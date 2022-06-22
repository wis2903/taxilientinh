import { IAutocomplete } from './types';

class PlacesAutocompleteService {
    private static instance: PlacesAutocompleteService;

    private autocomplete: IAutocomplete;

    constructor() {
        const GoogleAutocompleteService = Object(window).google.maps.places.AutocompleteService;
        this.autocomplete = new GoogleAutocompleteService();
    }

    public static getInstance(): PlacesAutocompleteService {
        if(PlacesAutocompleteService.instance) return PlacesAutocompleteService.instance;
        
        const instance = new PlacesAutocompleteService();
        PlacesAutocompleteService.instance = instance;
        return instance;
    }

    public async getPredictions(address: string): Promise<string[]>{
        try{
            const res = await this.autocomplete.getPlacePredictions({
                input: address
            });

            return res.predictions.map(pre => String(pre.description));
        } catch (e){
            return [];
        }
    }
}

export default PlacesAutocompleteService;