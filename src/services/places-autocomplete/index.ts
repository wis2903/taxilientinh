import axios from 'axios';
import { IAutocomplete } from './types';

class PlacesAutocompleteService {
    private static instance: PlacesAutocompleteService;

    private autocomplete: IAutocomplete;

    constructor() {
        const GoogleAutocompleteService = Object(window).google.maps.places.AutocompleteService;
        this.autocomplete = new GoogleAutocompleteService();
    }

    public static getInstance(): PlacesAutocompleteService {
        if (PlacesAutocompleteService.instance) return PlacesAutocompleteService.instance;

        const instance = new PlacesAutocompleteService();
        PlacesAutocompleteService.instance = instance;
        return instance;
    }

    public async getPredictions(address: string): Promise<string[]> {
        try {
            // const res = await this.autocomplete.getPlacePredictions({
            //     input: address
            // });

            // return res.predictions.map(pre => String(pre.description));
            const response = await axios.get(
                `https://rsapi.goong.io/place/autocomplete?input=${address}&api_key=lHIdCJBqVNvhDqEQVZ9jUrW6n5CSCEsGJvNEpDFy`
            );
            return response.data.predictions.map(
                (item: Record<string, unknown>) => item.description || ''
            );
            return [];
        } catch (e) {
            return [];
        }
    }
}

export default PlacesAutocompleteService;
