import * as React from 'react';
import {useState , useEffect} from 'react'; 
import {Link} from 'react-router-dom'; 
export interface AlbumsProps{}

export interface Album{
    id:number|null,
    title : string|null,
    artist: string|null,
    url : string|null, 
    image : string|null,
    thumbnail_image: string|null,
    _created : Date|null
}
const Albums : React.SFC<AlbumsProps> = props =>
{
const [albums, SetAlbums] = useState<Album[]>([]);

const getAlbums = async () => {
    let r = await fetch('./api/albums');
    let albums = await r.json();
    SetAlbums(albums);
}
useEffect(() => {getAlbums();}, [])

return (
    <section className="row my-2">
<ul className="col-md-6 offset-md-3 list-group">
        {albums.map(album => (
            <li key={album.id} className="list-group-items d-flex justify-content-between">
                <h3>{album.title}</h3>
                <Link to={`/${album.id}/details`} className="btn btn-info shadow-sm">Get Details</Link>
            </li>
        ))}
</ul>
    </section>

)
}

export default Albums