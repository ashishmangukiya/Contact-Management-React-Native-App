export type contact = {
    id: string,
    name: string,
    mobile: string,
    profile_photo: string,
    dob: string,
    email: string,
    created_at: Date,
    updated_at: Date
}

export type navigation = {
    navigation: {
        navigate: Function,
        state: {
            params: {
                contactDetails: contact
            }
        }
    }
}