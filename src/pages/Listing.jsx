import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase.config';
import Spinner from '../components/Spinner';
import shareIcon from '../assets/svg/shareIcon.svg';



function Listing() {

    const [ listing, setListing  ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ shareLinkCopied, setShareLinkCopied ] = useState(false)

    const navigate = useNavigate()
    const params = useParams()
    console.log("params", params)

    const auth = getAuth()

    useEffect(() => {
        const fetchListing = async () => {
            const docRef = doc(db, 'listings', params.listingId)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()) {
                console.log("------",docSnap.data());
                setListing(docSnap.data())
                setLoading(false)
            }
        }

        fetchListing()
    }, [ navigate, params.listingId ])

    console.log('listing', listing)

   if(loading) {
    return <Spinner />
   }

  return (
  <main>
    {/* SLIDER */}

    <div className="shareIconDiv" onClick={ () =>{
        //copy to clipboard
        navigator.clipboard.writeText(window.location.href)
        setShareLinkCopied(true)

        setTimeout(() => {
            setShareLinkCopied(false)
        }, 2000)
    } }>
        <img src={shareIcon} alt='' />
    </div>

    {shareLinkCopied && <p className='linkCopied'>Link Copied!</p> }

    <div className="listingDetails">
        <p className="listingName">{listing.name} - $ {listing.offer ? listing.discountedPrice : listing.regularPrice}</p>
        <p className="listingLocation">{listing.location}</p>
        <p className="listingType">
        For {listing.type === 'rent' ? 'Rent' : "Sale"}
        </p>
        {listing.offer && (
            <p className="discountPrice">
                ${listing.regularPrice - listing.discountedPrice} discount
            </p>
        )}

        <ul className="listingDetailsList">
            <li>
                {listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : '1 Bedroom'}
            </li>
            <li>
                {listing.bathrooms > 1 ? `${listing.bathrooms} Bathrooms` : '1 Bathroom'}
            </li>
            <li>{listing.parking && 'Parking Spot'}</li>
            <li>{listing.furnished && 'Furnished'}</li>
        </ul>

        <p className="listingLocationTitle">Location</p>

        {/* map */}

        {auth.currentUser?.uid !== listing.useRef && (
            <Link to={`/contact/${listing.useRef}?listingName=
            ${listing.name} `} className='primaryButton'>
            Contact Landlord
            </Link>
        )}
    </div>
    
  </main>
  )
}

export default Listing