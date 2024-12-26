interface IEnvironment {
    mode: 'development' | 'production';
    googleMapAutoCompleteApiKey: string;
    phone: { label: string; value: string };
}

const ENVS: IEnvironment = {
    mode: 'development',
    googleMapAutoCompleteApiKey: 'AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8',
    phone: { label: '0989.265.867', value: '+84989265867' },
};

export default ENVS;
