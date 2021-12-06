export default function LikeSection({firstLikeImg , firstLikeName, numberLike}){
    return (
        <div class="like">
            <button><img src={firstLikeImg}/></button>
            <p>Curtido por <strong>{firstLikeName}</strong> e <strong>outras {numberLike - 1} pessoas</strong></p>
        </div>
    );
}