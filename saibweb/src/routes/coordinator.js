export const goToAddUserPage = (navigate) => {
    navigate("/criarUsuario")
}
export const goToEditUserPage = (navigate, id) => {
    navigate(`/editarUsuario/${id}`)
}

export const goToHome = (navigate) => {
    navigate(`/`)
}