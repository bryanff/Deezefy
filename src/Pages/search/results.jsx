import { useSelector, useDispatch } from 'react-redux';
import React, { useRef, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { searchTracksAsync } from '@/redux/thunks/tracks';
import ArtistCard from '@/Components/ArtistCard/ArtistCard';
import Typography from '@mui/material/Typography';

const SearchResultsPage = () => {
	const { isLoading, errorMessage, search } = useSelector(
		(state) => state.tracks
	);
	const dispatch = useDispatch();
	return (
		<>
			<Typography variant='h5' component='h2' sx={{ mb: 2 }}>
				Search Results
			</Typography>
			<InfiniteScroll
				dataLength={search.data.length}
				next={() => dispatch(searchTracksAsync())}
				loader={<h4>Loading...</h4>}
				hasMore={!!search.next}
			>
				{isLoading && <h3>Loading...</h3>}
				{errorMessage && <h3>{errorMessage}</h3>}
				{search.data &&
					search.data.map(({ id, title, duration, artist, album, preview }, index) => {
						return (
							<ArtistCard
								key={index}
								id={id}
								title={title}
								duration={duration}
								artist={artist}
								album={album}
								preview={preview}
							/>
						);
					})}
			</InfiniteScroll>
		</>
	);
};

export default SearchResultsPage;
