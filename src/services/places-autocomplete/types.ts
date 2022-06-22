export interface IAutocompletionRequest {
    input: string
}

export interface IAutocompletionResponse {
    predictions: IAutocompletePrediction[],
}

export interface IAutocompletePrediction {
    description: string
}

export interface IAutocomplete {
    getPlacePredictions: (request: IAutocompletionRequest) => Promise<IAutocompletionResponse>,
    getQueryPredictions: (request: IAutocompletionRequest) => Promise<IAutocompletionResponse>,
}