import { MagnifyingGlass } from 'react-loader-spinner';
import css from "../../styles.module.css";

export function Loader() {
    return (
        <MagnifyingGlass
            visible={true}
            height="300"
            width="300"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass={css.spinner}
            glassColor="#c0efff"
            color="#e15b64"
          />
    )
}