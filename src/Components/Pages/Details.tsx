import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {useState , useEffect} from 'react'
import {Album} from './Album'; 

export interface DetailsProps extends RouteComponentProps<{id:string;}>
{

}
 const Details : React.SFC<DetailsProps> = ({ history, match : {params : {id } }}) => {
    const [Album, setAlbum] = useState<Album>({
        id: null,
        title: null,
        artist : null,
        url: null,
        image: null,
        thumbnail_image: null,
        _created : null
    }); 


    const getAlbum = async () => {
        let r = await fetch(`/api/albums/${id}`);
        let album = await r.json();
        setAlbum(album);
    }
    useEffect( ()=> {getAlbum();},[id])

    return (
      <section className="row my-5">
        <article className="col-md-12">
          <div className="card m-1 p-1 shadow">
            <img src={Album.image==null?"":Album.image} alt="image" />
            <div className="card-body text-center">
                    <h4>{Album.artist}</h4>
              <div className="d-flex justify-content-center align-items-center mb-2" style={{ height : '8%', width: '8%'}}></div>
            <img src={Album.thumbnail_image== null?"": Album.thumbnail_image} />
              <a href={Album.url== null?"":Album.url}></a>
              <button
              onClick={()=> history.goBack()}
              className="btn btn-warning btn-block shadow mx-auto"></button>
            </div>
          </div>
        </article>
      </section>
    );


}

export default Details