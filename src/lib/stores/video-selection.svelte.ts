import type { VideoItem } from '$lib/types';
import { getContext, setContext } from 'svelte';

interface VideoSelectorState {
	videos: VideoItem[];
	activeVideo: VideoItem;
	keys: string[];

	setActiveVideo: (key: string) => void;
}

class VideoSelector implements VideoSelectorState {
	videos = $state<VideoItem[]>([]);
	activeVideo = $state<VideoItem>(this.videos[0]);

	constructor(videos: VideoItem[]) {
		this.videos = videos;
		this.activeVideo = videos[0];
	}

	get keys() {
		return this.videos.map((s) => s.key);
	}

	setActiveVideo = (key: string) => {
		const newVideo = this.videos.find((s) => s.key === key) || null;
		if (!newVideo) return;
		this.activeVideo = newVideo;
	};
}

export enum EVideoSelectorKeys {
	HORIZONTAL = '$_video_selector_vertical',
	VERTICAL = '$_video_selector_vertical',
	DEFAULT = '$_video_selector_state'
}

const DEFAULT_KEY = '$_video_selector_state';

export const setVideoSelectorState = (key = DEFAULT_KEY, state: VideoItem[] = []) => {
	const videoSelectorClassState = new VideoSelector(state);
	return setContext(key, videoSelectorClassState);
};

export const getVideoSelectorState = (key = DEFAULT_KEY) => {
	return getContext<ReturnType<typeof setVideoSelectorState>>(key);
};
