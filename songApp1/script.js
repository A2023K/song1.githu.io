
let song_database;
async function fetch_song_data(){
    const response = await fetch('./file.json');
    let js_version_of_data = await response.json();
    song_database = js_version_of_data;
    console.log(song_database);
    for( let i=0; i<song_database.length; i++)
    create_song_cards(song_database[i]);
}
fetch_song_data();
     
let song_parent_div = document.getElementById('songId');
function create_song_cards(songObj){
    let song_cards = document.createElement('div');
    song_cards.id = songObj.id;
    song_cards.classList.add('song-card','large-view');
    song_parent_div.appendChild(song_cards);

    let img_div = document.createElement('div');
    img_div.classList.add('img-div');
    song_cards.appendChild(img_div);

    let img = document.createElement('img');
    img.src= songObj.img_src;
    
    img_div.appendChild(img);

    let song_name_div = document.createElement('div');
    song_name_div.classList.add('song-name');
    song_name_div.innerHTML = songObj.name;
    song_cards.appendChild(song_name_div);

    let singer_names_div = document.createElement('div');
    singer_names_div.classList.add('singer-name');
    singer_names_div.innerHTML = songObj.singer;
    song_cards.appendChild(singer_names_div);

    let sing_country_div = document.createElement('div');
    sing_country_div.classList.add('country');
    sing_country_div.innerHTML = songObj.country;
    song_cards.appendChild(sing_country_div);

    let type_div = document.createElement('div');
    type_div.classList.add('type');
    type_div.innerHTML = songObj.type;
    song_cards.appendChild(type_div);
 
}
let large_view_btn = document.getElementById('big-btn');
let mid_view_btn = document.getElementById('mid-btn');
let lis_view_btn = document.getElementById('lis-btn');
let song_cards = document.getElementsByClassName('song-card');
large_view_btn.onclick = function(){
    for(let i=0; i<=song_cards.length; i++){
        song_cards[i].classList.remove('mid-view', 'lis-view');
        song_cards[i].classList.add('large-view');
    }
}
mid_view_btn.onclick = function(){
    for(let i=0; i<=song_cards.length;i++){
        song_cards[i].classList.remove('large-view','lis-view');
        song_cards[i].classList.add('mid-view');
    }
}
lis_view_btn.onclick = function(){
    for(let i=0; i<=song_cards.length;i++){
        song_cards[i].classList.remove('mid-view','large-view');
        song_cards[i].classList.add('lis-view');
    }
}
let all_show_btn = document.getElementById('show-all-btn');
let country_btn = document.getElementById('country-btn');
let rock_btn = document.getElementById('rock-btn');
let rap_btn = document.getElementById('rap-btn');
let pop_btn = document.getElementById('pop-btn');
let song_type = document.getElementsByClassName('song-type');

    pop_btn.onclick =function(){
        let filtered_pop_songs = song_database.filter(
            function(song_obj){
                    return song_obj.type == 'pop'
            }
        )
        console.log(filtered_pop_songs);
     for(let i=0; i<song_cards.length; i++){
        if(filtered_pop_songs.some(function(song_obj){
            console.log( song_cards[i].id);
            return song_obj.id == song_cards[i].id;
        }))
        song_cards[i].classList.remove('no-display');
        else
        song_cards[i].classList.add('no-display');
        }
    }
    country_btn.onclick = function(){
        let filtered_country_songs = song_database.filter(
            function(song_obj){
                return song_obj.type == 'country'
            }
        )
        console.log(filtered_country_songs);
        for(let i=0; i<song_cards.length; i++){
            if (filtered_country_songs.some(
                    function(song_obj){
                        console.log(song_cards[i].id);
                        return song_obj.id == song_cards[i].id;
                    }
                )
            )
            song_cards[i].classList.remove('no-display');
            else
            song_cards[i].classList.add('no-display');
        }
    }
    rap_btn.onclick = function(){
        let filtered_rap_songs = song_database.filter(
            function(song_obj){
                return song_obj.type == 'rap'
            }
        )
        console.log(filtered_rap_songs);
        for(let i=0; i<song_cards.length; i++){
            if(filtered_rap_songs.some(
                function(song_obj){
                    return song_obj.id == song_cards[i].id;
                }
            ))
            song_cards[i].classList.remove('no-display');
            else
            song_cards[i].classList.add('no-display');
        }
    }
    rock_btn.onclick = function(){
        let filtered_rock_songs = song_database.filter(
            function(song_obj){
                return song_obj.type == 'rock'
            }
        )
        console.log(filtered_rock_songs);
        for(let i=0; i<song_cards.length; i++){
            if(filtered_rock_songs.some(
                function(song_obj){
                    return song_obj.id == song_cards[i].id;
                }
            ))
            song_cards[i].classList.remove('no-display');
            else
            song_cards[i].classList.add('no-display');
        }
    }
    
    all_show_btn.onclick = function(){
        for(let i in song_cards){
            song_cards[i].classList.remove('no-display');
        }   
    }
 let song_names = document.getElementsByClassName('song-name');

let result_1 = document.getElementById('result');
    document.getElementById('check-btn').onclick = function(){
        let sub_name = document.getElementById('sub-string').value;
        for(i=0; i<song_cards.length; i++){
        if(song_names[i].innerHTML.toLowerCase().includes(sub_name.toLowerCase()))
         song_cards[i].classList.remove('no-display');
        else
        song_cards[i].classList.add('no-display');
        result_1.classList.remove('no-display');
        }
    }
    
