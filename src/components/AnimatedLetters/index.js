import './index.scss';

const AnimatedLetters = ({letterClass, strArray, idx})=>(
    <span>
        {
            strArray.map((char, i)=>(
                <span key={char + i} className={`${i + idx}`}>
                    {char}
                </span>
            ))
        }
    </span>
)

export default AnimatedLetters;