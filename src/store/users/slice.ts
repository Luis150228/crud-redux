import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**Aqui definimos la clase del objeto que vamos a procesar */
type usrId = number
export interface User {
    name: string;
    username: string;
    isFollow: boolean;
}

export interface UserWhitId extends User {
    id: usrId;
}
/**Aqui definimos la clase del objeto que vamos a procesar */

//Inicializamos el estado de la aplicacion con un arreglo de objetos que debe venir de la api
export
const initialState: UserWhitId[] = [
  {id: 1, username:'fenixRDevlf', name:'Rangel Diaz Luis Fher', isFollow: false},
  {id: 2, username:'midulive', name:'Miguel Angel Duran', isFollow: true},
  {id: 3, username:'clubamerica', name:'FC America', isFollow: false},
  {id: 4, username:'vidamrr', name:'Vida MRR - Programacion web', isFollow: false}
];

//Aqui definimos el slice de usuarios las ordenes que se pueden ejecutar
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<usrId>) => {
        const id = action.payload;
        return state.filter((user) => user.id !== id);
    }
  },
});

export default usersSlice.reducer;