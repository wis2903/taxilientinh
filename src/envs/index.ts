interface IEnvironment {
    mode: 'development' | 'production',
    googleMapAutoCompleteApiKey: string,
    phone: { label: string, value: string, }
}

const ENVS: IEnvironment = {
    mode: 'development',
    googleMapAutoCompleteApiKey: 'AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8',
    phone: { label: '0932.193.765', value: '+84932193765' }
};

export default ENVS;