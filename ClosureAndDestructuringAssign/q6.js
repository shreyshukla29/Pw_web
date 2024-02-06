function createPlaylist(playlistName) {
    let playlist = [];
  
    return {
        addSong: function(songName, artistName) {
            playlist.push({ songName, artistName });
        },
  
        listSongs: function() {
            if (playlist.length === 0) {
                console.log(`${playlistName} Playlist is empty`);
            } else {
                console.log(`${playlistName} Playlist: ${playlist.map(song =>
                    `${song.songName} by ${song.artistName}`).join(', ')}`);
            }
        }
    };
  }
  
  const myPlaylist = createPlaylist('GYM');
  
  myPlaylist.addSong('song1', 'Artist1');
  myPlaylist.addSong('song1', 'Artist2');
  myPlaylist.addSong('song1', 'Artist3');
  myPlaylist.addSong('song2', 'Artist1');
  
  myPlaylist.listSongs();