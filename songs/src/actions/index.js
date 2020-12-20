

//Action Creator
export const SelectSong = (song) => {           
    return({                                //Action #1
        type: "SELECTED_SONG",
        payload: song
    });
};