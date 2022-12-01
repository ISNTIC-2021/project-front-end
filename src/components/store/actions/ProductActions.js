/*export const getAllProducts = (categorie = "") => {
    return async (dispatch, getState) => {
        dispatch({
            type: "SET_TO_NULL",
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        dispatch({
            type: "GET_PRODUCTS",
        });
    };
};


/* export const getProductsByCat = (categorie = "") => {
    return async (dispatch, getState) => {
        dispatch({
            type: "SET_TO_NULL",
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (categorie === "all") dispatch(getAllProducts());
        else
            dispatch({
                type: "GET_PRODUCTS_BY_CAT",
                categorie,
            });
        };
};
 */