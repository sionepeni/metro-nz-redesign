import "../../style/ListingError.css"
import { WarningCircle } from "phosphor-react"

export default function ListingError() {
    return (
        <>
            <div className="listing-error">
                <WarningCircle size={80} color="red" />
                <p>
                    Sorry, we couldn't find anything matcheing your search.
                    <br />
                    Check out other listings which closely match your criteria:
                </p>
            </div>
        </>
    )
}
