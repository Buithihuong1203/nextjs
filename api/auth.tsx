import instance from "./instance";
export const list = (url) => {
    return instance.get(url);

}
export const signup = (user) => {
    return instance.post("/users", user )
}