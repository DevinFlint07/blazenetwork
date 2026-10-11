export const STAGING_ARCHON_BASE_URL = 'https://blazenetwork.fun/archon/'

export function withStagingArchonBaseUrl(
	baseUrl: string,
	useStaging = useFeatureFlags().value.archonApiStaging,
) {
	if (!useStaging) {
		return baseUrl
	}

	return STAGING_ARCHON_BASE_URL
}
