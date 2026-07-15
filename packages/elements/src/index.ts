import { defineCustomElement } from 'vue'
import { defineElementOnce } from '@universal-vue/utilities'
import '@universal-vue/tokens/source.css'
import {
  UvButton,
  UvIconButton,
  UvInput,
  UvTextarea,
  UvCheckbox,
  UvRadio,
  UvSwitch,
  UvBadge,
  UvAlert,
  UvSpinner,
  UvSelect,
  UvCard,
  UvProgress,
  UvAvatar,
  UvAccordion,
  UvTabs,
  UvBreadcrumb,
  UvPagination,
  UvDialog,
  UvTooltip,
  UvDivider,
  UvSkeleton,
  UvSlider,
  UvPopover,
  UvDropdownMenu,
  UvToast,
  UvDrawer,
  UvCombobox,
  UvFileUpload,
  UvTable,
  UvCalendar,
  UvDatePicker,
  UvNumberInput,
  UvRating,
  UvTagInput,
  UvFormField,
  UvFieldset,
  UvStepper,
  UvCommandPalette,
  UvTimeline,
  UvEmptyState,
  UvToolbar,
  UvSidebar,
  UvTreeView,
  UvCarousel,
  UvSearchInput,
  UvPasswordInput,
  UvOtpInput,
  UvColorPicker,
  UvRangeSlider,
  UvToggle,
  UvToggleGroup,
  UvSegmentedControl,
  UvButtonGroup,
  UvSplitButton,
  UvLink,
  UvSkipLink,
  UvNavigationMenu,
  UvMenubar,
  UvBottomNavigation,
  UvAlertDialog,
  UvHoverCard,
  UvCollapsible,
  UvScrollArea,
  UvAspectRatio,
  UvDescriptionList,
  UvStat,
  UvCodeBlock,
  UvListbox,
  UvTransferList,
  UvMeter,
  UvKbd,
  UvBlockquote,
  UvFigure,
  UvVisuallyHidden,
  UvImage,
  UvVideo,
  UvAudio,
  UvIcon,
  UvPlaceholder,
  UvContainer,
  UvStack,
  UvCluster,
  UvGrid,
  UvCenter,
  UvBox,
  UvFlex,
  UvSpacer,
  UvSurface,
  UvSection,
  UvHeading,
  UvText,
  UvLabel,
  UvProse,
  UvTruncate,
  UvChip,
  UvChipGroup,
  UvStatusDot,
  UvCounter,
  UvKeyValue,
  UvBanner,
  UvCallout,
  UvNotice,
  UvResult,
  UvLoadingOverlay,
  UvSheet,
  UvBackdrop,
  UvPortal,
  UvFocusTrap,
  UvFocusScope,
  UvContextMenu,
  UvMenuButton,
  UvActionMenu,
  UvSpeedDial,
  UvFloatingActionButton,
  UvDisclosure,
  UvDetails,
  UvExpandableText,
  UvReadMore,
  UvShowHide,
  UvTimePicker,
  UvDateRangePicker,
  UvMonthPicker,
  UvWeekPicker,
  UvYearPicker,
  UvTimeInput,
  UvDurationInput,
  UvCurrencyInput,
  UvPercentageInput,
  UvMaskedInput,
  UvPhoneInput,
  UvEmailInput,
  UvUrlInput,
  UvPinInput,
  UvSearchSelect,
  UvMultiSelect,
  UvCascader,
  UvAutocomplete,
  UvMentionInput,
  UvTokenField,
  UvForm,
  UvFormSection,
  UvFormActions,
  UvErrorSummary,
  UvCharacterCounter,
  UvDataGrid,
  UvVirtualList,
  UvInfiniteScroll,
  UvMasonry,
  UvResizablePanel,
  UvKanban,
  UvSortableList,
  UvDragHandle,
  UvDropZone,
  UvReorderGroup,
  UvSparkline,
  UvBarChart,
  UvLineChart,
  UvPieChart,
  UvGauge,
  UvHeatmap,
  UvRingChart,
  UvFunnelChart,
  UvChartLegend,
  UvDataMarker,
  UvEditor,
  UvMarkdown,
  UvRichText,
  UvCodeEditor,
  UvDiffViewer,
  UvFileList,
  UvFilePreview,
  UvImageCropper,
  UvImageGallery,
  UvLightbox,
  UvUploadQueue,
  UvDropUpload,
  UvAttachment,
  UvAvatarGroup,
  UvPresence,
  UvUserCard,
  UvProfileCard,
  UvContactCard,
  UvProductCard,
  UvPricingCard,
  UvReview,
  UvTestimonial,
  UvComment,
  UvCommentThread,
  UvActivityFeed,
  UvChatBubble,
  UvChatComposer,
  UvMessageList,
  UvTypingIndicator,
  UvConversationHeader,
  UvNotification,
  UvNotificationCenter,
  UvInboxItem,
  UvMailPreview,
  UvAnnouncement,
  UvSearchResults,
  UvFilterBar,
  UvFilterChip,
  UvSortControl,
  UvViewSwitcher,
  UvPaginationInfo,
  UvPageSizeSelect,
  UvLoadMore,
  UvBreadcrumbItem,
  UvBackToTop,
  UvAppShell,
  UvHeader,
  UvFooter,
  UvMain,
  UvNavigationRail,
  UvTopBar,
  UvPageHeader,
  UvPageLayout,
  UvSplitLayout,
  UvDashboardGrid,
  UvPanel,
  UvPanelHeader,
  UvWidget,
  UvWidgetGrid,
  UvDock,
  UvTour,
  UvSpotlight,
  UvCoachmark,
  UvHotspot,
  UvOnboardingStep,
  UvSkeletonText,
  UvSkeletonAvatar,
  UvSkeletonCard,
  UvSkeletonTable,
  UvShimmer,
  UvAgenda,
  UvSchedule,
  UvEventCard,
  UvEventList,
  UvTimezoneSelect,
  UvStepperForm,
  UvProgressSteps,
  UvMilestone,
  UvRoadmap,
  UvProcessFlow,
  UvMetric,
  UvKpiCard,
  UvComparison,
  UvTrend,
  UvScore,
  UvCommandBar,
  UvShortcut,
  UvShortcutList,
  UvKeySequence,
  UvCommandItem,
  UvClipboard,
  UvCopyButton,
  UvShareButton,
  UvPrintButton,
  UvDownloadButton,
  UvQrCode,
  UvBarcode,
  UvColorSwatch,
  UvGradientPreview,
  UvPatternPreview,
  UvThemeProvider,
  UvThemeToggle,
  UvLocaleProvider,
  UvDirectionProvider,
  UvReducedMotion,
  UvLiveRegion,
  UvAnnouncer,
  UvFocusRing,
  UvRovingFocusGroup,
  UvAccessibilityPanel,
  UvMegaMenu,
  UvMobileMenu,
  UvAnchorNav,
  UvStepNav,
  UvSubnav,
  UvCloseButton,
  UvBackButton,
  UvForwardButton,
  UvSubmitButton,
  UvResetButton,
  UvInputGroup,
  UvInputAddon,
  UvInputPrefix,
  UvInputSuffix,
  UvClearButton,
  UvDecimalInput,
  UvIntegerInput,
  UvScientificInput,
  UvUnitInput,
  UvCoordinateInput,
  UvCountrySelect,
  UvLanguageSelect,
  UvRegionSelect,
  UvCitySelect,
  UvPostalCodeInput,
  UvAddressForm,
  UvNameField,
  UvUsernameInput,
  UvPasswordStrength,
  UvConsentCheckbox,
  UvDateTimePicker,
  UvDateTimeRangePicker,
  UvBusinessHours,
  UvRecurringSchedule,
  UvUtcOffsetSelect,
  UvCalendarHeader,
  UvCalendarGrid,
  UvCalendarDay,
  UvCalendarEvent,
  UvMiniCalendar,
  UvScheduler,
  UvResourceCalendar,
  UvAvailabilityGrid,
  UvBookingSlot,
  UvAppointmentCard,
  UvDataTable,
  UvTableToolbar,
  UvTableColumnPicker,
  UvTableFilter,
  UvTableSummary,
  UvTreeTable,
  UvPivotTable,
  UvCrossTab,
  UvMatrix,
  UvSpreadsheet,
  UvRecordList,
  UvRecordCard,
  UvRecordDetail,
  UvRecordField,
  UvRecordActions,
  UvDefinitionList,
  UvPropertyList,
  UvMetadataList,
  UvAttributeList,
  UvSpecTable,
  UvDonutChart,
  UvAreaChart,
  UvRadarChart,
  UvScatterPlot,
  UvBubbleChart,
  UvCandlestickChart,
  UvWaterfallChart,
  UvStackedBarChart,
  UvHistogram,
  UvBoxPlot,
  UvTimelineChart,
  UvGanttChart,
  UvSankeyDiagram,
  UvTreemap,
  UvSunburst,
  UvMap,
  UvMapMarker,
  UvMapPopup,
  UvMapLegend,
  UvMapControls,
  UvFloorPlan,
  UvSeatMap,
  UvRouteMap,
  UvGeoPicker,
  UvCoordinateDisplay,
  UvDocumentViewer,
  UvPdfViewer,
  UvTextViewer,
  UvCsvViewer,
  UvJsonViewer,
  UvDocumentOutline,
  UvTableOfContents,
  UvFootnote,
  UvCitation,
  UvReferenceList,
  UvFileManager,
  UvFolderTree,
  UvFileCard,
  UvFolderCard,
  UvStorageMeter,
  UvFileRename,
  UvFileMove,
  UvFileShare,
  UvFileVersion,
  UvFileActivity,
  UvMediaPlayer,
  UvVideoPlayer,
  UvAudioPlayer,
  UvMediaControls,
  UvMediaTimeline,
  UvPlaylist,
  UvPlaylistItem,
  UvTranscript,
  UvCaptionTrack,
  UvVolumeControl,
  UvCameraPreview,
  UvMicrophoneMeter,
  UvScreenSharePreview,
  UvRecordingIndicator,
  UvDevicePicker,
  UvProductGrid,
  UvProductList,
  UvProductGallery,
  UvProductVariant,
  UvProductOptions,
  UvCart,
  UvCartItem,
  UvCartSummary,
  UvQuantitySelector,
  UvPromoCodeInput,
  UvCheckoutSummary,
  UvPaymentMethod,
  UvPaymentCard,
  UvBillingAddress,
  UvOrderConfirmation,
  UvOrderList,
  UvOrderCard,
  UvOrderStatus,
  UvShipmentTracker,
  UvDeliveryEstimate,
  UvPrice,
  UvDiscountBadge,
  UvTaxSummary,
  UvCurrencyDisplay,
  UvInstallmentPlan,
  UvSocialShare,
  UvReactionBar,
  UvReactionPicker,
  UvLikeButton,
  UvFollowButton,
  UvUserList,
  UvUserMenu,
  UvUserPicker,
  UvAssigneePicker,
  UvTeamCard,
  UvTeamList,
  UvMemberCard,
  UvRoleBadge,
  UvPermissionMatrix,
  UvInviteForm,
  UvProfileHeader,
  UvProfileStats,
  UvBio,
  UvSocialLinks,
  UvContactActions,
  UvForumPost,
  UvForumThread,
  UvReplyComposer,
  UvVoteControl,
  UvModerationBadge,
  UvTaskCard,
  UvTaskList,
  UvTaskBoard,
  UvTaskStatus,
  UvTaskPriority,
  UvProjectCard,
  UvProjectList,
  UvProjectOverview,
  UvProjectHealth,
  UvProjectTimeline,
  UvIssueCard,
  UvIssueList,
  UvIssueDetail,
  UvIssueLabel,
  UvIssueStatus,
  UvPullRequestCard,
  UvCommitList,
  UvCommitCard,
  UvBranchSelector,
  UvDiffSummary,
  UvLogViewer,
  UvConsole,
  UvTerminal,
  UvCommandOutput,
  UvErrorTrace,
  UvApiRequest,
  UvApiResponse,
  UvHttpStatus,
  UvEndpointCard,
  UvSchemaViewer,
  UvDatabaseTable,
  UvDatabaseColumn,
  UvQueryEditor,
  UvQueryResult,
  UvConnectionStatus,
  UvMetricGroup,
  UvThreshold,
  UvHealthIndicator,
  UvStatusOverview,
  UvServiceLevel,
  UvAlertRule,
  UvIncidentCard,
  UvIncidentTimeline,
  UvServiceStatus,
  UvUptimeChart,
  UvSecurityBadge,
  UvRiskScore,
  UvAuditLog,
  UvAccessReview,
  UvSessionList,
  UvLoginForm,
  UvSignupForm,
  UvForgotPasswordForm,
  UvTwoFactorForm,
  UvPasskeyPrompt,
  UvNotificationSettings,
  UvPrivacySettings,
  UvPreferencePanel,
  UvAccountSwitcher,
  UvSessionCard,
  UvAiPrompt,
  UvAiResponse,
  UvAiComposer,
  UvModelSelector,
  UvTokenUsage,
  UvFeatureFlag,
  UvExperimentCard,
  UvVariantPicker,
  UvReleaseChannel,
  UvVersionBadge,
  UvSkipTarget,
  UvFocusReturn,
  UvKeyboardHint,
  UvScreenReaderOnly,
  UvHighContrastToggle,
  UvBreadcrumbOverflow,
  UvNavDrawer,
  UvNavTabs,
  UvSectionNav,
  UvPaginationCursor,
  UvCommandNav,
  UvWorkspaceSwitcher,
  UvOrganizationSwitcher,
  UvProjectSwitcher,
  UvEnvironmentSwitcher,
  UvConfirmButton,
  UvAsyncButton,
  UvDestructiveButton,
  UvUndoButton,
  UvRedoButton,
  UvFavoriteButton,
  UvBookmarkButton,
  UvPinButton,
  UvArchiveButton,
  UvRestoreButton,
  UvSearchField,
  UvFilterInput,
  UvSlugInput,
  UvHandleInput,
  UvDomainInput,
  UvSecretInput,
  UvApiKeyInput,
  UvRecoveryCodeInput,
  UvSecurityQuestion,
  UvCaptchaField,
  UvFirstNameInput,
  UvLastNameInput,
  UvMiddleNameInput,
  UvPronounSelect,
  UvBirthdateInput,
  UvContactMethodSelect,
  UvTelephoneInput,
  UvFaxInput,
  UvWebsiteInput,
  UvSocialHandleInput,
  UvStreetAddressInput,
  UvApartmentInput,
  UvProvinceSelect,
  UvStateSelect,
  UvZipCodeInput,
  UvBankAccountInput,
  UvRoutingNumberInput,
  UvIbanInput,
  UvSwiftInput,
  UvCardNumberInput,
  UvExpiryInput,
  UvCvcInput,
  UvAmountInput,
  UvExchangeRateInput,
  UvBudgetInput,
  UvLengthInput,
  UvWeightInput,
  UvTemperatureInput,
  UvSpeedInput,
  UvVolumeInput,
  UvAreaInput,
  UvPressureInput,
  UvEnergyInput,
  UvPowerInput,
  UvFrequencyInput,
  UvValidationMessage,
  UvValidationSummary,
  UvFieldError,
  UvFieldSuccess,
  UvRequiredIndicator,
  UvOptionCard,
  UvOptionGrid,
  UvChoiceChip,
  UvChoiceList,
  UvRankedChoice,
  UvImageUpload,
  UvVideoUpload,
  UvAudioUpload,
  UvDocumentUpload,
  UvAvatarUpload,
  UvQuarterPicker,
  UvFiscalYearPicker,
  UvTimeRangePicker,
  UvTimezonePicker,
  UvCronInput,
  UvCountdown,
  UvStopwatch,
  UvTimer,
  UvWorldClock,
  UvRelativeTime,
  UvDateBadge,
  UvTimeBadge,
  UvDurationBadge,
  UvScheduleBadge,
  UvAvailabilityBadge,
  UvDataCard,
  UvDataList,
  UvDataDetail,
  UvDataField,
  UvDataActions,
  UvSummaryCard,
  UvSummaryList,
  UvSummaryRow,
  UvSummaryGroup,
  UvSummaryFooter,
  UvEntityCard,
  UvEntityList,
  UvEntityHeader,
  UvEntityMetadata,
  UvEntityActions,
  UvTimelineList,
  UvAuditTrail,
  UvChangeLog,
  UvRevisionList,
  UvHistoryPanel,
  UvEditableTable,
  UvResponsiveTable,
  UvCompactTable,
  UvComparisonTable,
  UvRankingTable,
  UvGroupedTable,
  UvNestedTable,
  UvStickyTable,
  UvSelectableTable,
  UvExpandableTable,
  UvCheckList,
  UvNumberedList,
  UvIconList,
  UvLinkList,
  UvActionList,
  UvGroupedList,
  UvSectionedList,
  UvDenseList,
  UvContentList,
  UvDescriptionGrid,
  UvColumnChart,
  UvComboChart,
  UvStepChart,
  UvRangeChart,
  UvBulletChart,
  UvPolarChart,
  UvChordDiagram,
  UvNetworkGraph,
  UvFlowChart,
  UvDependencyGraph,
  UvCalendarHeatmap,
  UvCohortChart,
  UvRetentionChart,
  UvConversionChart,
  UvGrowthChart,
  UvForecastChart,
  UvAnomalyChart,
  UvBaselineChart,
  UvVarianceChart,
  UvTargetChart,
  UvMetricCard,
  UvMetricTable,
  UvMetricChart,
  UvMetricTrend,
  UvMetricDelta,
  UvDashboardHeader,
  UvDashboardSection,
  UvDashboardToolbar,
  UvDashboardFilter,
  UvDashboardEmptyState,
  UvMapSearch,
  UvMapLayerControl,
  UvMapScale,
  UvMapAttribution,
  UvMapTooltip,
  UvMapCluster,
  UvMapPolygon,
  UvMapPolyline,
  UvMapCircle,
  UvMapHeatLayer,
  UvLatitudeInput,
  UvLongitudeInput,
  UvAltitudeInput,
  UvGeoFence,
  UvGeoBounds,
  UvDocHeader,
  UvDocFooter,
  UvDocSection,
  UvDocPage,
  UvDocMetadata,
  UvPageNavigator,
  UvPageThumbnail,
  UvPageCount,
  UvZoomControl,
  UvRotationControl,
  UvAnnotationToolbar,
  UvAnnotationList,
  UvAnnotationCard,
  UvHighlightTool,
  UvCommentTool,
  UvFileBreadcrumb,
  UvFileToolbar,
  UvFileGrid,
  UvFileDetails,
  UvFilePermissions,
  UvFolderPicker,
  UvFilePicker,
  UvPathInput,
  UvFileTypeBadge,
  UvFileSize,
  UvDownloadQueue,
  UvTransferProgress,
  UvSyncStatus,
  UvConflictResolver,
  UvOfflineFile,
  UvMediaCard,
  UvMediaGrid,
  UvMediaList,
  UvMediaMetadata,
  UvMediaInfo,
  UvPlaybackRate,
  UvQualitySelector,
  UvSubtitleSelector,
  UvAudioTrackSelector,
  UvPictureInPictureButton,
  UvWaveform,
  UvAudioSpectrum,
  UvVideoThumbnail,
  UvFrameStrip,
  UvChapterList,
  UvImageCompare,
  UvImageZoom,
  UvImagePan,
  UvImageRotate,
  UvImageAnnotate,
  UvPhotoGrid,
  UvPhotoCard,
  UvPhotoMetadata,
  UvPhotoExif,
  UvPhotoMap,
  UvCategoryCard,
  UvCategoryGrid,
  UvBrandCard,
  UvBrandList,
  UvCollectionCard,
  UvProductBadge,
  UvProductMeta,
  UvProductSpecs,
  UvProductComparison,
  UvProductRecommendations,
  UvMiniCart,
  UvCartDrawer,
  UvCartBadge,
  UvCartEmptyState,
  UvCartCoupon,
  UvCheckoutSteps,
  UvShippingMethod,
  UvDeliverySlot,
  UvGiftOptions,
  UvOrderNotes,
  UvCardForm,
  UvWalletButton,
  UvBankTransfer,
  UvPaymentStatus,
  UvReceipt,
  UvOrderDetails,
  UvOrderItems,
  UvOrderTotals,
  UvReturnStatus,
  UvRefundStatus,
  UvPlanCard,
  UvPlanSelector,
  UvSubscriptionCard,
  UvBillingCycle,
  UvUsageMeter,
  UvShareMenu,
  UvSharePreview,
  UvMentionList,
  UvHashtag,
  UvSocialCard,
  UvPostCard,
  UvPostComposer,
  UvPostActions,
  UvPostMetrics,
  UvPostMedia,
  UvChatHeader,
  UvChatList,
  UvChatItem,
  UvChatMessage,
  UvChatAttachment,
  UvMessageComposer,
  UvMessageActions,
  UvMessageStatus,
  UvReadReceipt,
  UvVoiceMessage,
  UvNotificationBadge,
  UvNotificationList,
  UvNotificationItem,
  UvNotificationPreferences,
  UvNotificationDigest,
  UvPersonCard,
  UvPersonList,
  UvPersonPicker,
  UvPersonAvatar,
  UvPersonDetails,
  UvTeamHeader,
  UvTeamMembers,
  UvTeamPicker,
  UvTeamSwitcher,
  UvTeamSettings,
  UvOrganizationCard,
  UvOrganizationList,
  UvOrganizationHeader,
  UvOrganizationChart,
  UvOrganizationSettings,
  UvLeadCard,
  UvLeadList,
  UvLeadScore,
  UvLeadStatus,
  UvLeadPipeline,
  UvContactList,
  UvContactDetail,
  UvDealCard,
  UvDealPipeline,
  UvDealStage,
  UvAccountCard,
  UvAccountList,
  UvOpportunityCard,
  UvOpportunityList,
  UvSalesForecast,
  UvProjectHeader,
  UvProjectNav,
  UvProjectMembers,
  UvProjectSettings,
  UvProjectActivity,
  UvTaskHeader,
  UvTaskDetail,
  UvTaskAssignee,
  UvTaskDueDate,
  UvTaskChecklist,
  UvSubtaskList,
  UvTaskDependencies,
  UvTaskEstimate,
  UvTaskProgress,
  UvTaskComments,
  UvSprintCard,
  UvSprintList,
  UvSprintBoard,
  UvSprintBurndown,
  UvBacklog,
  UvEpicCard,
  UvEpicList,
  UvStoryCard,
  UvStoryPoints,
  UvVelocityChart,
  UvRepositoryCard,
  UvRepositoryList,
  UvRepositoryHeader,
  UvRepositoryStats,
  UvRepositoryLanguages,
  UvCodeReview,
  UvReviewComment,
  UvReviewThread,
  UvMergeStatus,
  UvPipelineStatus,
  UvBuildCard,
  UvBuildList,
  UvBuildLog,
  UvBuildStatus,
  UvBuildArtifacts,
  UvDeploymentCard,
  UvDeploymentList,
  UvDeploymentStatus,
  UvEnvironmentCard,
  UvEnvironmentList,
  UvApiExplorer,
  UvApiMethod,
  UvApiHeaders,
  UvApiParameters,
  UvApiBody,
  UvApiHistory,
  UvApiCollection,
  UvApiEnvironment,
  UvApiAuth,
  UvApiCookies,
  UvDatabaseBrowser,
  UvDatabaseSchema,
  UvDatabaseIndex,
  UvDatabaseRelation,
  UvDatabaseQueryPlan,
  UvDataSourceCard,
  UvDataSourceList,
  UvConnectionForm,
  UvConnectionList,
  UvConnectionCard,
  UvMonitorCard,
  UvMonitorList,
  UvMonitorStatus,
  UvMonitorChart,
  UvMonitorSettings,
  UvLogStream,
  UvLogFilter,
  UvLogEntry,
  UvLogLevel,
  UvLogStats,
  UvTraceList,
  UvTraceDetail,
  UvSpanTree,
  UvSpanDetail,
  UvTraceWaterfall,
  UvAlertCard,
  UvAlertList,
  UvAlertHistory,
  UvAlertSeverity,
  UvAlertChannel,
  UvSecurityOverview,
  UvSecurityEvent,
  UvSecurityFinding,
  UvSecurityControl,
  UvSecurityPolicy,
  UvVulnerabilityCard,
  UvVulnerabilityList,
  UvVulnerabilitySeverity,
  UvPatchStatus,
  UvComplianceStatus,
  UvMfaSetup,
  UvMfaChallenge,
  UvPasskeyList,
  UvDeviceSession,
  UvLoginHistory,
  UvAccessToken,
  UvAccessTokenList,
  UvOauthConsent,
  UvSsoButton,
  UvIdentityProvider,
  UvSettingsHeader,
  UvSettingsNav,
  UvSettingsSection,
  UvSettingsGroup,
  UvSettingsRow,
  UvThemeSettings,
  UvLanguageSettings,
  UvAccessibilitySettings,
  UvDataSettings,
  UvSecuritySettings,
  UvPromptLibrary,
  UvPromptCard,
  UvPromptHistory,
  UvPromptVariables,
  UvPromptTemplate,
  UvAgentCard,
  UvAgentList,
  UvAgentStatus,
  UvAgentTool,
  UvAgentMemory,
  UvAiConversation,
  UvAiMessage,
  UvAiThinking,
  UvAiCitation,
  UvAiFeedback,
  UvModelCard,
  UvModelList,
  UvModelParameters,
  UvModelBenchmark,
  UvModelPricing,
  UvWorkflowCard,
  UvWorkflowList,
  UvWorkflowBuilder,
  UvWorkflowNode,
  UvWorkflowEdge,
  UvAutomationCard,
  UvAutomationList,
  UvAutomationTrigger,
  UvAutomationAction,
  UvAutomationRun,
  UvIntegrationCard,
  UvIntegrationList,
  UvIntegrationSetup,
  UvIntegrationStatus,
  UvWebhookCard,
  UvWebhookList,
  UvWebhookEvent,
  UvWebhookDelivery,
  UvWebhookLog,
  UvApiCredential,
  UvReleaseCard,
  UvReleaseList,
  UvReleaseNotes,
  UvReleaseTimeline,
  UvReleaseStatus,
  UvExperimentList,
  UvExperimentResults,
  UvExperimentMetric,
  UvExperimentAudience,
  UvExperimentStatus,
  UvAdminShell,
  UvAdminHeader,
  UvAdminSidebar,
  UvAdminToolbar,
  UvAdminDashboard,
  UvCommerceOrderOverview,
  UvCommerceOrderStatus,
  UvCommerceOrderTimeline,
  UvCommerceOrderFilters,
  UvCommerceOrderActions,
  UvCommerceCartDashboard,
  UvCommerceCartSummary,
  UvCommerceCartList,
  UvCommerceCartDetail,
  UvCommerceCartToolbar,
  UvCommerceCheckoutCard,
  UvCommerceCheckoutTable,
  UvCommerceCheckoutMetrics,
  UvCommerceCheckoutInsights,
  UvCommerceCheckoutMenu,
  UvCommerceCatalogExplorer,
  UvCommerceCatalogNavigator,
  UvCommerceCatalogViewer,
  UvCommerceCatalogEditor,
  UvCommerceCatalogSettings,
  UvCommerceProductQueue,
  UvCommerceProductBoard,
  UvCommerceProductCalendar,
  UvCommerceProductHistory,
  UvCommerceProductReports,
  UvCommercePricingHeader,
  UvCommercePricingSidebar,
  UvCommercePricingGrid,
  UvCommercePricingPanel,
  UvCommercePricingFooter,
  UvCommerceDiscountMonitor,
  UvCommerceDiscountTracker,
  UvCommerceDiscountAlerts,
  UvCommerceDiscountActivity,
  UvCommerceDiscountControls,
  UvCommerceTaxSearch,
  UvCommerceTaxSelector,
  UvCommerceTaxPicker,
  UvCommerceTaxForm,
  UvCommerceTaxPreview,
  UvCommerceRefundBadge,
  UvCommerceRefundIndicator,
  UvCommerceRefundProgress,
  UvCommerceRefundScore,
  UvCommerceRefundMeter,
  UvCommerceSubscriptionMap,
  UvCommerceSubscriptionChart,
  UvCommerceSubscriptionDiagram,
  UvCommerceSubscriptionBreakdown,
  UvCommerceSubscriptionComparison,
  UvFinanceLedgerOverview,
  UvFinanceLedgerStatus,
  UvFinanceLedgerTimeline,
  UvFinanceLedgerFilters,
  UvFinanceLedgerActions,
  UvFinanceInvoiceDashboard,
  UvFinanceInvoiceSummary,
  UvFinanceInvoiceList,
  UvFinanceInvoiceDetail,
  UvFinanceInvoiceToolbar,
  UvFinancePaymentCard,
  UvFinancePaymentTable,
  UvFinancePaymentMetrics,
  UvFinancePaymentInsights,
  UvFinancePaymentMenu,
  UvFinancePayoutExplorer,
  UvFinancePayoutNavigator,
  UvFinancePayoutViewer,
  UvFinancePayoutEditor,
  UvFinancePayoutSettings,
  UvFinanceExpenseQueue,
  UvFinanceExpenseBoard,
  UvFinanceExpenseCalendar,
  UvFinanceExpenseHistory,
  UvFinanceExpenseReports,
  UvFinanceBudgetHeader,
  UvFinanceBudgetSidebar,
  UvFinanceBudgetGrid,
  UvFinanceBudgetPanel,
  UvFinanceBudgetFooter,
  UvFinanceForecastMonitor,
  UvFinanceForecastTracker,
  UvFinanceForecastAlerts,
  UvFinanceForecastActivity,
  UvFinanceForecastControls,
  UvFinanceTreasurySearch,
  UvFinanceTreasurySelector,
  UvFinanceTreasuryPicker,
  UvFinanceTreasuryForm,
  UvFinanceTreasuryPreview,
  UvFinanceReconciliationBadge,
  UvFinanceReconciliationIndicator,
  UvFinanceReconciliationProgress,
  UvFinanceReconciliationScore,
  UvFinanceReconciliationMeter,
  UvFinanceAuditMap,
  UvFinanceAuditChart,
  UvFinanceAuditDiagram,
  UvFinanceAuditBreakdown,
  UvFinanceAuditComparison,
  UvBankingAccountOverview,
  UvBankingAccountStatus,
  UvBankingAccountTimeline,
  UvBankingAccountFilters,
  UvBankingAccountActions,
  UvBankingTransactionDashboard,
  UvBankingTransactionSummary,
  UvBankingTransactionList,
  UvBankingTransactionDetail,
  UvBankingTransactionToolbar,
  UvBankingTransferCard,
  UvBankingTransferTable,
  UvBankingTransferMetrics,
  UvBankingTransferInsights,
  UvBankingTransferMenu,
  UvBankingDepositExplorer,
  UvBankingDepositNavigator,
  UvBankingDepositViewer,
  UvBankingDepositEditor,
  UvBankingDepositSettings,
  UvBankingWithdrawalQueue,
  UvBankingWithdrawalBoard,
  UvBankingWithdrawalCalendar,
  UvBankingWithdrawalHistory,
  UvBankingWithdrawalReports,
  UvBankingLoanHeader,
  UvBankingLoanSidebar,
  UvBankingLoanGrid,
  UvBankingLoanPanel,
  UvBankingLoanFooter,
  UvBankingCreditMonitor,
  UvBankingCreditTracker,
  UvBankingCreditAlerts,
  UvBankingCreditActivity,
  UvBankingCreditControls,
  UvBankingDebitSearch,
  UvBankingDebitSelector,
  UvBankingDebitPicker,
  UvBankingDebitForm,
  UvBankingDebitPreview,
  UvBankingStatementBadge,
  UvBankingStatementIndicator,
  UvBankingStatementProgress,
  UvBankingStatementScore,
  UvBankingStatementMeter,
  UvBankingBeneficiaryMap,
  UvBankingBeneficiaryChart,
  UvBankingBeneficiaryDiagram,
  UvBankingBeneficiaryBreakdown,
  UvBankingBeneficiaryComparison,
  UvHealthPatientOverview,
  UvHealthPatientStatus,
  UvHealthPatientTimeline,
  UvHealthPatientFilters,
  UvHealthPatientActions,
  UvHealthAppointmentDashboard,
  UvHealthAppointmentSummary,
  UvHealthAppointmentList,
  UvHealthAppointmentDetail,
  UvHealthAppointmentToolbar,
  UvHealthEncounterCard,
  UvHealthEncounterTable,
  UvHealthEncounterMetrics,
  UvHealthEncounterInsights,
  UvHealthEncounterMenu,
  UvHealthPrescriptionExplorer,
  UvHealthPrescriptionNavigator,
  UvHealthPrescriptionViewer,
  UvHealthPrescriptionEditor,
  UvHealthPrescriptionSettings,
  UvHealthLaboratoryQueue,
  UvHealthLaboratoryBoard,
  UvHealthLaboratoryCalendar,
  UvHealthLaboratoryHistory,
  UvHealthLaboratoryReports,
  UvHealthImagingHeader,
  UvHealthImagingSidebar,
  UvHealthImagingGrid,
  UvHealthImagingPanel,
  UvHealthImagingFooter,
  UvHealthInsuranceMonitor,
  UvHealthInsuranceTracker,
  UvHealthInsuranceAlerts,
  UvHealthInsuranceActivity,
  UvHealthInsuranceControls,
  UvHealthClaimSearch,
  UvHealthClaimSelector,
  UvHealthClaimPicker,
  UvHealthClaimForm,
  UvHealthClaimPreview,
  UvHealthCarePlanBadge,
  UvHealthCarePlanIndicator,
  UvHealthCarePlanProgress,
  UvHealthCarePlanScore,
  UvHealthCarePlanMeter,
  UvHealthTriageMap,
  UvHealthTriageChart,
  UvHealthTriageDiagram,
  UvHealthTriageBreakdown,
  UvHealthTriageComparison,
  UvEducationCourseOverview,
  UvEducationCourseStatus,
  UvEducationCourseTimeline,
  UvEducationCourseFilters,
  UvEducationCourseActions,
  UvEducationLessonDashboard,
  UvEducationLessonSummary,
  UvEducationLessonList,
  UvEducationLessonDetail,
  UvEducationLessonToolbar,
  UvEducationStudentCard,
  UvEducationStudentTable,
  UvEducationStudentMetrics,
  UvEducationStudentInsights,
  UvEducationStudentMenu,
  UvEducationTeacherExplorer,
  UvEducationTeacherNavigator,
  UvEducationTeacherViewer,
  UvEducationTeacherEditor,
  UvEducationTeacherSettings,
  UvEducationGradeQueue,
  UvEducationGradeBoard,
  UvEducationGradeCalendar,
  UvEducationGradeHistory,
  UvEducationGradeReports,
  UvEducationAssignmentHeader,
  UvEducationAssignmentSidebar,
  UvEducationAssignmentGrid,
  UvEducationAssignmentPanel,
  UvEducationAssignmentFooter,
  UvEducationExamMonitor,
  UvEducationExamTracker,
  UvEducationExamAlerts,
  UvEducationExamActivity,
  UvEducationExamControls,
  UvEducationEnrollmentSearch,
  UvEducationEnrollmentSelector,
  UvEducationEnrollmentPicker,
  UvEducationEnrollmentForm,
  UvEducationEnrollmentPreview,
  UvEducationCurriculumBadge,
  UvEducationCurriculumIndicator,
  UvEducationCurriculumProgress,
  UvEducationCurriculumScore,
  UvEducationCurriculumMeter,
  UvEducationAttendanceMap,
  UvEducationAttendanceChart,
  UvEducationAttendanceDiagram,
  UvEducationAttendanceBreakdown,
  UvEducationAttendanceComparison,
  UvLogisticsShipmentOverview,
  UvLogisticsShipmentStatus,
  UvLogisticsShipmentTimeline,
  UvLogisticsShipmentFilters,
  UvLogisticsShipmentActions,
  UvLogisticsDeliveryDashboard,
  UvLogisticsDeliverySummary,
  UvLogisticsDeliveryList,
  UvLogisticsDeliveryDetail,
  UvLogisticsDeliveryToolbar,
  UvLogisticsRouteCard,
  UvLogisticsRouteTable,
  UvLogisticsRouteMetrics,
  UvLogisticsRouteInsights,
  UvLogisticsRouteMenu,
  UvLogisticsFleetExplorer,
  UvLogisticsFleetNavigator,
  UvLogisticsFleetViewer,
  UvLogisticsFleetEditor,
  UvLogisticsFleetSettings,
  UvLogisticsWarehouseQueue,
  UvLogisticsWarehouseBoard,
  UvLogisticsWarehouseCalendar,
  UvLogisticsWarehouseHistory,
  UvLogisticsWarehouseReports,
  UvLogisticsInventoryHeader,
  UvLogisticsInventorySidebar,
  UvLogisticsInventoryGrid,
  UvLogisticsInventoryPanel,
  UvLogisticsInventoryFooter,
  UvLogisticsPackageMonitor,
  UvLogisticsPackageTracker,
  UvLogisticsPackageAlerts,
  UvLogisticsPackageActivity,
  UvLogisticsPackageControls,
  UvLogisticsCarrierSearch,
  UvLogisticsCarrierSelector,
  UvLogisticsCarrierPicker,
  UvLogisticsCarrierForm,
  UvLogisticsCarrierPreview,
  UvLogisticsDispatchBadge,
  UvLogisticsDispatchIndicator,
  UvLogisticsDispatchProgress,
  UvLogisticsDispatchScore,
  UvLogisticsDispatchMeter,
  UvLogisticsTrackingMap,
  UvLogisticsTrackingChart,
  UvLogisticsTrackingDiagram,
  UvLogisticsTrackingBreakdown,
  UvLogisticsTrackingComparison,
  UvManufacturingWorkOrderOverview,
  UvManufacturingWorkOrderStatus,
  UvManufacturingWorkOrderTimeline,
  UvManufacturingWorkOrderFilters,
  UvManufacturingWorkOrderActions,
  UvManufacturingProductionDashboard,
  UvManufacturingProductionSummary,
  UvManufacturingProductionList,
  UvManufacturingProductionDetail,
  UvManufacturingProductionToolbar,
  UvManufacturingAssemblyCard,
  UvManufacturingAssemblyTable,
  UvManufacturingAssemblyMetrics,
  UvManufacturingAssemblyInsights,
  UvManufacturingAssemblyMenu,
  UvManufacturingQualityExplorer,
  UvManufacturingQualityNavigator,
  UvManufacturingQualityViewer,
  UvManufacturingQualityEditor,
  UvManufacturingQualitySettings,
  UvManufacturingMaintenanceQueue,
  UvManufacturingMaintenanceBoard,
  UvManufacturingMaintenanceCalendar,
  UvManufacturingMaintenanceHistory,
  UvManufacturingMaintenanceReports,
  UvManufacturingDowntimeHeader,
  UvManufacturingDowntimeSidebar,
  UvManufacturingDowntimeGrid,
  UvManufacturingDowntimePanel,
  UvManufacturingDowntimeFooter,
  UvManufacturingMaterialMonitor,
  UvManufacturingMaterialTracker,
  UvManufacturingMaterialAlerts,
  UvManufacturingMaterialActivity,
  UvManufacturingMaterialControls,
  UvManufacturingMachineSearch,
  UvManufacturingMachineSelector,
  UvManufacturingMachinePicker,
  UvManufacturingMachineForm,
  UvManufacturingMachinePreview,
  UvManufacturingPlantBadge,
  UvManufacturingPlantIndicator,
  UvManufacturingPlantProgress,
  UvManufacturingPlantScore,
  UvManufacturingPlantMeter,
  UvManufacturingBatchMap,
  UvManufacturingBatchChart,
  UvManufacturingBatchDiagram,
  UvManufacturingBatchBreakdown,
  UvManufacturingBatchComparison,
  UvRetailStoreOverview,
  UvRetailStoreStatus,
  UvRetailStoreTimeline,
  UvRetailStoreFilters,
  UvRetailStoreActions,
  UvRetailPointOfSaleDashboard,
  UvRetailPointOfSaleSummary,
  UvRetailPointOfSaleList,
  UvRetailPointOfSaleDetail,
  UvRetailPointOfSaleToolbar,
  UvRetailReceiptCard,
  UvRetailReceiptTable,
  UvRetailReceiptMetrics,
  UvRetailReceiptInsights,
  UvRetailReceiptMenu,
  UvRetailLoyaltyExplorer,
  UvRetailLoyaltyNavigator,
  UvRetailLoyaltyViewer,
  UvRetailLoyaltyEditor,
  UvRetailLoyaltySettings,
  UvRetailPromotionQueue,
  UvRetailPromotionBoard,
  UvRetailPromotionCalendar,
  UvRetailPromotionHistory,
  UvRetailPromotionReports,
  UvRetailMerchandisingHeader,
  UvRetailMerchandisingSidebar,
  UvRetailMerchandisingGrid,
  UvRetailMerchandisingPanel,
  UvRetailMerchandisingFooter,
  UvRetailStockMonitor,
  UvRetailStockTracker,
  UvRetailStockAlerts,
  UvRetailStockActivity,
  UvRetailStockControls,
  UvRetailReturnSearch,
  UvRetailReturnSelector,
  UvRetailReturnPicker,
  UvRetailReturnForm,
  UvRetailReturnPreview,
  UvRetailGiftCardBadge,
  UvRetailGiftCardIndicator,
  UvRetailGiftCardProgress,
  UvRetailGiftCardScore,
  UvRetailGiftCardMeter,
  UvRetailCustomerMap,
  UvRetailCustomerChart,
  UvRetailCustomerDiagram,
  UvRetailCustomerBreakdown,
  UvRetailCustomerComparison,
  UvHospitalityBookingOverview,
  UvHospitalityBookingStatus,
  UvHospitalityBookingTimeline,
  UvHospitalityBookingFilters,
  UvHospitalityBookingActions,
  UvHospitalityRoomDashboard,
  UvHospitalityRoomSummary,
  UvHospitalityRoomList,
  UvHospitalityRoomDetail,
  UvHospitalityRoomToolbar,
  UvHospitalityGuestCard,
  UvHospitalityGuestTable,
  UvHospitalityGuestMetrics,
  UvHospitalityGuestInsights,
  UvHospitalityGuestMenu,
  UvHospitalityReservationExplorer,
  UvHospitalityReservationNavigator,
  UvHospitalityReservationViewer,
  UvHospitalityReservationEditor,
  UvHospitalityReservationSettings,
  UvHospitalityCheckInQueue,
  UvHospitalityCheckInBoard,
  UvHospitalityCheckInCalendar,
  UvHospitalityCheckInHistory,
  UvHospitalityCheckInReports,
  UvHospitalityCheckOutHeader,
  UvHospitalityCheckOutSidebar,
  UvHospitalityCheckOutGrid,
  UvHospitalityCheckOutPanel,
  UvHospitalityCheckOutFooter,
  UvHospitalityHousekeepingMonitor,
  UvHospitalityHousekeepingTracker,
  UvHospitalityHousekeepingAlerts,
  UvHospitalityHousekeepingActivity,
  UvHospitalityHousekeepingControls,
  UvHospitalityAmenitySearch,
  UvHospitalityAmenitySelector,
  UvHospitalityAmenityPicker,
  UvHospitalityAmenityForm,
  UvHospitalityAmenityPreview,
  UvHospitalityRatePlanBadge,
  UvHospitalityRatePlanIndicator,
  UvHospitalityRatePlanProgress,
  UvHospitalityRatePlanScore,
  UvHospitalityRatePlanMeter,
  UvHospitalityOccupancyMap,
  UvHospitalityOccupancyChart,
  UvHospitalityOccupancyDiagram,
  UvHospitalityOccupancyBreakdown,
  UvHospitalityOccupancyComparison,
  UvTravelTripOverview,
  UvTravelTripStatus,
  UvTravelTripTimeline,
  UvTravelTripFilters,
  UvTravelTripActions,
  UvTravelItineraryDashboard,
  UvTravelItinerarySummary,
  UvTravelItineraryList,
  UvTravelItineraryDetail,
  UvTravelItineraryToolbar,
  UvTravelFlightCard,
  UvTravelFlightTable,
  UvTravelFlightMetrics,
  UvTravelFlightInsights,
  UvTravelFlightMenu,
  UvTravelHotelExplorer,
  UvTravelHotelNavigator,
  UvTravelHotelViewer,
  UvTravelHotelEditor,
  UvTravelHotelSettings,
  UvTravelRentalCarQueue,
  UvTravelRentalCarBoard,
  UvTravelRentalCarCalendar,
  UvTravelRentalCarHistory,
  UvTravelRentalCarReports,
  UvTravelVisaHeader,
  UvTravelVisaSidebar,
  UvTravelVisaGrid,
  UvTravelVisaPanel,
  UvTravelVisaFooter,
  UvTravelPassportMonitor,
  UvTravelPassportTracker,
  UvTravelPassportAlerts,
  UvTravelPassportActivity,
  UvTravelPassportControls,
  UvTravelDestinationSearch,
  UvTravelDestinationSelector,
  UvTravelDestinationPicker,
  UvTravelDestinationForm,
  UvTravelDestinationPreview,
  UvTravelTravelerBadge,
  UvTravelTravelerIndicator,
  UvTravelTravelerProgress,
  UvTravelTravelerScore,
  UvTravelTravelerMeter,
  UvTravelBaggageMap,
  UvTravelBaggageChart,
  UvTravelBaggageDiagram,
  UvTravelBaggageBreakdown,
  UvTravelBaggageComparison,
  UvRealEstatePropertyOverview,
  UvRealEstatePropertyStatus,
  UvRealEstatePropertyTimeline,
  UvRealEstatePropertyFilters,
  UvRealEstatePropertyActions,
  UvRealEstateListingDashboard,
  UvRealEstateListingSummary,
  UvRealEstateListingList,
  UvRealEstateListingDetail,
  UvRealEstateListingToolbar,
  UvRealEstateLeaseCard,
  UvRealEstateLeaseTable,
  UvRealEstateLeaseMetrics,
  UvRealEstateLeaseInsights,
  UvRealEstateLeaseMenu,
  UvRealEstateTenantExplorer,
  UvRealEstateTenantNavigator,
  UvRealEstateTenantViewer,
  UvRealEstateTenantEditor,
  UvRealEstateTenantSettings,
  UvRealEstateLandlordQueue,
  UvRealEstateLandlordBoard,
  UvRealEstateLandlordCalendar,
  UvRealEstateLandlordHistory,
  UvRealEstateLandlordReports,
  UvRealEstateInspectionHeader,
  UvRealEstateInspectionSidebar,
  UvRealEstateInspectionGrid,
  UvRealEstateInspectionPanel,
  UvRealEstateInspectionFooter,
  UvRealEstateMortgageMonitor,
  UvRealEstateMortgageTracker,
  UvRealEstateMortgageAlerts,
  UvRealEstateMortgageActivity,
  UvRealEstateMortgageControls,
  UvRealEstateValuationSearch,
  UvRealEstateValuationSelector,
  UvRealEstateValuationPicker,
  UvRealEstateValuationForm,
  UvRealEstateValuationPreview,
  UvRealEstateAgentBadge,
  UvRealEstateAgentIndicator,
  UvRealEstateAgentProgress,
  UvRealEstateAgentScore,
  UvRealEstateAgentMeter,
  UvRealEstateOfferMap,
  UvRealEstateOfferChart,
  UvRealEstateOfferDiagram,
  UvRealEstateOfferBreakdown,
  UvRealEstateOfferComparison,
  UvConstructionProjectOverview,
  UvConstructionProjectStatus,
  UvConstructionProjectTimeline,
  UvConstructionProjectFilters,
  UvConstructionProjectActions,
  UvConstructionSiteDashboard,
  UvConstructionSiteSummary,
  UvConstructionSiteList,
  UvConstructionSiteDetail,
  UvConstructionSiteToolbar,
  UvConstructionContractorCard,
  UvConstructionContractorTable,
  UvConstructionContractorMetrics,
  UvConstructionContractorInsights,
  UvConstructionContractorMenu,
  UvConstructionPermitExplorer,
  UvConstructionPermitNavigator,
  UvConstructionPermitViewer,
  UvConstructionPermitEditor,
  UvConstructionPermitSettings,
  UvConstructionBlueprintQueue,
  UvConstructionBlueprintBoard,
  UvConstructionBlueprintCalendar,
  UvConstructionBlueprintHistory,
  UvConstructionBlueprintReports,
  UvConstructionScheduleHeader,
  UvConstructionScheduleSidebar,
  UvConstructionScheduleGrid,
  UvConstructionSchedulePanel,
  UvConstructionScheduleFooter,
  UvConstructionSafetyMonitor,
  UvConstructionSafetyTracker,
  UvConstructionSafetyAlerts,
  UvConstructionSafetyActivity,
  UvConstructionSafetyControls,
  UvConstructionEquipmentSearch,
  UvConstructionEquipmentSelector,
  UvConstructionEquipmentPicker,
  UvConstructionEquipmentForm,
  UvConstructionEquipmentPreview,
  UvConstructionMaterialBadge,
  UvConstructionMaterialIndicator,
  UvConstructionMaterialProgress,
  UvConstructionMaterialScore,
  UvConstructionMaterialMeter,
  UvConstructionProgressMap,
  UvConstructionProgressChart,
  UvConstructionProgressDiagram,
  UvConstructionProgressBreakdown,
  UvConstructionProgressComparison,
  UvEnergyMeterOverview,
  UvEnergyMeterStatus,
  UvEnergyMeterTimeline,
  UvEnergyMeterFilters,
  UvEnergyMeterActions,
  UvEnergyUsageDashboard,
  UvEnergyUsageSummary,
  UvEnergyUsageList,
  UvEnergyUsageDetail,
  UvEnergyUsageToolbar,
  UvEnergyTariffCard,
  UvEnergyTariffTable,
  UvEnergyTariffMetrics,
  UvEnergyTariffInsights,
  UvEnergyTariffMenu,
  UvEnergyGridExplorer,
  UvEnergyGridNavigator,
  UvEnergyGridViewer,
  UvEnergyGridEditor,
  UvEnergyGridSettings,
  UvEnergySolarQueue,
  UvEnergySolarBoard,
  UvEnergySolarCalendar,
  UvEnergySolarHistory,
  UvEnergySolarReports,
  UvEnergyWindHeader,
  UvEnergyWindSidebar,
  UvEnergyWindGrid,
  UvEnergyWindPanel,
  UvEnergyWindFooter,
  UvEnergyBatteryMonitor,
  UvEnergyBatteryTracker,
  UvEnergyBatteryAlerts,
  UvEnergyBatteryActivity,
  UvEnergyBatteryControls,
  UvEnergyOutageSearch,
  UvEnergyOutageSelector,
  UvEnergyOutagePicker,
  UvEnergyOutageForm,
  UvEnergyOutagePreview,
  UvEnergyDemandBadge,
  UvEnergyDemandIndicator,
  UvEnergyDemandProgress,
  UvEnergyDemandScore,
  UvEnergyDemandMeter,
  UvEnergyEmissionMap,
  UvEnergyEmissionChart,
  UvEnergyEmissionDiagram,
  UvEnergyEmissionBreakdown,
  UvEnergyEmissionComparison,
  UvTelecomSubscriberOverview,
  UvTelecomSubscriberStatus,
  UvTelecomSubscriberTimeline,
  UvTelecomSubscriberFilters,
  UvTelecomSubscriberActions,
  UvTelecomPlanDashboard,
  UvTelecomPlanSummary,
  UvTelecomPlanList,
  UvTelecomPlanDetail,
  UvTelecomPlanToolbar,
  UvTelecomDataUsageCard,
  UvTelecomDataUsageTable,
  UvTelecomDataUsageMetrics,
  UvTelecomDataUsageInsights,
  UvTelecomDataUsageMenu,
  UvTelecomCallLogExplorer,
  UvTelecomCallLogNavigator,
  UvTelecomCallLogViewer,
  UvTelecomCallLogEditor,
  UvTelecomCallLogSettings,
  UvTelecomMessageQueue,
  UvTelecomMessageBoard,
  UvTelecomMessageCalendar,
  UvTelecomMessageHistory,
  UvTelecomMessageReports,
  UvTelecomRoamingHeader,
  UvTelecomRoamingSidebar,
  UvTelecomRoamingGrid,
  UvTelecomRoamingPanel,
  UvTelecomRoamingFooter,
  UvTelecomDeviceMonitor,
  UvTelecomDeviceTracker,
  UvTelecomDeviceAlerts,
  UvTelecomDeviceActivity,
  UvTelecomDeviceControls,
  UvTelecomNetworkSearch,
  UvTelecomNetworkSelector,
  UvTelecomNetworkPicker,
  UvTelecomNetworkForm,
  UvTelecomNetworkPreview,
  UvTelecomTowerBadge,
  UvTelecomTowerIndicator,
  UvTelecomTowerProgress,
  UvTelecomTowerScore,
  UvTelecomTowerMeter,
  UvTelecomCoverageMap,
  UvTelecomCoverageChart,
  UvTelecomCoverageDiagram,
  UvTelecomCoverageBreakdown,
  UvTelecomCoverageComparison,
  UvMediaArticleOverview,
  UvMediaArticleStatus,
  UvMediaArticleTimeline,
  UvMediaArticleFilters,
  UvMediaArticleActions,
  UvMediaPublicationDashboard,
  UvMediaPublicationSummary,
  UvMediaPublicationList,
  UvMediaPublicationDetail,
  UvMediaPublicationToolbar,
  UvMediaEpisodeCard,
  UvMediaEpisodeTable,
  UvMediaEpisodeMetrics,
  UvMediaEpisodeInsights,
  UvMediaEpisodeMenu,
  UvMediaPlaylistExplorer,
  UvMediaPlaylistNavigator,
  UvMediaPlaylistViewer,
  UvMediaPlaylistEditor,
  UvMediaPlaylistSettings,
  UvMediaChannelQueue,
  UvMediaChannelBoard,
  UvMediaChannelCalendar,
  UvMediaChannelHistory,
  UvMediaChannelReports,
  UvMediaCreatorHeader,
  UvMediaCreatorSidebar,
  UvMediaCreatorGrid,
  UvMediaCreatorPanel,
  UvMediaCreatorFooter,
  UvMediaAudienceMonitor,
  UvMediaAudienceTracker,
  UvMediaAudienceAlerts,
  UvMediaAudienceActivity,
  UvMediaAudienceControls,
  UvMediaCampaignSearch,
  UvMediaCampaignSelector,
  UvMediaCampaignPicker,
  UvMediaCampaignForm,
  UvMediaCampaignPreview,
  UvMediaAssetBadge,
  UvMediaAssetIndicator,
  UvMediaAssetProgress,
  UvMediaAssetScore,
  UvMediaAssetMeter,
  UvMediaRightsMap,
  UvMediaRightsChart,
  UvMediaRightsDiagram,
  UvMediaRightsBreakdown,
  UvMediaRightsComparison,
  UvMarketingLeadOverview,
  UvMarketingLeadStatus,
  UvMarketingLeadTimeline,
  UvMarketingLeadFilters,
  UvMarketingLeadActions,
  UvMarketingFunnelDashboard,
  UvMarketingFunnelSummary,
  UvMarketingFunnelList,
  UvMarketingFunnelDetail,
  UvMarketingFunnelToolbar,
  UvMarketingCampaignCard,
  UvMarketingCampaignTable,
  UvMarketingCampaignMetrics,
  UvMarketingCampaignInsights,
  UvMarketingCampaignMenu,
  UvMarketingSegmentExplorer,
  UvMarketingSegmentNavigator,
  UvMarketingSegmentViewer,
  UvMarketingSegmentEditor,
  UvMarketingSegmentSettings,
  UvMarketingPersonaQueue,
  UvMarketingPersonaBoard,
  UvMarketingPersonaCalendar,
  UvMarketingPersonaHistory,
  UvMarketingPersonaReports,
  UvMarketingAttributionHeader,
  UvMarketingAttributionSidebar,
  UvMarketingAttributionGrid,
  UvMarketingAttributionPanel,
  UvMarketingAttributionFooter,
  UvMarketingExperimentMonitor,
  UvMarketingExperimentTracker,
  UvMarketingExperimentAlerts,
  UvMarketingExperimentActivity,
  UvMarketingExperimentControls,
  UvMarketingContentSearch,
  UvMarketingContentSelector,
  UvMarketingContentPicker,
  UvMarketingContentForm,
  UvMarketingContentPreview,
  UvMarketingKeywordBadge,
  UvMarketingKeywordIndicator,
  UvMarketingKeywordProgress,
  UvMarketingKeywordScore,
  UvMarketingKeywordMeter,
  UvMarketingConversionMap,
  UvMarketingConversionChart,
  UvMarketingConversionDiagram,
  UvMarketingConversionBreakdown,
  UvMarketingConversionComparison,
  UvSalesOpportunityOverview,
  UvSalesOpportunityStatus,
  UvSalesOpportunityTimeline,
  UvSalesOpportunityFilters,
  UvSalesOpportunityActions,
  UvSalesQuoteDashboard,
  UvSalesQuoteSummary,
  UvSalesQuoteList,
  UvSalesQuoteDetail,
  UvSalesQuoteToolbar,
  UvSalesProposalCard,
  UvSalesProposalTable,
  UvSalesProposalMetrics,
  UvSalesProposalInsights,
  UvSalesProposalMenu,
  UvSalesContractExplorer,
  UvSalesContractNavigator,
  UvSalesContractViewer,
  UvSalesContractEditor,
  UvSalesContractSettings,
  UvSalesPipelineQueue,
  UvSalesPipelineBoard,
  UvSalesPipelineCalendar,
  UvSalesPipelineHistory,
  UvSalesPipelineReports,
  UvSalesTerritoryHeader,
  UvSalesTerritorySidebar,
  UvSalesTerritoryGrid,
  UvSalesTerritoryPanel,
  UvSalesTerritoryFooter,
  UvSalesCommissionMonitor,
  UvSalesCommissionTracker,
  UvSalesCommissionAlerts,
  UvSalesCommissionActivity,
  UvSalesCommissionControls,
  UvSalesForecastSearch,
  UvSalesForecastSelector,
  UvSalesForecastPicker,
  UvSalesForecastForm,
  UvSalesForecastPreview,
  UvSalesAccountBadge,
  UvSalesAccountIndicator,
  UvSalesAccountProgress,
  UvSalesAccountScore,
  UvSalesAccountMeter,
  UvSalesContactMap,
  UvSalesContactChart,
  UvSalesContactDiagram,
  UvSalesContactBreakdown,
  UvSalesContactComparison,
  UvCrmContactOverview,
  UvCrmContactStatus,
  UvCrmContactTimeline,
  UvCrmContactFilters,
  UvCrmContactActions,
  UvCrmAccountDashboard,
  UvCrmAccountSummary,
  UvCrmAccountList,
  UvCrmAccountDetail,
  UvCrmAccountToolbar,
  UvCrmActivityCard,
  UvCrmActivityTable,
  UvCrmActivityMetrics,
  UvCrmActivityInsights,
  UvCrmActivityMenu,
  UvCrmNoteExplorer,
  UvCrmNoteNavigator,
  UvCrmNoteViewer,
  UvCrmNoteEditor,
  UvCrmNoteSettings,
  UvCrmTaskQueue,
  UvCrmTaskBoard,
  UvCrmTaskCalendar,
  UvCrmTaskHistory,
  UvCrmTaskReports,
  UvCrmDealHeader,
  UvCrmDealSidebar,
  UvCrmDealGrid,
  UvCrmDealPanel,
  UvCrmDealFooter,
  UvCrmStageMonitor,
  UvCrmStageTracker,
  UvCrmStageAlerts,
  UvCrmStageActivity,
  UvCrmStageControls,
  UvCrmTeamSearch,
  UvCrmTeamSelector,
  UvCrmTeamPicker,
  UvCrmTeamForm,
  UvCrmTeamPreview,
  UvCrmTerritoryBadge,
  UvCrmTerritoryIndicator,
  UvCrmTerritoryProgress,
  UvCrmTerritoryScore,
  UvCrmTerritoryMeter,
  UvCrmImportMap,
  UvCrmImportChart,
  UvCrmImportDiagram,
  UvCrmImportBreakdown,
  UvCrmImportComparison,
  UvSupportTicketOverview,
  UvSupportTicketStatus,
  UvSupportTicketTimeline,
  UvSupportTicketFilters,
  UvSupportTicketActions,
  UvSupportConversationDashboard,
  UvSupportConversationSummary,
  UvSupportConversationList,
  UvSupportConversationDetail,
  UvSupportConversationToolbar,
  UvSupportQueueCard,
  UvSupportQueueTable,
  UvSupportQueueMetrics,
  UvSupportQueueInsights,
  UvSupportQueueMenu,
  UvSupportSlaExplorer,
  UvSupportSlaNavigator,
  UvSupportSlaViewer,
  UvSupportSlaEditor,
  UvSupportSlaSettings,
  UvSupportAgentQueue,
  UvSupportAgentBoard,
  UvSupportAgentCalendar,
  UvSupportAgentHistory,
  UvSupportAgentReports,
  UvSupportCustomerHeader,
  UvSupportCustomerSidebar,
  UvSupportCustomerGrid,
  UvSupportCustomerPanel,
  UvSupportCustomerFooter,
  UvSupportKnowledgeMonitor,
  UvSupportKnowledgeTracker,
  UvSupportKnowledgeAlerts,
  UvSupportKnowledgeActivity,
  UvSupportKnowledgeControls,
  UvSupportEscalationSearch,
  UvSupportEscalationSelector,
  UvSupportEscalationPicker,
  UvSupportEscalationForm,
  UvSupportEscalationPreview,
  UvSupportSatisfactionBadge,
  UvSupportSatisfactionIndicator,
  UvSupportSatisfactionProgress,
  UvSupportSatisfactionScore,
  UvSupportSatisfactionMeter,
  UvSupportIncidentMap,
  UvSupportIncidentChart,
  UvSupportIncidentDiagram,
  UvSupportIncidentBreakdown,
  UvSupportIncidentComparison,
  UvHrEmployeeOverview,
  UvHrEmployeeStatus,
  UvHrEmployeeTimeline,
  UvHrEmployeeFilters,
  UvHrEmployeeActions,
  UvHrCandidateDashboard,
  UvHrCandidateSummary,
  UvHrCandidateList,
  UvHrCandidateDetail,
  UvHrCandidateToolbar,
  UvHrInterviewCard,
  UvHrInterviewTable,
  UvHrInterviewMetrics,
  UvHrInterviewInsights,
  UvHrInterviewMenu,
  UvHrOfferExplorer,
  UvHrOfferNavigator,
  UvHrOfferViewer,
  UvHrOfferEditor,
  UvHrOfferSettings,
  UvHrOnboardingQueue,
  UvHrOnboardingBoard,
  UvHrOnboardingCalendar,
  UvHrOnboardingHistory,
  UvHrOnboardingReports,
  UvHrLeaveHeader,
  UvHrLeaveSidebar,
  UvHrLeaveGrid,
  UvHrLeavePanel,
  UvHrLeaveFooter,
  UvLaboratoryOpsMonitorPanel,
  UvLaboratoryOpsMonitorCard,
  UvLaboratoryOpsMonitorTable,
  UvLaboratoryOpsMonitorForm,
  UvLaboratoryOpsMonitorWidget,
  UvLaboratoryOpsExplorerPanel,
  UvLaboratoryOpsExplorerCard,
  UvLaboratoryOpsExplorerTable,
  UvLaboratoryOpsExplorerForm,
  UvLaboratoryOpsExplorerWidget,
  UvLaboratoryOpsManagerPanel,
  UvLaboratoryOpsManagerCard,
  UvLaboratoryOpsManagerTable,
  UvLaboratoryOpsManagerForm,
  UvLaboratoryOpsManagerWidget,
  UvLaboratoryOpsConsolePanel,
  UvLaboratoryOpsConsoleCard,
  UvLaboratoryOpsConsoleTable,
  UvLaboratoryOpsConsoleForm,
  UvLaboratoryOpsConsoleWidget,
  UvLaboratoryOpsInsightsPanel,
  UvLaboratoryOpsInsightsCard,
  UvLaboratoryOpsInsightsTable,
  UvLaboratoryOpsInsightsForm,
  UvLaboratoryOpsInsightsWidget,
  UvLaboratoryOpsWorkflowPanel,
  UvLaboratoryOpsWorkflowCard,
  UvLaboratoryOpsWorkflowTable,
  UvLaboratoryOpsWorkflowForm,
  UvLaboratoryOpsWorkflowWidget,
  UvLaboratoryOpsAutomationPanel,
  UvLaboratoryOpsAutomationCard,
  UvLaboratoryOpsAutomationTable,
  UvLaboratoryOpsAutomationForm,
  UvLaboratoryOpsAutomationWidget,
  UvTelehealthOpsOverviewPanel,
  UvTelehealthOpsOverviewCard,
  UvTelehealthOpsOverviewTable,
  UvTelehealthOpsOverviewForm,
  UvTelehealthOpsOverviewWidget,
  UvTelehealthOpsWorkspacePanel,
  UvTelehealthOpsWorkspaceCard,
  UvTelehealthOpsWorkspaceTable,
  UvTelehealthOpsWorkspaceForm,
  UvTelehealthOpsWorkspaceWidget,
  UvTelehealthOpsPlannerPanel,
  UvTelehealthOpsPlannerCard,
  UvTelehealthOpsPlannerTable,
  UvTelehealthOpsPlannerForm,
  UvTelehealthOpsPlannerWidget,
  UvTelehealthOpsMonitorPanel,
  UvTelehealthOpsMonitorCard,
  UvTelehealthOpsMonitorTable,
  UvTelehealthOpsMonitorForm,
  UvTelehealthOpsMonitorWidget,
  UvTelehealthOpsExplorerPanel,
  UvTelehealthOpsExplorerCard,
  UvTelehealthOpsExplorerTable,
  UvTelehealthOpsExplorerForm,
  UvTelehealthOpsExplorerWidget,
  UvTelehealthOpsManagerPanel,
  UvTelehealthOpsManagerCard,
  UvTelehealthOpsManagerTable,
  UvTelehealthOpsManagerForm,
  UvTelehealthOpsManagerWidget,
  UvTelehealthOpsConsolePanel,
  UvTelehealthOpsConsoleCard,
  UvTelehealthOpsConsoleTable,
  UvTelehealthOpsConsoleForm,
  UvTelehealthOpsConsoleWidget,
  UvTelehealthOpsInsightsPanel,
  UvTelehealthOpsInsightsCard,
  UvTelehealthOpsInsightsTable,
  UvTelehealthOpsInsightsForm,
  UvTelehealthOpsInsightsWidget,
  UvTelehealthOpsWorkflowPanel,
  UvTelehealthOpsWorkflowCard,
  UvTelehealthOpsWorkflowTable,
  UvTelehealthOpsWorkflowForm,
  UvTelehealthOpsWorkflowWidget,
  UvTelehealthOpsAutomationPanel,
  UvTelehealthOpsAutomationCard,
  UvTelehealthOpsAutomationTable,
  UvTelehealthOpsAutomationForm,
  UvTelehealthOpsAutomationWidget,
  UvWellnessOpsOverviewPanel,
  UvWellnessOpsOverviewCard,
  UvWellnessOpsOverviewTable,
  UvWellnessOpsOverviewForm,
  UvWellnessOpsOverviewWidget,
  UvWellnessOpsWorkspacePanel,
  UvWellnessOpsWorkspaceCard,
  UvWellnessOpsWorkspaceTable,
  UvWellnessOpsWorkspaceForm,
  UvWellnessOpsWorkspaceWidget,
  UvWellnessOpsPlannerPanel,
  UvWellnessOpsPlannerCard,
  UvWellnessOpsPlannerTable,
  UvWellnessOpsPlannerForm,
  UvWellnessOpsPlannerWidget,
  UvWellnessOpsMonitorPanel,
  UvWellnessOpsMonitorCard,
  UvWellnessOpsMonitorTable,
  UvWellnessOpsMonitorForm,
  UvWellnessOpsMonitorWidget,
  UvWellnessOpsExplorerPanel,
  UvWellnessOpsExplorerCard,
  UvWellnessOpsExplorerTable,
  UvWellnessOpsExplorerForm,
  UvWellnessOpsExplorerWidget,
  UvWellnessOpsManagerPanel,
  UvWellnessOpsManagerCard,
  UvWellnessOpsManagerTable,
  UvWellnessOpsManagerForm,
  UvWellnessOpsManagerWidget,
  UvWellnessOpsConsolePanel,
  UvWellnessOpsConsoleCard,
  UvWellnessOpsConsoleTable,
  UvWellnessOpsConsoleForm,
  UvWellnessOpsConsoleWidget,
  UvWellnessOpsInsightsPanel,
  UvWellnessOpsInsightsCard,
  UvWellnessOpsInsightsTable,
  UvWellnessOpsInsightsForm,
  UvWellnessOpsInsightsWidget,
  UvWellnessOpsWorkflowPanel,
  UvWellnessOpsWorkflowCard,
  UvWellnessOpsWorkflowTable,
  UvWellnessOpsWorkflowForm,
  UvWellnessOpsWorkflowWidget,
  UvWellnessOpsAutomationPanel,
  UvWellnessOpsAutomationCard,
  UvWellnessOpsAutomationTable,
  UvWellnessOpsAutomationForm,
  UvWellnessOpsAutomationWidget,
  UvLearningOpsOverviewPanel,
  UvLearningOpsOverviewCard,
  UvLearningOpsOverviewTable,
  UvLearningOpsOverviewForm,
  UvLearningOpsOverviewWidget,
  UvLearningOpsWorkspacePanel,
  UvLearningOpsWorkspaceCard,
  UvLearningOpsWorkspaceTable,
  UvLearningOpsWorkspaceForm,
  UvLearningOpsWorkspaceWidget,
  UvLearningOpsPlannerPanel,
  UvLearningOpsPlannerCard,
  UvLearningOpsPlannerTable,
  UvLearningOpsPlannerForm,
  UvLearningOpsPlannerWidget,
  UvLearningOpsMonitorPanel,
  UvLearningOpsMonitorCard,
  UvLearningOpsMonitorTable,
  UvLearningOpsMonitorForm,
  UvLearningOpsMonitorWidget,
  UvLearningOpsExplorerPanel,
  UvLearningOpsExplorerCard,
  UvLearningOpsExplorerTable,
  UvLearningOpsExplorerForm,
  UvLearningOpsExplorerWidget,
  UvLearningOpsManagerPanel,
  UvLearningOpsManagerCard,
  UvLearningOpsManagerTable,
  UvLearningOpsManagerForm,
  UvLearningOpsManagerWidget,
  UvLearningOpsConsolePanel,
  UvLearningOpsConsoleCard,
  UvLearningOpsConsoleTable,
  UvLearningOpsConsoleForm,
  UvLearningOpsConsoleWidget,
  UvLearningOpsInsightsPanel,
  UvLearningOpsInsightsCard,
  UvLearningOpsInsightsTable,
  UvLearningOpsInsightsForm,
  UvLearningOpsInsightsWidget,
  UvLearningOpsWorkflowPanel,
  UvLearningOpsWorkflowCard,
  UvLearningOpsWorkflowTable,
  UvLearningOpsWorkflowForm,
  UvLearningOpsWorkflowWidget,
  UvLearningOpsAutomationPanel,
  UvLearningOpsAutomationCard,
  UvLearningOpsAutomationTable,
  UvLearningOpsAutomationForm,
  UvLearningOpsAutomationWidget,
  UvCampusOpsOverviewPanel,
  UvCampusOpsOverviewCard,
  UvCampusOpsOverviewTable,
  UvCampusOpsOverviewForm,
  UvCampusOpsOverviewWidget,
  UvCampusOpsWorkspacePanel,
  UvCampusOpsWorkspaceCard,
  UvCampusOpsWorkspaceTable,
  UvCampusOpsWorkspaceForm,
  UvCampusOpsWorkspaceWidget,
  UvCampusOpsPlannerPanel,
  UvCampusOpsPlannerCard,
  UvCampusOpsPlannerTable,
  UvCampusOpsPlannerForm,
  UvCampusOpsPlannerWidget,
  UvCampusOpsMonitorPanel,
  UvCampusOpsMonitorCard,
  UvCampusOpsMonitorTable,
  UvCampusOpsMonitorForm,
  UvCampusOpsMonitorWidget,
  UvCampusOpsExplorerPanel,
  UvCampusOpsExplorerCard,
  UvCampusOpsExplorerTable,
  UvCampusOpsExplorerForm,
  UvCampusOpsExplorerWidget,
  UvCampusOpsManagerPanel,
  UvCampusOpsManagerCard,
  UvCampusOpsManagerTable,
  UvCampusOpsManagerForm,
  UvCampusOpsManagerWidget,
  UvCampusOpsConsolePanel,
  UvCampusOpsConsoleCard,
  UvCampusOpsConsoleTable,
  UvCampusOpsConsoleForm,
  UvCampusOpsConsoleWidget,
  UvCampusOpsInsightsPanel,
  UvCampusOpsInsightsCard,
  UvCampusOpsInsightsTable,
  UvCampusOpsInsightsForm,
  UvCampusOpsInsightsWidget,
  UvCampusOpsWorkflowPanel,
  UvCampusOpsWorkflowCard,
  UvCampusOpsWorkflowTable,
  UvCampusOpsWorkflowForm,
  UvCampusOpsWorkflowWidget,
  UvCampusOpsAutomationPanel,
  UvCampusOpsAutomationCard,
  UvCampusOpsAutomationTable,
  UvCampusOpsAutomationForm,
  UvCampusOpsAutomationWidget,
  UvResearchOpsWorkspacePanel,
  UvResearchOpsWorkspaceCard,
  UvResearchOpsWorkspaceTable,
  UvResearchOpsWorkspaceForm,
  UvResearchOpsWorkspaceWidget,
  UvResearchOpsPlannerPanel,
  UvResearchOpsPlannerCard,
  UvResearchOpsPlannerTable,
  UvResearchOpsPlannerForm,
  UvResearchOpsPlannerWidget,
  UvResearchOpsMonitorPanel,
  UvResearchOpsMonitorCard,
  UvResearchOpsMonitorTable,
  UvResearchOpsMonitorForm,
  UvResearchOpsMonitorWidget,
  UvResearchOpsExplorerPanel,
  UvResearchOpsExplorerCard,
  UvResearchOpsExplorerTable,
  UvResearchOpsExplorerForm,
  UvResearchOpsExplorerWidget,
  UvResearchOpsManagerPanel,
  UvResearchOpsManagerCard,
  UvResearchOpsManagerTable,
  UvResearchOpsManagerForm,
  UvResearchOpsManagerWidget,
  UvResearchOpsConsolePanel,
  UvResearchOpsConsoleCard,
  UvResearchOpsConsoleTable,
  UvResearchOpsConsoleForm,
  UvResearchOpsConsoleWidget,
  UvResearchOpsInsightsPanel,
  UvResearchOpsInsightsCard,
  UvResearchOpsInsightsTable,
  UvResearchOpsInsightsForm,
  UvResearchOpsInsightsWidget,
  UvResearchOpsWorkflowPanel,
  UvResearchOpsWorkflowCard,
  UvResearchOpsWorkflowTable,
  UvResearchOpsWorkflowForm,
  UvResearchOpsWorkflowWidget,
  UvResearchOpsAutomationPanel,
  UvResearchOpsAutomationCard,
  UvResearchOpsAutomationTable,
  UvResearchOpsAutomationForm,
  UvResearchOpsAutomationWidget,
  UvLibraryOpsOverviewPanel,
  UvLibraryOpsOverviewCard,
  UvLibraryOpsOverviewTable,
  UvLibraryOpsOverviewForm,
  UvLibraryOpsOverviewWidget,
  UvLibraryOpsWorkspacePanel,
  UvLibraryOpsWorkspaceCard,
  UvLibraryOpsWorkspaceTable,
  UvLibraryOpsWorkspaceForm,
  UvLibraryOpsWorkspaceWidget,
  UvLibraryOpsPlannerPanel,
  UvLibraryOpsPlannerCard,
  UvLibraryOpsPlannerTable,
  UvLibraryOpsPlannerForm,
  UvLibraryOpsPlannerWidget,
  UvLibraryOpsMonitorPanel,
  UvLibraryOpsMonitorCard,
  UvLibraryOpsMonitorTable,
  UvLibraryOpsMonitorForm,
  UvLibraryOpsMonitorWidget,
  UvLibraryOpsExplorerPanel,
  UvLibraryOpsExplorerCard,
  UvLibraryOpsExplorerTable,
  UvLibraryOpsExplorerForm,
  UvLibraryOpsExplorerWidget,
  UvLibraryOpsManagerPanel,
  UvLibraryOpsManagerCard,
  UvLibraryOpsManagerTable,
  UvLibraryOpsManagerForm,
  UvLibraryOpsManagerWidget,
  UvLibraryOpsConsolePanel,
  UvLibraryOpsConsoleCard,
  UvLibraryOpsConsoleTable,
  UvLibraryOpsConsoleForm,
  UvLibraryOpsConsoleWidget,
  UvLibraryOpsInsightsPanel,
  UvLibraryOpsInsightsCard,
  UvLibraryOpsInsightsTable,
  UvLibraryOpsInsightsForm,
  UvLibraryOpsInsightsWidget,
  UvLibraryOpsWorkflowPanel,
  UvLibraryOpsWorkflowCard,
  UvLibraryOpsWorkflowTable,
  UvLibraryOpsWorkflowForm,
  UvLibraryOpsWorkflowWidget,
  UvLibraryOpsAutomationPanel,
  UvLibraryOpsAutomationCard,
  UvLibraryOpsAutomationTable,
  UvLibraryOpsAutomationForm,
  UvLibraryOpsAutomationWidget,
  UvTrainingOpsOverviewPanel,
  UvTrainingOpsOverviewCard,
  UvTrainingOpsOverviewTable,
  UvTrainingOpsOverviewForm,
  UvTrainingOpsOverviewWidget,
  UvTrainingOpsWorkspacePanel,
  UvTrainingOpsWorkspaceCard,
  UvTrainingOpsWorkspaceTable,
  UvTrainingOpsWorkspaceForm,
  UvTrainingOpsWorkspaceWidget,
  UvTrainingOpsPlannerPanel,
  UvTrainingOpsPlannerCard,
  UvTrainingOpsPlannerTable,
  UvTrainingOpsPlannerForm,
  UvTrainingOpsPlannerWidget,
  UvTrainingOpsMonitorPanel,
  UvTrainingOpsMonitorCard,
  UvTrainingOpsMonitorTable,
  UvTrainingOpsMonitorForm,
  UvTrainingOpsMonitorWidget,
  UvTrainingOpsExplorerPanel,
  UvTrainingOpsExplorerCard,
  UvTrainingOpsExplorerTable,
  UvTrainingOpsExplorerForm,
  UvTrainingOpsExplorerWidget,
  UvTrainingOpsManagerPanel,
  UvTrainingOpsManagerCard,
  UvTrainingOpsManagerTable,
  UvTrainingOpsManagerForm,
  UvTrainingOpsManagerWidget,
  UvTrainingOpsConsolePanel,
  UvTrainingOpsConsoleCard,
  UvTrainingOpsConsoleTable,
  UvTrainingOpsConsoleForm,
  UvTrainingOpsConsoleWidget,
  UvTrainingOpsInsightsPanel,
  UvTrainingOpsInsightsCard,
  UvTrainingOpsInsightsTable,
  UvTrainingOpsInsightsForm,
  UvTrainingOpsInsightsWidget,
  UvTrainingOpsWorkflowPanel,
  UvTrainingOpsWorkflowCard,
  UvTrainingOpsWorkflowTable,
  UvTrainingOpsWorkflowForm,
  UvTrainingOpsWorkflowWidget,
  UvTrainingOpsAutomationPanel,
  UvTrainingOpsAutomationCard,
  UvTrainingOpsAutomationTable,
  UvTrainingOpsAutomationForm,
  UvTrainingOpsAutomationWidget,
  UvFleetOpsOverviewPanel,
  UvFleetOpsOverviewCard,
  UvFleetOpsOverviewTable,
  UvFleetOpsOverviewForm,
  UvFleetOpsOverviewWidget,
  UvFleetOpsWorkspacePanel,
  UvFleetOpsWorkspaceCard,
  UvFleetOpsWorkspaceTable,
  UvFleetOpsWorkspaceForm,
  UvFleetOpsWorkspaceWidget,
  UvFleetOpsPlannerPanel,
  UvFleetOpsPlannerCard,
  UvFleetOpsPlannerTable,
  UvFleetOpsPlannerForm,
  UvFleetOpsPlannerWidget,
  UvFleetOpsMonitorPanel,
  UvFleetOpsMonitorCard,
  UvFleetOpsMonitorTable,
  UvFleetOpsMonitorForm,
  UvFleetOpsMonitorWidget,
  UvFleetOpsExplorerPanel,
  UvFleetOpsExplorerCard,
  UvFleetOpsExplorerTable,
  UvFleetOpsExplorerForm,
  UvFleetOpsExplorerWidget,
  UvFleetOpsManagerPanel,
  UvFleetOpsManagerCard,
  UvFleetOpsManagerTable,
  UvFleetOpsManagerForm,
  UvFleetOpsManagerWidget,
  UvFleetOpsConsolePanel,
  UvFleetOpsConsoleCard,
  UvFleetOpsConsoleTable,
  UvFleetOpsConsoleForm,
  UvFleetOpsConsoleWidget,
  UvFleetOpsInsightsPanel,
  UvFleetOpsInsightsCard,
  UvFleetOpsInsightsTable,
  UvFleetOpsInsightsForm,
  UvFleetOpsInsightsWidget,
  UvFleetOpsWorkflowPanel,
  UvFleetOpsWorkflowCard,
  UvFleetOpsWorkflowTable,
  UvFleetOpsWorkflowForm,
  UvFleetOpsWorkflowWidget,
  UvFleetOpsAutomationPanel,
  UvFleetOpsAutomationCard,
  UvFleetOpsAutomationTable,
  UvFleetOpsAutomationForm,
  UvFleetOpsAutomationWidget,
  UvTransitOpsOverviewPanel,
  UvTransitOpsOverviewCard,
  UvTransitOpsOverviewTable,
  UvTransitOpsOverviewForm,
  UvTransitOpsOverviewWidget,
  UvTransitOpsWorkspacePanel,
  UvTransitOpsWorkspaceCard,
  UvTransitOpsWorkspaceTable,
  UvTransitOpsWorkspaceForm,
  UvTransitOpsWorkspaceWidget,
  UvTransitOpsPlannerPanel,
  UvTransitOpsPlannerCard,
  UvTransitOpsPlannerTable,
  UvTransitOpsPlannerForm,
  UvTransitOpsPlannerWidget,
  UvTransitOpsMonitorPanel,
  UvTransitOpsMonitorCard,
  UvTransitOpsMonitorTable,
  UvTransitOpsMonitorForm,
  UvTransitOpsMonitorWidget,
  UvTransitOpsExplorerPanel,
  UvTransitOpsExplorerCard,
  UvTransitOpsExplorerTable,
  UvTransitOpsExplorerForm,
  UvTransitOpsExplorerWidget,
  UvTransitOpsManagerPanel,
  UvTransitOpsManagerCard,
  UvTransitOpsManagerTable,
  UvTransitOpsManagerForm,
  UvTransitOpsManagerWidget,
  UvTransitOpsConsolePanel,
  UvTransitOpsConsoleCard,
  UvTransitOpsConsoleTable,
  UvTransitOpsConsoleForm,
  UvTransitOpsConsoleWidget,
  UvTransitOpsInsightsPanel,
  UvTransitOpsInsightsCard,
  UvTransitOpsInsightsTable,
  UvTransitOpsInsightsForm,
  UvTransitOpsInsightsWidget,
  UvTransitOpsWorkflowPanel,
  UvTransitOpsWorkflowCard,
  UvTransitOpsWorkflowTable,
  UvTransitOpsWorkflowForm,
  UvTransitOpsWorkflowWidget,
  UvTransitOpsAutomationPanel,
  UvTransitOpsAutomationCard,
  UvTransitOpsAutomationTable,
  UvTransitOpsAutomationForm,
  UvTransitOpsAutomationWidget,
  UvAviationOpsOverviewPanel,
  UvAviationOpsOverviewCard,
  UvAviationOpsOverviewTable,
  UvAviationOpsOverviewForm,
  UvAviationOpsOverviewWidget,
  UvAviationOpsWorkspacePanel,
  UvAviationOpsWorkspaceCard,
  UvAviationOpsWorkspaceTable,
  UvAviationOpsWorkspaceForm,
  UvAviationOpsWorkspaceWidget,
  UvAviationOpsPlannerPanel,
  UvAviationOpsPlannerCard,
  UvAviationOpsPlannerTable,
  UvAviationOpsPlannerForm,
  UvAviationOpsPlannerWidget,
  UvAviationOpsMonitorPanel,
  UvAviationOpsMonitorCard,
  UvAviationOpsMonitorTable,
  UvAviationOpsMonitorForm,
  UvAviationOpsMonitorWidget,
  UvAviationOpsExplorerPanel,
  UvAviationOpsExplorerCard,
  UvAviationOpsExplorerTable,
  UvAviationOpsExplorerForm,
  UvAviationOpsExplorerWidget,
  UvAviationOpsManagerPanel,
  UvAviationOpsManagerCard,
  UvAviationOpsManagerTable,
  UvAviationOpsManagerForm,
  UvAviationOpsManagerWidget,
  UvAviationOpsConsolePanel,
  UvAviationOpsConsoleCard,
  UvAviationOpsConsoleTable,
  UvAviationOpsConsoleForm,
  UvAviationOpsConsoleWidget,
  UvAviationOpsInsightsPanel,
  UvAviationOpsInsightsCard,
  UvAviationOpsInsightsTable,
  UvAviationOpsInsightsForm,
  UvAviationOpsInsightsWidget,
  UvAviationOpsWorkflowPanel,
  UvAviationOpsWorkflowCard,
  UvAviationOpsWorkflowTable,
  UvAviationOpsWorkflowForm,
  UvAviationOpsWorkflowWidget,
  UvAviationOpsAutomationPanel,
  UvAviationOpsAutomationCard,
  UvAviationOpsAutomationTable,
  UvAviationOpsAutomationForm,
  UvAviationOpsAutomationWidget,
  UvMaritimeOpsOverviewPanel,
  UvMaritimeOpsOverviewCard,
  UvMaritimeOpsOverviewTable,
  UvMaritimeOpsOverviewForm,
  UvMaritimeOpsOverviewWidget,
  UvMaritimeOpsWorkspacePanel,
  UvMaritimeOpsWorkspaceCard,
  UvMaritimeOpsWorkspaceTable,
  UvMaritimeOpsWorkspaceForm,
  UvMaritimeOpsWorkspaceWidget,
  UvMaritimeOpsPlannerPanel,
  UvMaritimeOpsPlannerCard,
  UvMaritimeOpsPlannerTable,
  UvMaritimeOpsPlannerForm,
  UvMaritimeOpsPlannerWidget,
  UvMaritimeOpsMonitorPanel,
  UvMaritimeOpsMonitorCard,
  UvMaritimeOpsMonitorTable,
  UvMaritimeOpsMonitorForm,
  UvMaritimeOpsMonitorWidget,
  UvMaritimeOpsExplorerPanel,
  UvMaritimeOpsExplorerCard,
  UvMaritimeOpsExplorerTable,
  UvMaritimeOpsExplorerForm,
  UvMaritimeOpsExplorerWidget,
  UvMaritimeOpsManagerPanel,
  UvMaritimeOpsManagerCard,
  UvMaritimeOpsManagerTable,
  UvMaritimeOpsManagerForm,
  UvMaritimeOpsManagerWidget,
  UvMaritimeOpsConsolePanel,
  UvMaritimeOpsConsoleCard,
  UvMaritimeOpsConsoleTable,
  UvMaritimeOpsConsoleForm,
  UvMaritimeOpsConsoleWidget,
  UvMaritimeOpsInsightsPanel,
  UvMaritimeOpsInsightsCard,
  UvMaritimeOpsInsightsTable,
  UvMaritimeOpsInsightsForm,
  UvMaritimeOpsInsightsWidget,
  UvMaritimeOpsWorkflowPanel,
  UvMaritimeOpsWorkflowCard,
  UvMaritimeOpsWorkflowTable,
  UvMaritimeOpsWorkflowForm,
  UvMaritimeOpsWorkflowWidget,
  UvMaritimeOpsAutomationPanel,
  UvMaritimeOpsAutomationCard,
  UvMaritimeOpsAutomationTable,
  UvMaritimeOpsAutomationForm,
  UvMaritimeOpsAutomationWidget,
  UvWarehouseOpsOverviewPanel,
  UvWarehouseOpsOverviewCard,
  UvWarehouseOpsOverviewTable,
  UvWarehouseOpsOverviewForm,
  UvWarehouseOpsOverviewWidget,
  UvWarehouseOpsWorkspacePanel,
  UvWarehouseOpsWorkspaceCard,
  UvWarehouseOpsWorkspaceTable,
  UvWarehouseOpsWorkspaceForm,
  UvWarehouseOpsWorkspaceWidget,
  UvWarehouseOpsPlannerPanel,
  UvWarehouseOpsPlannerCard,
  UvWarehouseOpsPlannerTable,
  UvWarehouseOpsPlannerForm,
  UvWarehouseOpsPlannerWidget,
  UvWarehouseOpsMonitorPanel,
  UvWarehouseOpsMonitorCard,
  UvWarehouseOpsMonitorTable,
  UvWarehouseOpsMonitorForm,
  UvWarehouseOpsMonitorWidget,
  UvWarehouseOpsExplorerPanel,
  UvWarehouseOpsExplorerCard,
  UvWarehouseOpsExplorerTable,
  UvWarehouseOpsExplorerForm,
  UvWarehouseOpsExplorerWidget,
  UvWarehouseOpsManagerPanel,
  UvWarehouseOpsManagerCard,
  UvWarehouseOpsManagerTable,
  UvWarehouseOpsManagerForm,
  UvWarehouseOpsManagerWidget,
  UvWarehouseOpsConsolePanel,
  UvWarehouseOpsConsoleCard,
  UvWarehouseOpsConsoleTable,
  UvWarehouseOpsConsoleForm,
  UvWarehouseOpsConsoleWidget,
  UvWarehouseOpsInsightsPanel,
  UvWarehouseOpsInsightsCard,
  UvWarehouseOpsInsightsTable,
  UvWarehouseOpsInsightsForm,
  UvWarehouseOpsInsightsWidget,
  UvWarehouseOpsWorkflowPanel,
  UvWarehouseOpsWorkflowCard,
  UvWarehouseOpsWorkflowTable,
  UvWarehouseOpsWorkflowForm,
  UvWarehouseOpsWorkflowWidget,
  UvWarehouseOpsAutomationPanel,
  UvWarehouseOpsAutomationCard,
  UvWarehouseOpsAutomationTable,
  UvWarehouseOpsAutomationForm,
  UvWarehouseOpsAutomationWidget,
  UvFactoryOpsOverviewPanel,
  UvFactoryOpsOverviewCard,
  UvFactoryOpsOverviewTable,
  UvFactoryOpsOverviewForm,
  UvFactoryOpsOverviewWidget,
  UvFactoryOpsWorkspacePanel,
  UvFactoryOpsWorkspaceCard,
  UvFactoryOpsWorkspaceTable,
  UvFactoryOpsWorkspaceForm,
  UvFactoryOpsWorkspaceWidget,
  UvFactoryOpsPlannerPanel,
  UvFactoryOpsPlannerCard,
  UvFactoryOpsPlannerTable,
  UvFactoryOpsPlannerForm,
  UvFactoryOpsPlannerWidget,
  UvFactoryOpsMonitorPanel,
  UvFactoryOpsMonitorCard,
  UvFactoryOpsMonitorTable,
  UvFactoryOpsMonitorForm,
  UvFactoryOpsMonitorWidget,
  UvFactoryOpsExplorerPanel,
  UvFactoryOpsExplorerCard,
  UvFactoryOpsExplorerTable,
  UvFactoryOpsExplorerForm,
  UvFactoryOpsExplorerWidget,
  UvFactoryOpsManagerPanel,
  UvFactoryOpsManagerCard,
  UvFactoryOpsManagerTable,
  UvFactoryOpsManagerForm,
  UvFactoryOpsManagerWidget,
  UvFactoryOpsConsolePanel,
  UvFactoryOpsConsoleCard,
  UvFactoryOpsConsoleTable,
  UvFactoryOpsConsoleForm,
  UvFactoryOpsConsoleWidget,
  UvFactoryOpsInsightsPanel,
  UvFactoryOpsInsightsCard,
  UvFactoryOpsInsightsTable,
  UvFactoryOpsInsightsForm,
  UvFactoryOpsInsightsWidget,
  UvFactoryOpsWorkflowPanel,
  UvFactoryOpsWorkflowCard,
  UvFactoryOpsWorkflowTable,
  UvFactoryOpsWorkflowForm,
  UvFactoryOpsWorkflowWidget,
  UvFactoryOpsAutomationPanel,
  UvFactoryOpsAutomationCard,
  UvFactoryOpsAutomationTable,
  UvFactoryOpsAutomationForm,
  UvFactoryOpsAutomationWidget,
  UvMaintenanceOpsOverviewPanel,
  UvMaintenanceOpsOverviewCard,
  UvMaintenanceOpsOverviewTable,
  UvMaintenanceOpsOverviewForm,
  UvMaintenanceOpsOverviewWidget,
  UvMaintenanceOpsWorkspacePanel,
  UvMaintenanceOpsWorkspaceCard,
  UvMaintenanceOpsWorkspaceTable,
  UvMaintenanceOpsWorkspaceForm,
  UvMaintenanceOpsWorkspaceWidget,
  UvMaintenanceOpsPlannerPanel,
  UvMaintenanceOpsPlannerCard,
  UvMaintenanceOpsPlannerTable,
  UvMaintenanceOpsPlannerForm,
  UvMaintenanceOpsPlannerWidget,
  UvMaintenanceOpsMonitorPanel,
  UvMaintenanceOpsMonitorCard,
  UvMaintenanceOpsMonitorTable,
  UvMaintenanceOpsMonitorForm,
  UvMaintenanceOpsMonitorWidget,
  UvMaintenanceOpsExplorerPanel,
  UvMaintenanceOpsExplorerCard,
  UvMaintenanceOpsExplorerTable,
  UvMaintenanceOpsExplorerForm,
  UvMaintenanceOpsExplorerWidget,
  UvMaintenanceOpsManagerPanel,
  UvMaintenanceOpsManagerCard,
  UvMaintenanceOpsManagerTable,
  UvMaintenanceOpsManagerForm,
  UvMaintenanceOpsManagerWidget,
  UvMaintenanceOpsConsolePanel,
  UvMaintenanceOpsConsoleCard,
  UvMaintenanceOpsConsoleTable,
  UvMaintenanceOpsConsoleForm,
  UvMaintenanceOpsConsoleWidget,
  UvMaintenanceOpsInsightsPanel,
  UvMaintenanceOpsInsightsCard,
  UvMaintenanceOpsInsightsTable,
  UvMaintenanceOpsInsightsForm,
  UvMaintenanceOpsInsightsWidget,
  UvMaintenanceOpsWorkflowPanel,
  UvMaintenanceOpsWorkflowCard,
  UvMaintenanceOpsWorkflowTable,
  UvMaintenanceOpsWorkflowForm,
  UvMaintenanceOpsWorkflowWidget,
  UvMaintenanceOpsAutomationPanel,
  UvMaintenanceOpsAutomationCard,
  UvMaintenanceOpsAutomationTable,
  UvMaintenanceOpsAutomationForm,
  UvMaintenanceOpsAutomationWidget,
  UvEnergyOpsOverviewPanel,
  UvEnergyOpsOverviewCard,
  UvEnergyOpsOverviewTable,
  UvEnergyOpsOverviewForm,
  UvEnergyOpsOverviewWidget,
  UvEnergyOpsWorkspacePanel,
  UvEnergyOpsWorkspaceCard,
  UvEnergyOpsWorkspaceTable,
  UvEnergyOpsWorkspaceForm,
  UvEnergyOpsWorkspaceWidget,
  UvEnergyOpsPlannerPanel,
  UvEnergyOpsPlannerCard,
  UvEnergyOpsPlannerTable,
  UvEnergyOpsPlannerForm,
  UvEnergyOpsPlannerWidget,
  UvEnergyOpsMonitorPanel,
  UvEnergyOpsMonitorCard,
  UvEnergyOpsMonitorTable,
  UvEnergyOpsMonitorForm,
  UvEnergyOpsMonitorWidget,
  UvEnergyOpsExplorerPanel,
  UvEnergyOpsExplorerCard,
  UvEnergyOpsExplorerTable,
  UvEnergyOpsExplorerForm,
  UvEnergyOpsExplorerWidget,
  UvEnergyOpsManagerPanel,
  UvEnergyOpsManagerCard,
  UvEnergyOpsManagerTable,
  UvEnergyOpsManagerForm,
  UvEnergyOpsManagerWidget,
  UvEnergyOpsConsolePanel,
  UvEnergyOpsConsoleCard,
  UvEnergyOpsConsoleTable,
  UvEnergyOpsConsoleForm,
  UvEnergyOpsConsoleWidget,
  UvEnergyOpsInsightsPanel,
  UvEnergyOpsInsightsCard,
  UvEnergyOpsInsightsTable,
  UvEnergyOpsInsightsForm,
  UvEnergyOpsInsightsWidget,
  UvEnergyOpsWorkflowPanel,
  UvEnergyOpsWorkflowCard,
  UvEnergyOpsWorkflowTable,
  UvEnergyOpsWorkflowForm,
  UvEnergyOpsWorkflowWidget,
  UvEnergyOpsAutomationPanel,
  UvEnergyOpsAutomationCard,
  UvEnergyOpsAutomationTable,
  UvEnergyOpsAutomationForm,
  UvEnergyOpsAutomationWidget,
  UvUtilitiesOpsOverviewPanel,
  UvUtilitiesOpsOverviewCard,
  UvUtilitiesOpsOverviewTable,
  UvUtilitiesOpsOverviewForm,
  UvUtilitiesOpsOverviewWidget,
  UvUtilitiesOpsWorkspacePanel,
  UvUtilitiesOpsWorkspaceCard,
  UvUtilitiesOpsWorkspaceTable,
  UvUtilitiesOpsWorkspaceForm,
  UvUtilitiesOpsWorkspaceWidget,
  UvUtilitiesOpsPlannerPanel,
  UvUtilitiesOpsPlannerCard,
  UvUtilitiesOpsPlannerTable,
  UvUtilitiesOpsPlannerForm,
  UvUtilitiesOpsPlannerWidget,
  UvUtilitiesOpsMonitorPanel,
  UvUtilitiesOpsMonitorCard,
  UvUtilitiesOpsMonitorTable,
  UvUtilitiesOpsMonitorForm,
  UvUtilitiesOpsMonitorWidget,
  UvUtilitiesOpsExplorerPanel,
  UvUtilitiesOpsExplorerCard,
  UvUtilitiesOpsExplorerTable,
  UvUtilitiesOpsExplorerForm,
  UvUtilitiesOpsExplorerWidget,
  UvUtilitiesOpsManagerPanel,
  UvUtilitiesOpsManagerCard,
  UvUtilitiesOpsManagerTable,
  UvUtilitiesOpsManagerForm,
  UvUtilitiesOpsManagerWidget,
  UvUtilitiesOpsConsolePanel,
  UvUtilitiesOpsConsoleCard,
  UvUtilitiesOpsConsoleTable,
  UvUtilitiesOpsConsoleForm,
  UvUtilitiesOpsConsoleWidget,
  UvUtilitiesOpsInsightsPanel,
  UvUtilitiesOpsInsightsCard,
  UvUtilitiesOpsInsightsTable,
  UvUtilitiesOpsInsightsForm,
  UvUtilitiesOpsInsightsWidget,
  UvUtilitiesOpsWorkflowPanel,
  UvUtilitiesOpsWorkflowCard,
  UvUtilitiesOpsWorkflowTable,
  UvUtilitiesOpsWorkflowForm,
  UvUtilitiesOpsWorkflowWidget,
  UvUtilitiesOpsAutomationPanel,
  UvUtilitiesOpsAutomationCard,
  UvUtilitiesOpsAutomationTable,
  UvUtilitiesOpsAutomationForm,
  UvUtilitiesOpsAutomationWidget,
  UvConstructionOpsOverviewPanel,
  UvConstructionOpsOverviewCard,
  UvConstructionOpsOverviewTable,
  UvConstructionOpsOverviewForm,
  UvConstructionOpsOverviewWidget,
  UvConstructionOpsWorkspacePanel,
  UvConstructionOpsWorkspaceCard,
  UvConstructionOpsWorkspaceTable,
  UvConstructionOpsWorkspaceForm,
  UvConstructionOpsWorkspaceWidget,
  UvConstructionOpsPlannerPanel,
  UvConstructionOpsPlannerCard,
  UvConstructionOpsPlannerTable,
  UvConstructionOpsPlannerForm,
  UvConstructionOpsPlannerWidget,
  UvConstructionOpsMonitorPanel,
  UvConstructionOpsMonitorCard,
  UvConstructionOpsMonitorTable,
  UvConstructionOpsMonitorForm,
  UvConstructionOpsMonitorWidget,
  UvConstructionOpsExplorerPanel,
  UvConstructionOpsExplorerCard,
  UvConstructionOpsExplorerTable,
  UvConstructionOpsExplorerForm,
  UvConstructionOpsExplorerWidget,
  UvConstructionOpsManagerPanel,
  UvConstructionOpsManagerCard,
  UvConstructionOpsManagerTable,
  UvConstructionOpsManagerForm,
  UvConstructionOpsManagerWidget,
  UvConstructionOpsConsolePanel,
  UvConstructionOpsConsoleCard,
  UvConstructionOpsConsoleTable,
  UvConstructionOpsConsoleForm,
  UvConstructionOpsConsoleWidget,
  UvConstructionOpsInsightsPanel,
  UvConstructionOpsInsightsCard,
  UvConstructionOpsInsightsTable,
  UvConstructionOpsInsightsForm,
  UvConstructionOpsInsightsWidget,
  UvConstructionOpsWorkflowPanel,
  UvConstructionOpsWorkflowCard,
  UvConstructionOpsWorkflowTable,
  UvConstructionOpsWorkflowForm,
  UvConstructionOpsWorkflowWidget,
  UvConstructionOpsAutomationPanel,
  UvConstructionOpsAutomationCard,
  UvConstructionOpsAutomationTable,
  UvConstructionOpsAutomationForm,
  UvConstructionOpsAutomationWidget,
  UvPropertyOpsOverviewPanel,
  UvPropertyOpsOverviewCard,
  UvPropertyOpsOverviewTable,
  UvPropertyOpsOverviewForm,
  UvPropertyOpsOverviewWidget,
  UvPropertyOpsWorkspacePanel,
  UvPropertyOpsWorkspaceCard,
  UvPropertyOpsWorkspaceTable,
  UvPropertyOpsWorkspaceForm,
  UvPropertyOpsWorkspaceWidget,
  UvPropertyOpsPlannerPanel,
  UvPropertyOpsPlannerCard,
  UvPropertyOpsPlannerTable,
  UvPropertyOpsPlannerForm,
  UvPropertyOpsPlannerWidget,
  UvPropertyOpsMonitorPanel,
  UvPropertyOpsMonitorCard,
  UvPropertyOpsMonitorTable,
  UvPropertyOpsMonitorForm,
  UvPropertyOpsMonitorWidget,
  UvPropertyOpsExplorerPanel,
  UvPropertyOpsExplorerCard,
  UvPropertyOpsExplorerTable,
  UvPropertyOpsExplorerForm,
  UvPropertyOpsExplorerWidget,
  UvPropertyOpsManagerPanel,
  UvPropertyOpsManagerCard,
  UvPropertyOpsManagerTable,
  UvPropertyOpsManagerForm,
  UvPropertyOpsManagerWidget,
  UvPropertyOpsConsolePanel,
  UvPropertyOpsConsoleCard,
  UvPropertyOpsConsoleTable,
  UvPropertyOpsConsoleForm,
  UvPropertyOpsConsoleWidget,
  UvPropertyOpsInsightsPanel,
  UvPropertyOpsInsightsCard,
  UvPropertyOpsInsightsTable,
  UvPropertyOpsInsightsForm,
  UvPropertyOpsInsightsWidget,
  UvPropertyOpsWorkflowPanel,
  UvPropertyOpsWorkflowCard,
  UvPropertyOpsWorkflowTable,
  UvPropertyOpsWorkflowForm,
  UvPropertyOpsWorkflowWidget,
  UvPropertyOpsAutomationPanel,
  UvPropertyOpsAutomationCard,
  UvPropertyOpsAutomationTable,
  UvPropertyOpsAutomationForm,
  UvPropertyOpsAutomationWidget,
  UvHospitalityOpsOverviewPanel,
  UvHospitalityOpsOverviewCard,
  UvHospitalityOpsOverviewTable,
  UvHospitalityOpsOverviewForm,
  UvHospitalityOpsOverviewWidget,
  UvHospitalityOpsWorkspacePanel,
  UvHospitalityOpsWorkspaceCard,
  UvHospitalityOpsWorkspaceTable,
  UvHospitalityOpsWorkspaceForm,
  UvHospitalityOpsWorkspaceWidget,
  UvHospitalityOpsPlannerPanel,
  UvHospitalityOpsPlannerCard,
  UvHospitalityOpsPlannerTable,
  UvHospitalityOpsPlannerForm,
  UvHospitalityOpsPlannerWidget,
  UvHospitalityOpsMonitorPanel,
  UvHospitalityOpsMonitorCard,
  UvHospitalityOpsMonitorTable,
  UvHospitalityOpsMonitorForm,
  UvHospitalityOpsMonitorWidget,
  UvHospitalityOpsExplorerPanel,
  UvHospitalityOpsExplorerCard,
  UvHospitalityOpsExplorerTable,
  UvHospitalityOpsExplorerForm,
  UvHospitalityOpsExplorerWidget,
  UvHospitalityOpsManagerPanel,
  UvHospitalityOpsManagerCard,
  UvHospitalityOpsManagerTable,
  UvHospitalityOpsManagerForm,
  UvHospitalityOpsManagerWidget,
  UvHospitalityOpsConsolePanel,
  UvHospitalityOpsConsoleCard,
  UvHospitalityOpsConsoleTable,
  UvHospitalityOpsConsoleForm,
  UvHospitalityOpsConsoleWidget,
  UvHospitalityOpsInsightsPanel,
  UvHospitalityOpsInsightsCard,
  UvHospitalityOpsInsightsTable,
  UvHospitalityOpsInsightsForm,
  UvHospitalityOpsInsightsWidget,
  UvHospitalityOpsWorkflowPanel,
  UvHospitalityOpsWorkflowCard,
  UvHospitalityOpsWorkflowTable,
  UvHospitalityOpsWorkflowForm,
  UvHospitalityOpsWorkflowWidget,
  UvHospitalityOpsAutomationPanel,
  UvHospitalityOpsAutomationCard,
  UvHospitalityOpsAutomationTable,
  UvHospitalityOpsAutomationForm,
  UvHospitalityOpsAutomationWidget,
  UvTravelOpsOverviewPanel,
  UvTravelOpsOverviewCard,
  UvTravelOpsOverviewTable,
  UvTravelOpsOverviewForm,
  UvTravelOpsOverviewWidget,
  UvTravelOpsWorkspacePanel,
  UvTravelOpsWorkspaceCard,
  UvTravelOpsWorkspaceTable,
  UvTravelOpsWorkspaceForm,
  UvTravelOpsWorkspaceWidget,
  UvTravelOpsPlannerPanel,
  UvTravelOpsPlannerCard,
  UvTravelOpsPlannerTable,
  UvTravelOpsPlannerForm,
  UvTravelOpsPlannerWidget,
  UvTravelOpsMonitorPanel,
  UvTravelOpsMonitorCard,
  UvTravelOpsMonitorTable,
  UvTravelOpsMonitorForm,
  UvTravelOpsMonitorWidget,
  UvTravelOpsExplorerPanel,
  UvTravelOpsExplorerCard,
  UvTravelOpsExplorerTable,
  UvTravelOpsExplorerForm,
  UvTravelOpsExplorerWidget,
  UvTravelOpsManagerPanel,
  UvTravelOpsManagerCard,
  UvTravelOpsManagerTable,
  UvTravelOpsManagerForm,
  UvTravelOpsManagerWidget,
  UvTravelOpsConsolePanel,
  UvTravelOpsConsoleCard,
  UvTravelOpsConsoleTable,
  UvTravelOpsConsoleForm,
  UvTravelOpsConsoleWidget,
  UvTravelOpsInsightsPanel,
  UvTravelOpsInsightsCard,
  UvTravelOpsInsightsTable,
  UvTravelOpsInsightsForm,
  UvTravelOpsInsightsWidget,
  UvTravelOpsWorkflowPanel,
  UvTravelOpsWorkflowCard,
  UvTravelOpsWorkflowTable,
  UvTravelOpsWorkflowForm,
  UvTravelOpsWorkflowWidget,
  UvTravelOpsAutomationPanel,
  UvTravelOpsAutomationCard,
  UvTravelOpsAutomationTable,
  UvTravelOpsAutomationForm,
  UvTravelOpsAutomationWidget,
  UvEventOpsOverviewPanel,
  UvEventOpsOverviewCard,
  UvEventOpsOverviewTable,
  UvEventOpsOverviewForm,
  UvEventOpsOverviewWidget,
  UvEventOpsWorkspacePanel,
  UvEventOpsWorkspaceCard,
  UvEventOpsWorkspaceTable,
  UvEventOpsWorkspaceForm,
  UvEventOpsWorkspaceWidget,
  UvEventOpsPlannerPanel,
  UvEventOpsPlannerCard,
  UvEventOpsPlannerTable,
  UvEventOpsPlannerForm,
  UvEventOpsPlannerWidget,
  UvEventOpsMonitorPanel,
  UvEventOpsMonitorCard,
  UvEventOpsMonitorTable,
  UvEventOpsMonitorForm,
  UvEventOpsMonitorWidget,
  UvEventOpsExplorerPanel,
  UvEventOpsExplorerCard,
  UvEventOpsExplorerTable,
  UvEventOpsExplorerForm,
  UvEventOpsExplorerWidget,
  UvEventOpsManagerPanel,
  UvEventOpsManagerCard,
  UvEventOpsManagerTable,
  UvEventOpsManagerForm,
  UvEventOpsManagerWidget,
  UvEventOpsConsolePanel,
  UvEventOpsConsoleCard,
  UvEventOpsConsoleTable,
  UvEventOpsConsoleForm,
  UvEventOpsConsoleWidget,
  UvEventOpsInsightsPanel,
  UvEventOpsInsightsCard,
  UvEventOpsInsightsTable,
  UvEventOpsInsightsForm,
  UvEventOpsInsightsWidget,
  UvEventOpsWorkflowPanel,
  UvEventOpsWorkflowCard,
  UvEventOpsWorkflowTable,
  UvEventOpsWorkflowForm,
  UvEventOpsWorkflowWidget,
  UvEventOpsAutomationPanel,
  UvEventOpsAutomationCard,
  UvEventOpsAutomationTable,
  UvEventOpsAutomationForm,
  UvEventOpsAutomationWidget,
  UvMediaOpsOverviewPanel,
  UvMediaOpsOverviewCard,
  UvMediaOpsOverviewTable,
  UvMediaOpsOverviewForm,
  UvMediaOpsOverviewWidget,
  UvMediaOpsWorkspacePanel,
  UvMediaOpsWorkspaceCard,
  UvMediaOpsWorkspaceTable,
  UvMediaOpsWorkspaceForm,
  UvMediaOpsWorkspaceWidget,
  UvMediaOpsPlannerPanel,
  UvMediaOpsPlannerCard,
  UvMediaOpsPlannerTable,
  UvMediaOpsPlannerForm,
  UvMediaOpsPlannerWidget,
  UvMediaOpsMonitorPanel,
  UvMediaOpsMonitorCard,
  UvMediaOpsMonitorTable,
  UvMediaOpsMonitorForm,
  UvMediaOpsMonitorWidget,
  UvMediaOpsExplorerPanel,
  UvMediaOpsExplorerCard,
  UvMediaOpsExplorerTable,
  UvMediaOpsExplorerForm,
  UvMediaOpsExplorerWidget,
  UvMediaOpsManagerPanel,
  UvMediaOpsManagerCard,
  UvMediaOpsManagerTable,
  UvMediaOpsManagerForm,
  UvMediaOpsManagerWidget,
  UvMediaOpsConsolePanel,
  UvMediaOpsConsoleCard,
  UvMediaOpsConsoleTable,
  UvMediaOpsConsoleForm,
  UvMediaOpsConsoleWidget,
  UvMediaOpsInsightsPanel,
  UvMediaOpsInsightsCard,
  UvMediaOpsInsightsTable,
  UvMediaOpsInsightsForm,
  UvMediaOpsInsightsWidget,
  UvMediaOpsWorkflowPanel,
  UvMediaOpsWorkflowCard,
  UvMediaOpsWorkflowTable,
  UvMediaOpsWorkflowForm,
  UvMediaOpsWorkflowWidget,
  UvMediaOpsAutomationPanel,
  UvMediaOpsAutomationCard,
  UvMediaOpsAutomationTable,
  UvMediaOpsAutomationForm,
  UvMediaOpsAutomationWidget,
  UvPublishingOpsOverviewPanel,
  UvPublishingOpsOverviewCard,
  UvPublishingOpsOverviewTable,
  UvPublishingOpsOverviewForm,
  UvPublishingOpsOverviewWidget,
  UvPublishingOpsWorkspacePanel,
  UvPublishingOpsWorkspaceCard,
  UvPublishingOpsWorkspaceTable,
  UvPublishingOpsWorkspaceForm,
  UvPublishingOpsWorkspaceWidget,
  UvPublishingOpsPlannerPanel,
  UvPublishingOpsPlannerCard,
  UvPublishingOpsPlannerTable,
  UvPublishingOpsPlannerForm,
  UvPublishingOpsPlannerWidget,
  UvPublishingOpsMonitorPanel,
  UvPublishingOpsMonitorCard,
  UvPublishingOpsMonitorTable,
  UvPublishingOpsMonitorForm,
  UvPublishingOpsMonitorWidget,
  UvPublishingOpsExplorerPanel,
  UvPublishingOpsExplorerCard,
  UvPublishingOpsExplorerTable,
  UvPublishingOpsExplorerForm,
  UvPublishingOpsExplorerWidget,
  UvPublishingOpsManagerPanel,
  UvPublishingOpsManagerCard,
  UvPublishingOpsManagerTable,
  UvPublishingOpsManagerForm,
  UvPublishingOpsManagerWidget,
  UvPublishingOpsConsolePanel,
  UvPublishingOpsConsoleCard,
  UvPublishingOpsConsoleTable,
  UvPublishingOpsConsoleForm,
  UvPublishingOpsConsoleWidget,
  UvPublishingOpsInsightsPanel,
  UvPublishingOpsInsightsCard,
  UvPublishingOpsInsightsTable,
  UvPublishingOpsInsightsForm,
  UvPublishingOpsInsightsWidget,
  UvPublishingOpsWorkflowPanel,
  UvPublishingOpsWorkflowCard,
  UvPublishingOpsWorkflowTable,
  UvPublishingOpsWorkflowForm,
  UvPublishingOpsWorkflowWidget,
  UvPublishingOpsAutomationPanel,
  UvPublishingOpsAutomationCard,
  UvPublishingOpsAutomationTable,
  UvPublishingOpsAutomationForm,
  UvPublishingOpsAutomationWidget,
  UvGamingOpsOverviewPanel,
  UvGamingOpsOverviewCard,
  UvGamingOpsOverviewTable,
  UvGamingOpsOverviewForm,
  UvGamingOpsOverviewWidget,
  UvGamingOpsWorkspacePanel,
  UvGamingOpsWorkspaceCard,
  UvGamingOpsWorkspaceTable,
  UvGamingOpsWorkspaceForm,
  UvGamingOpsWorkspaceWidget,
  UvGamingOpsPlannerPanel,
  UvGamingOpsPlannerCard,
  UvGamingOpsPlannerTable,
  UvGamingOpsPlannerForm,
  UvGamingOpsPlannerWidget,
  UvGamingOpsMonitorPanel,
  UvGamingOpsMonitorCard,
  UvGamingOpsMonitorTable,
  UvGamingOpsMonitorForm,
  UvGamingOpsMonitorWidget,
  UvGamingOpsExplorerPanel,
  UvGamingOpsExplorerCard,
  UvGamingOpsExplorerTable,
  UvGamingOpsExplorerForm,
  UvGamingOpsExplorerWidget,
  UvGamingOpsManagerPanel,
  UvGamingOpsManagerCard,
  UvGamingOpsManagerTable,
  UvGamingOpsManagerForm,
  UvGamingOpsManagerWidget,
  UvGamingOpsConsolePanel,
  UvGamingOpsConsoleCard,
  UvGamingOpsConsoleTable,
  UvGamingOpsConsoleForm,
  UvGamingOpsConsoleWidget,
  UvGamingOpsInsightsPanel,
  UvGamingOpsInsightsCard,
  UvGamingOpsInsightsTable,
  UvGamingOpsInsightsForm,
  UvGamingOpsInsightsWidget,
  UvGamingOpsWorkflowPanel,
  UvGamingOpsWorkflowCard,
  UvGamingOpsWorkflowTable,
  UvGamingOpsWorkflowForm,
  UvGamingOpsWorkflowWidget,
  UvGamingOpsAutomationPanel,
  UvGamingOpsAutomationCard,
  UvGamingOpsAutomationTable,
  UvGamingOpsAutomationForm,
  UvGamingOpsAutomationWidget,
  UvSportsOpsOverviewPanel,
  UvSportsOpsOverviewCard,
  UvSportsOpsOverviewTable,
  UvSportsOpsOverviewForm,
  UvSportsOpsOverviewWidget,
  UvSportsOpsWorkspacePanel,
  UvSportsOpsWorkspaceCard,
  UvSportsOpsWorkspaceTable,
  UvSportsOpsWorkspaceForm,
  UvSportsOpsWorkspaceWidget,
  UvSportsOpsPlannerPanel,
  UvSportsOpsPlannerCard,
  UvSportsOpsPlannerTable,
  UvSportsOpsPlannerForm,
  UvSportsOpsPlannerWidget,
  UvSportsOpsMonitorPanel,
  UvSportsOpsMonitorCard,
  UvSportsOpsMonitorTable,
  UvSportsOpsMonitorForm,
  UvSportsOpsMonitorWidget,
  UvSportsOpsExplorerPanel,
  UvSportsOpsExplorerCard,
  UvSportsOpsExplorerTable,
  UvSportsOpsExplorerForm,
  UvSportsOpsExplorerWidget,
  UvSportsOpsManagerPanel,
  UvSportsOpsManagerCard,
  UvSportsOpsManagerTable,
  UvSportsOpsManagerForm,
  UvSportsOpsManagerWidget,
  UvSportsOpsConsolePanel,
  UvSportsOpsConsoleCard,
  UvSportsOpsConsoleTable,
  UvSportsOpsConsoleForm,
  UvSportsOpsConsoleWidget,
  UvSportsOpsInsightsPanel,
  UvSportsOpsInsightsCard,
  UvSportsOpsInsightsTable,
  UvSportsOpsInsightsForm,
  UvSportsOpsInsightsWidget,
  UvSportsOpsWorkflowPanel,
  UvSportsOpsWorkflowCard,
  UvSportsOpsWorkflowTable,
  UvSportsOpsWorkflowForm,
  UvSportsOpsWorkflowWidget,
  UvSportsOpsAutomationPanel,
  UvSportsOpsAutomationCard,
  UvSportsOpsAutomationTable,
  UvSportsOpsAutomationForm,
  UvSportsOpsAutomationWidget,
  UvCommunityOpsOverviewPanel,
  UvCommunityOpsOverviewCard,
  UvCommunityOpsOverviewTable,
  UvCommunityOpsOverviewForm,
  UvCommunityOpsOverviewWidget,
  UvCommunityOpsWorkspacePanel,
  UvCommunityOpsWorkspaceCard,
  UvCommunityOpsWorkspaceTable,
  UvCommunityOpsWorkspaceForm,
  UvCommunityOpsWorkspaceWidget,
  UvCommunityOpsPlannerPanel,
  UvCommunityOpsPlannerCard,
  UvCommunityOpsPlannerTable,
  UvCommunityOpsPlannerForm,
  UvCommunityOpsPlannerWidget,
  UvCommunityOpsMonitorPanel,
  UvCommunityOpsMonitorCard,
  UvCommunityOpsMonitorTable,
  UvCommunityOpsMonitorForm,
  UvCommunityOpsMonitorWidget,
  UvCommunityOpsExplorerPanel,
  UvCommunityOpsExplorerCard,
  UvCommunityOpsExplorerTable,
  UvCommunityOpsExplorerForm,
  UvCommunityOpsExplorerWidget,
  UvCommunityOpsManagerPanel,
  UvCommunityOpsManagerCard,
  UvCommunityOpsManagerTable,
  UvCommunityOpsManagerForm,
  UvCommunityOpsManagerWidget,
  UvCommunityOpsConsolePanel,
  UvCommunityOpsConsoleCard,
  UvCommunityOpsConsoleTable,
  UvCommunityOpsConsoleForm,
  UvCommunityOpsConsoleWidget,
  UvCommunityOpsInsightsPanel,
  UvCommunityOpsInsightsCard,
  UvCommunityOpsInsightsTable,
  UvCommunityOpsInsightsForm,
  UvCommunityOpsInsightsWidget,
  UvCommunityOpsWorkflowPanel,
  UvCommunityOpsWorkflowCard,
  UvCommunityOpsWorkflowTable,
  UvCommunityOpsWorkflowForm,
  UvCommunityOpsWorkflowWidget,
  UvCommunityOpsAutomationPanel,
  UvCommunityOpsAutomationCard,
  UvCommunityOpsAutomationTable,
  UvCommunityOpsAutomationForm,
  UvCommunityOpsAutomationWidget,
  UvGovernmentOpsOverviewPanel,
  UvGovernmentOpsOverviewCard,
  UvGovernmentOpsOverviewTable,
  UvGovernmentOpsOverviewForm,
  UvGovernmentOpsOverviewWidget,
  UvGovernmentOpsWorkspacePanel,
  UvGovernmentOpsWorkspaceCard,
  UvGovernmentOpsWorkspaceTable,
  UvGovernmentOpsWorkspaceForm,
  UvGovernmentOpsWorkspaceWidget,
  UvGovernmentOpsPlannerPanel,
  UvGovernmentOpsPlannerCard,
  UvGovernmentOpsPlannerTable,
  UvGovernmentOpsPlannerForm,
  UvGovernmentOpsPlannerWidget,
  UvGovernmentOpsMonitorPanel,
  UvGovernmentOpsMonitorCard,
  UvGovernmentOpsMonitorTable,
  UvGovernmentOpsMonitorForm,
  UvGovernmentOpsMonitorWidget,
  UvGovernmentOpsExplorerPanel,
  UvGovernmentOpsExplorerCard,
  UvGovernmentOpsExplorerTable,
  UvGovernmentOpsExplorerForm,
  UvGovernmentOpsExplorerWidget,
  UvGovernmentOpsManagerPanel,
  UvGovernmentOpsManagerCard,
  UvGovernmentOpsManagerTable,
  UvGovernmentOpsManagerForm,
  UvGovernmentOpsManagerWidget,
  UvGovernmentOpsConsolePanel,
  UvGovernmentOpsConsoleCard,
  UvGovernmentOpsConsoleTable,
  UvGovernmentOpsConsoleForm,
  UvGovernmentOpsConsoleWidget,
  UvGovernmentOpsInsightsPanel,
  UvGovernmentOpsInsightsCard,
  UvGovernmentOpsInsightsTable,
  UvGovernmentOpsInsightsForm,
  UvGovernmentOpsInsightsWidget,
  UvGovernmentOpsWorkflowPanel,
  UvGovernmentOpsWorkflowCard,
  UvGovernmentOpsWorkflowTable,
  UvGovernmentOpsWorkflowForm,
  UvGovernmentOpsWorkflowWidget,
  UvGovernmentOpsAutomationPanel,
  UvGovernmentOpsAutomationCard,
  UvGovernmentOpsAutomationTable,
  UvGovernmentOpsAutomationForm,
  UvGovernmentOpsAutomationWidget,
  UvLegalOpsOverviewPanel,
  UvLegalOpsOverviewCard,
  UvLegalOpsOverviewTable,
  UvLegalOpsOverviewForm,
  UvLegalOpsOverviewWidget,
  UvLegalOpsWorkspacePanel,
  UvLegalOpsWorkspaceCard,
  UvLegalOpsWorkspaceTable,
  UvLegalOpsWorkspaceForm,
  UvLegalOpsWorkspaceWidget,
  UvLegalOpsPlannerPanel,
  UvLegalOpsPlannerCard,
  UvLegalOpsPlannerTable,
  UvLegalOpsPlannerForm,
  UvLegalOpsPlannerWidget,
  UvLegalOpsMonitorPanel,
  UvLegalOpsMonitorCard,
  UvLegalOpsMonitorTable,
  UvLegalOpsMonitorForm,
  UvLegalOpsMonitorWidget,
  UvLegalOpsExplorerPanel,
  UvLegalOpsExplorerCard,
  UvLegalOpsExplorerTable,
  UvLegalOpsExplorerForm,
  UvLegalOpsExplorerWidget,
  UvLegalOpsManagerPanel,
  UvLegalOpsManagerCard,
  UvLegalOpsManagerTable,
  UvLegalOpsManagerForm,
  UvLegalOpsManagerWidget,
  UvLegalOpsConsolePanel,
  UvLegalOpsConsoleCard,
  UvLegalOpsConsoleTable,
  UvLegalOpsConsoleForm,
  UvLegalOpsConsoleWidget,
  UvLegalOpsInsightsPanel,
  UvLegalOpsInsightsCard,
  UvLegalOpsInsightsTable,
  UvLegalOpsInsightsForm,
  UvLegalOpsInsightsWidget,
  UvLegalOpsWorkflowPanel,
  UvLegalOpsWorkflowCard,
  UvLegalOpsWorkflowTable,
  UvLegalOpsWorkflowForm,
  UvLegalOpsWorkflowWidget,
  UvLegalOpsAutomationPanel,
  UvLegalOpsAutomationCard,
  UvLegalOpsAutomationTable,
  UvLegalOpsAutomationForm,
  UvLegalOpsAutomationWidget,
  UvComplianceOpsOverviewPanel,
  UvComplianceOpsOverviewCard,
  UvComplianceOpsOverviewTable,
  UvComplianceOpsOverviewForm,
  UvComplianceOpsOverviewWidget,
  UvComplianceOpsWorkspacePanel,
  UvComplianceOpsWorkspaceCard,
  UvComplianceOpsWorkspaceTable,
  UvComplianceOpsWorkspaceForm,
  UvComplianceOpsWorkspaceWidget,
  UvComplianceOpsPlannerPanel,
  UvComplianceOpsPlannerCard,
  UvComplianceOpsPlannerTable,
  UvComplianceOpsPlannerForm,
  UvComplianceOpsPlannerWidget,
  UvComplianceOpsMonitorPanel,
  UvComplianceOpsMonitorCard,
  UvComplianceOpsMonitorTable,
  UvComplianceOpsMonitorForm,
  UvComplianceOpsMonitorWidget,
  UvComplianceOpsExplorerPanel,
  UvComplianceOpsExplorerCard,
  UvComplianceOpsExplorerTable,
  UvComplianceOpsExplorerForm,
  UvComplianceOpsExplorerWidget,
  UvComplianceOpsManagerPanel,
  UvComplianceOpsManagerCard,
  UvComplianceOpsManagerTable,
  UvComplianceOpsManagerForm,
  UvComplianceOpsManagerWidget,
  UvComplianceOpsConsolePanel,
  UvComplianceOpsConsoleCard,
  UvComplianceOpsConsoleTable,
  UvComplianceOpsConsoleForm,
  UvComplianceOpsConsoleWidget,
  UvComplianceOpsInsightsPanel,
  UvComplianceOpsInsightsCard,
  UvComplianceOpsInsightsTable,
  UvComplianceOpsInsightsForm,
  UvComplianceOpsInsightsWidget,
  UvComplianceOpsWorkflowPanel,
  UvComplianceOpsWorkflowCard,
  UvComplianceOpsWorkflowTable,
  UvComplianceOpsWorkflowForm,
  UvComplianceOpsWorkflowWidget,
  UvComplianceOpsAutomationPanel,
  UvComplianceOpsAutomationCard,
  UvComplianceOpsAutomationTable,
  UvComplianceOpsAutomationForm,
  UvComplianceOpsAutomationWidget,
  UvSecurityOpsOverviewPanel,
  UvSecurityOpsOverviewCard,
  UvSecurityOpsOverviewTable,
  UvSecurityOpsOverviewForm,
  UvSecurityOpsOverviewWidget,
  UvSecurityOpsWorkspacePanel,
  UvSecurityOpsWorkspaceCard,
  UvSecurityOpsWorkspaceTable,
  UvSecurityOpsWorkspaceForm,
  UvSecurityOpsWorkspaceWidget,
  UvSecurityOpsPlannerPanel,
  UvSecurityOpsPlannerCard,
  UvSecurityOpsPlannerTable,
  UvSecurityOpsPlannerForm,
  UvSecurityOpsPlannerWidget,
  UvSecurityOpsMonitorPanel,
  UvSecurityOpsMonitorCard,
  UvSecurityOpsMonitorTable,
  UvSecurityOpsMonitorForm,
  UvSecurityOpsMonitorWidget,
  UvSecurityOpsExplorerPanel,
  UvSecurityOpsExplorerCard,
  UvSecurityOpsExplorerTable,
  UvSecurityOpsExplorerForm,
  UvSecurityOpsExplorerWidget,
  UvSecurityOpsManagerPanel,
  UvSecurityOpsManagerCard,
  UvSecurityOpsManagerTable,
  UvSecurityOpsManagerForm,
  UvSecurityOpsManagerWidget,
  UvSecurityOpsConsolePanel,
  UvSecurityOpsConsoleCard,
  UvSecurityOpsConsoleTable,
  UvSecurityOpsConsoleForm,
  UvSecurityOpsConsoleWidget,
  UvSecurityOpsInsightsPanel,
  UvSecurityOpsInsightsCard,
  UvSecurityOpsInsightsTable,
  UvSecurityOpsInsightsForm,
  UvSecurityOpsInsightsWidget,
  UvSecurityOpsWorkflowPanel,
  UvSecurityOpsWorkflowCard,
  UvSecurityOpsWorkflowTable,
  UvSecurityOpsWorkflowForm,
  UvSecurityOpsWorkflowWidget,
  UvSecurityOpsAutomationPanel,
  UvSecurityOpsAutomationCard,
  UvSecurityOpsAutomationTable,
  UvSecurityOpsAutomationForm,
  UvSecurityOpsAutomationWidget,
  UvDevOpsOverviewPanel,
  UvDevOpsOverviewCard,
  UvDevOpsOverviewTable,
  UvDevOpsOverviewForm,
  UvDevOpsOverviewWidget,
  UvDevOpsWorkspacePanel,
  UvDevOpsWorkspaceCard,
  UvDevOpsWorkspaceTable,
  UvDevOpsWorkspaceForm,
  UvDevOpsWorkspaceWidget,
  UvDevOpsPlannerPanel,
  UvDevOpsPlannerCard,
  UvDevOpsPlannerTable,
  UvDevOpsPlannerForm,
  UvDevOpsPlannerWidget,
  UvDevOpsMonitorPanel,
  UvDevOpsMonitorCard,
  UvDevOpsMonitorTable,
  UvDevOpsMonitorForm,
  UvDevOpsMonitorWidget,
  UvDevOpsExplorerPanel,
  UvDevOpsExplorerCard,
  UvDevOpsExplorerTable,
  UvDevOpsExplorerForm,
  UvDevOpsExplorerWidget,
  UvDevOpsManagerPanel,
  UvDevOpsManagerCard,
  UvDevOpsManagerTable,
  UvDevOpsManagerForm,
  UvDevOpsManagerWidget,
  UvDevOpsConsolePanel,
  UvDevOpsConsoleCard,
  UvDevOpsConsoleTable,
  UvDevOpsConsoleForm,
  UvDevOpsConsoleWidget,
  UvDevOpsInsightsPanel,
  UvDevOpsInsightsCard,
  UvDevOpsInsightsTable,
  UvDevOpsInsightsForm,
  UvDevOpsInsightsWidget,
  UvDevOpsWorkflowPanel,
  UvDevOpsWorkflowCard,
  UvDevOpsWorkflowTable,
  UvDevOpsWorkflowForm,
  UvDevOpsWorkflowWidget,
  UvDevOpsAutomationPanel,
  UvDevOpsAutomationCard,
  UvDevOpsAutomationTable,
  UvDevOpsAutomationForm,
  UvDevOpsAutomationWidget,
  UvDataOpsOverviewPanel,
  UvDataOpsOverviewCard,
  UvDataOpsOverviewTable,
  UvDataOpsOverviewForm,
  UvDataOpsOverviewWidget,
  UvDataOpsWorkspacePanel,
  UvDataOpsWorkspaceCard,
  UvDataOpsWorkspaceTable,
  UvDataOpsWorkspaceForm,
  UvDataOpsWorkspaceWidget,
  UvDataOpsPlannerPanel,
  UvDataOpsPlannerCard,
  UvDataOpsPlannerTable,
  UvDataOpsPlannerForm,
  UvDataOpsPlannerWidget,
  UvDataOpsMonitorPanel,
  UvDataOpsMonitorCard,
  UvDataOpsMonitorTable,
  UvDataOpsMonitorForm,
  UvDataOpsMonitorWidget,
  UvDataOpsExplorerPanel,
  UvDataOpsExplorerCard,
  UvDataOpsExplorerTable,
  UvDataOpsExplorerForm,
  UvDataOpsExplorerWidget,
  UvDataOpsManagerPanel,
  UvDataOpsManagerCard,
  UvDataOpsManagerTable,
  UvDataOpsManagerForm,
  UvDataOpsManagerWidget,
  UvDataOpsConsolePanel,
  UvDataOpsConsoleCard,
  UvDataOpsConsoleTable,
  UvDataOpsConsoleForm,
  UvDataOpsConsoleWidget,
  UvDataOpsInsightsPanel,
  UvDataOpsInsightsCard,
  UvDataOpsInsightsTable,
  UvDataOpsInsightsForm,
  UvDataOpsInsightsWidget,
  UvDataOpsWorkflowPanel,
  UvDataOpsWorkflowCard,
  UvDataOpsWorkflowTable,
  UvDataOpsWorkflowForm,
  UvDataOpsWorkflowWidget,
  UvDataOpsAutomationPanel,
  UvDataOpsAutomationCard,
  UvDataOpsAutomationTable,
  UvDataOpsAutomationForm,
  UvDataOpsAutomationWidget,
  UvAiOpsOverviewPanel,
  UvAiOpsOverviewCard,
  UvAiOpsOverviewTable,
  UvAiOpsOverviewForm,
  UvAiOpsOverviewWidget,
  UvAiOpsWorkspacePanel,
  UvAiOpsWorkspaceCard,
  UvAiOpsWorkspaceTable,
  UvAiOpsWorkspaceForm,
  UvAiOpsWorkspaceWidget,
  UvAiOpsPlannerPanel,
  UvAiOpsPlannerCard,
  UvAiOpsPlannerTable,
  UvAiOpsPlannerForm,
  UvAiOpsPlannerWidget,
  UvAiOpsMonitorPanel,
  UvAiOpsMonitorCard,
  UvAiOpsMonitorTable,
  UvAiOpsMonitorForm,
  UvAiOpsMonitorWidget,
  UvAiOpsExplorerPanel,
  UvAiOpsExplorerCard,
  UvAiOpsExplorerTable,
  UvAiOpsExplorerForm,
  UvAiOpsExplorerWidget,
  UvAiOpsManagerPanel,
  UvAiOpsManagerCard,
  UvAiOpsManagerTable,
  UvAiOpsManagerForm,
  UvAiOpsManagerWidget,
  UvAiOpsConsolePanel,
  UvAiOpsConsoleCard,
  UvAiOpsConsoleTable,
  UvAiOpsConsoleForm,
  UvAiOpsConsoleWidget,
  UvAiOpsInsightsPanel,
  UvAiOpsInsightsCard,
  UvAiOpsInsightsTable,
  UvAiOpsInsightsForm,
  UvAiOpsInsightsWidget,
  UvAiOpsWorkflowPanel,
  UvAiOpsWorkflowCard,
  UvAiOpsWorkflowTable,
  UvAiOpsWorkflowForm,
  UvAiOpsWorkflowWidget,
  UvAiOpsAutomationPanel,
  UvAiOpsAutomationCard,
  UvAiOpsAutomationTable,
  UvAiOpsAutomationForm,
  UvAiOpsAutomationWidget,
  UvRoboticsOpsOverviewPanel,
  UvRoboticsOpsOverviewCard,
  UvRoboticsOpsOverviewTable,
  UvRoboticsOpsOverviewForm,
  UvRoboticsOpsOverviewWidget,
  UvRoboticsOpsWorkspacePanel,
  UvRoboticsOpsWorkspaceCard,
  UvRoboticsOpsWorkspaceTable,
  UvRoboticsOpsWorkspaceForm,
  UvRoboticsOpsWorkspaceWidget,
  UvRoboticsOpsPlannerPanel,
  UvRoboticsOpsPlannerCard,
  UvRoboticsOpsPlannerTable,
  UvRoboticsOpsPlannerForm,
  UvRoboticsOpsPlannerWidget,
  UvRoboticsOpsMonitorPanel,
  UvRoboticsOpsMonitorCard,
  UvRoboticsOpsMonitorTable,
  UvRoboticsOpsMonitorForm,
  UvRoboticsOpsMonitorWidget,
  UvRoboticsOpsExplorerPanel,
  UvRoboticsOpsExplorerCard,
  UvRoboticsOpsExplorerTable,
  UvRoboticsOpsExplorerForm,
  UvRoboticsOpsExplorerWidget,
  UvRoboticsOpsManagerPanel,
  UvRoboticsOpsManagerCard,
  UvRoboticsOpsManagerTable,
  UvRoboticsOpsManagerForm,
  UvRoboticsOpsManagerWidget,
  UvRoboticsOpsConsolePanel,
  UvRoboticsOpsConsoleCard,
  UvRoboticsOpsConsoleTable,
  UvRoboticsOpsConsoleForm,
  UvRoboticsOpsConsoleWidget,
  UvRoboticsOpsInsightsPanel,
  UvRoboticsOpsInsightsCard,
  UvRoboticsOpsInsightsTable,
  UvRoboticsOpsInsightsForm,
  UvRoboticsOpsInsightsWidget,
  UvRoboticsOpsWorkflowPanel,
  UvRoboticsOpsWorkflowCard,
  UvRoboticsOpsWorkflowTable,
  UvRoboticsOpsWorkflowForm,
  UvRoboticsOpsWorkflowWidget,
  UvRoboticsOpsAutomationPanel,
  UvRoboticsOpsAutomationCard,
  UvRoboticsOpsAutomationTable,
  UvRoboticsOpsAutomationForm,
  UvRoboticsOpsAutomationWidget,
  UvIoTOpsOverviewPanel,
  UvIoTOpsOverviewCard,
  UvIoTOpsOverviewTable,
  UvIoTOpsOverviewForm,
  UvIoTOpsOverviewWidget,
  UvIoTOpsWorkspacePanel,
  UvIoTOpsWorkspaceCard,
  UvIoTOpsWorkspaceTable,
  UvIoTOpsWorkspaceForm,
  UvIoTOpsWorkspaceWidget,
  UvIoTOpsPlannerPanel,
  UvIoTOpsPlannerCard,
  UvIoTOpsPlannerTable,
  UvIoTOpsPlannerForm,
  UvIoTOpsPlannerWidget,
  UvIoTOpsMonitorPanel,
  UvIoTOpsMonitorCard,
  UvIoTOpsMonitorTable,
  UvIoTOpsMonitorForm,
  UvIoTOpsMonitorWidget,
  UvIoTOpsExplorerPanel,
  UvIoTOpsExplorerCard,
  UvIoTOpsExplorerTable,
  UvIoTOpsExplorerForm,
  UvIoTOpsExplorerWidget,
  UvIoTOpsManagerPanel,
  UvIoTOpsManagerCard,
  UvIoTOpsManagerTable,
  UvIoTOpsManagerForm,
  UvIoTOpsManagerWidget,
  UvIoTOpsConsolePanel,
  UvIoTOpsConsoleCard,
  UvIoTOpsConsoleTable,
  UvIoTOpsConsoleForm,
  UvIoTOpsConsoleWidget,
  UvIoTOpsInsightsPanel,
  UvIoTOpsInsightsCard,
  UvIoTOpsInsightsTable,
  UvIoTOpsInsightsForm,
  UvIoTOpsInsightsWidget,
  UvIoTOpsWorkflowPanel,
  UvIoTOpsWorkflowCard,
  UvIoTOpsWorkflowTable,
  UvIoTOpsWorkflowForm,
  UvIoTOpsWorkflowWidget,
  UvIoTOpsAutomationPanel,
  UvIoTOpsAutomationCard,
  UvIoTOpsAutomationTable,
  UvIoTOpsAutomationForm,
  UvIoTOpsAutomationWidget,
  UvSustainabilityOpsOverviewPanel,
  UvSustainabilityOpsOverviewCard,
  UvSustainabilityOpsOverviewTable,
  UvSustainabilityOpsOverviewForm,
  UvSustainabilityOpsOverviewWidget,
  UvSustainabilityOpsWorkspacePanel,
  UvSustainabilityOpsWorkspaceCard,
  UvSustainabilityOpsWorkspaceTable,
  UvSustainabilityOpsWorkspaceForm,
  UvSustainabilityOpsWorkspaceWidget,
  UvSustainabilityOpsPlannerPanel,
  UvSustainabilityOpsPlannerCard,
  UvSustainabilityOpsPlannerTable,
  UvSustainabilityOpsPlannerForm,
  UvSustainabilityOpsPlannerWidget,
  UvSustainabilityOpsMonitorPanel,
  UvSustainabilityOpsMonitorCard,
  UvSustainabilityOpsMonitorTable,
  UvSustainabilityOpsMonitorForm,
  UvSustainabilityOpsMonitorWidget,
  UvSustainabilityOpsExplorerPanel,
  UvSustainabilityOpsExplorerCard,
  UvSustainabilityOpsExplorerTable,
  UvSustainabilityOpsExplorerForm,
  UvSustainabilityOpsExplorerWidget,
  UvSustainabilityOpsManagerPanel,
  UvSustainabilityOpsManagerCard,
  UvSustainabilityOpsManagerTable,
  UvSustainabilityOpsManagerForm,
  UvSustainabilityOpsManagerWidget,
  UvSustainabilityOpsConsolePanel,
  UvSustainabilityOpsConsoleCard,
  UvSustainabilityOpsConsoleTable,
  UvSustainabilityOpsConsoleForm,
  UvSustainabilityOpsConsoleWidget,
  UvSustainabilityOpsInsightsPanel,
  UvSustainabilityOpsInsightsCard,
  UvSustainabilityOpsInsightsTable,
  UvSustainabilityOpsInsightsForm,
  UvSustainabilityOpsInsightsWidget,
  UvSustainabilityOpsWorkflowPanel,
  UvSustainabilityOpsWorkflowCard,
  UvSustainabilityOpsWorkflowTable,
  UvSustainabilityOpsWorkflowForm,
  UvSustainabilityOpsWorkflowWidget,
  UvSustainabilityOpsAutomationPanel,
  UvSustainabilityOpsAutomationCard,
  UvSustainabilityOpsAutomationTable,
  UvSustainabilityOpsAutomationForm,
  UvSustainabilityOpsAutomationWidget,
  UvEmergencyOpsOverviewPanel,
  UvEmergencyOpsOverviewCard,
  UvEmergencyOpsOverviewTable,
  UvEmergencyOpsOverviewForm,
  UvEmergencyOpsOverviewWidget,
  UvEmergencyOpsWorkspacePanel,
  UvEmergencyOpsWorkspaceCard,
  UvEmergencyOpsWorkspaceTable,
  UvEmergencyOpsWorkspaceForm,
  UvEmergencyOpsWorkspaceWidget,
  UvEmergencyOpsPlannerPanel,
  UvEmergencyOpsPlannerCard,
  UvEmergencyOpsPlannerTable,
  UvEmergencyOpsPlannerForm,
  UvEmergencyOpsPlannerWidget,
  UvEmergencyOpsMonitorPanel,
  UvEmergencyOpsMonitorCard,
  UvEmergencyOpsMonitorTable,
  UvEmergencyOpsMonitorForm,
  UvEmergencyOpsMonitorWidget,
  UvEmergencyOpsExplorerPanel,
  UvEmergencyOpsExplorerCard,
  UvEmergencyOpsExplorerTable,
  UvEmergencyOpsExplorerForm,
  UvEmergencyOpsExplorerWidget,
  UvEmergencyOpsManagerPanel,
  UvEmergencyOpsManagerCard,
  UvEmergencyOpsManagerTable,
  UvEmergencyOpsManagerForm,
  UvEmergencyOpsManagerWidget,
  UvEmergencyOpsConsolePanel,
  UvEmergencyOpsConsoleCard,
  UvEmergencyOpsConsoleTable,
  UvEmergencyOpsConsoleForm,
  UvEmergencyOpsConsoleWidget,
  UvEmergencyOpsInsightsPanel,
  UvEmergencyOpsInsightsCard,
  UvEmergencyOpsInsightsTable,
  UvEmergencyOpsInsightsForm,
  UvEmergencyOpsInsightsWidget,
  UvEmergencyOpsWorkflowPanel,
  UvEmergencyOpsWorkflowCard,
  UvEmergencyOpsWorkflowTable,
  UvEmergencyOpsWorkflowForm,
  UvEmergencyOpsWorkflowWidget,
  UvEmergencyOpsAutomationPanel,
  UvEmergencyOpsAutomationCard,
  UvEmergencyOpsAutomationTable,
  UvEmergencyOpsAutomationForm,
  UvEmergencyOpsAutomationWidget
} from '@universal-vue/components'

export type UniversalVueElementConstructor = CustomElementConstructor

export const UvButtonElement: UniversalVueElementConstructor = defineCustomElement(UvButton) as unknown as UniversalVueElementConstructor
export const UvIconButtonElement: UniversalVueElementConstructor = defineCustomElement(UvIconButton) as unknown as UniversalVueElementConstructor
export const UvInputElement: UniversalVueElementConstructor = defineCustomElement(UvInput) as unknown as UniversalVueElementConstructor
export const UvTextareaElement: UniversalVueElementConstructor = defineCustomElement(UvTextarea) as unknown as UniversalVueElementConstructor
export const UvCheckboxElement: UniversalVueElementConstructor = defineCustomElement(UvCheckbox) as unknown as UniversalVueElementConstructor
export const UvRadioElement: UniversalVueElementConstructor = defineCustomElement(UvRadio) as unknown as UniversalVueElementConstructor
export const UvSwitchElement: UniversalVueElementConstructor = defineCustomElement(UvSwitch) as unknown as UniversalVueElementConstructor
export const UvBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvBadge) as unknown as UniversalVueElementConstructor
export const UvAlertElement: UniversalVueElementConstructor = defineCustomElement(UvAlert) as unknown as UniversalVueElementConstructor
export const UvSpinnerElement: UniversalVueElementConstructor = defineCustomElement(UvSpinner) as unknown as UniversalVueElementConstructor
export const UvSelectElement: UniversalVueElementConstructor = defineCustomElement(UvSelect) as unknown as UniversalVueElementConstructor
export const UvCardElement: UniversalVueElementConstructor = defineCustomElement(UvCard) as unknown as UniversalVueElementConstructor
export const UvProgressElement: UniversalVueElementConstructor = defineCustomElement(UvProgress) as unknown as UniversalVueElementConstructor
export const UvAvatarElement: UniversalVueElementConstructor = defineCustomElement(UvAvatar) as unknown as UniversalVueElementConstructor
export const UvAccordionElement: UniversalVueElementConstructor = defineCustomElement(UvAccordion) as unknown as UniversalVueElementConstructor
export const UvTabsElement: UniversalVueElementConstructor = defineCustomElement(UvTabs) as unknown as UniversalVueElementConstructor
export const UvBreadcrumbElement: UniversalVueElementConstructor = defineCustomElement(UvBreadcrumb) as unknown as UniversalVueElementConstructor
export const UvPaginationElement: UniversalVueElementConstructor = defineCustomElement(UvPagination) as unknown as UniversalVueElementConstructor
export const UvDialogElement: UniversalVueElementConstructor = defineCustomElement(UvDialog) as unknown as UniversalVueElementConstructor
export const UvTooltipElement: UniversalVueElementConstructor = defineCustomElement(UvTooltip) as unknown as UniversalVueElementConstructor
export const UvDividerElement: UniversalVueElementConstructor = defineCustomElement(UvDivider) as unknown as UniversalVueElementConstructor
export const UvSkeletonElement: UniversalVueElementConstructor = defineCustomElement(UvSkeleton) as unknown as UniversalVueElementConstructor
export const UvSliderElement: UniversalVueElementConstructor = defineCustomElement(UvSlider) as unknown as UniversalVueElementConstructor
export const UvPopoverElement: UniversalVueElementConstructor = defineCustomElement(UvPopover) as unknown as UniversalVueElementConstructor
export const UvDropdownMenuElement: UniversalVueElementConstructor = defineCustomElement(UvDropdownMenu) as unknown as UniversalVueElementConstructor
export const UvToastElement: UniversalVueElementConstructor = defineCustomElement(UvToast) as unknown as UniversalVueElementConstructor
export const UvDrawerElement: UniversalVueElementConstructor = defineCustomElement(UvDrawer) as unknown as UniversalVueElementConstructor
export const UvComboboxElement: UniversalVueElementConstructor = defineCustomElement(UvCombobox) as unknown as UniversalVueElementConstructor
export const UvFileUploadElement: UniversalVueElementConstructor = defineCustomElement(UvFileUpload) as unknown as UniversalVueElementConstructor
export const UvTableElement: UniversalVueElementConstructor = defineCustomElement(UvTable) as unknown as UniversalVueElementConstructor
export const UvCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvCalendar) as unknown as UniversalVueElementConstructor
export const UvDatePickerElement: UniversalVueElementConstructor = defineCustomElement(UvDatePicker) as unknown as UniversalVueElementConstructor
export const UvNumberInputElement: UniversalVueElementConstructor = defineCustomElement(UvNumberInput) as unknown as UniversalVueElementConstructor
export const UvRatingElement: UniversalVueElementConstructor = defineCustomElement(UvRating) as unknown as UniversalVueElementConstructor
export const UvTagInputElement: UniversalVueElementConstructor = defineCustomElement(UvTagInput) as unknown as UniversalVueElementConstructor
export const UvFormFieldElement: UniversalVueElementConstructor = defineCustomElement(UvFormField) as unknown as UniversalVueElementConstructor
export const UvFieldsetElement: UniversalVueElementConstructor = defineCustomElement(UvFieldset) as unknown as UniversalVueElementConstructor
export const UvStepperElement: UniversalVueElementConstructor = defineCustomElement(UvStepper) as unknown as UniversalVueElementConstructor
export const UvCommandPaletteElement: UniversalVueElementConstructor = defineCustomElement(UvCommandPalette) as unknown as UniversalVueElementConstructor
export const UvTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvTimeline) as unknown as UniversalVueElementConstructor
export const UvEmptyStateElement: UniversalVueElementConstructor = defineCustomElement(UvEmptyState) as unknown as UniversalVueElementConstructor
export const UvToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvToolbar) as unknown as UniversalVueElementConstructor
export const UvSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvSidebar) as unknown as UniversalVueElementConstructor
export const UvTreeViewElement: UniversalVueElementConstructor = defineCustomElement(UvTreeView) as unknown as UniversalVueElementConstructor
export const UvCarouselElement: UniversalVueElementConstructor = defineCustomElement(UvCarousel) as unknown as UniversalVueElementConstructor
export const UvSearchInputElement: UniversalVueElementConstructor = defineCustomElement(UvSearchInput) as unknown as UniversalVueElementConstructor
export const UvPasswordInputElement: UniversalVueElementConstructor = defineCustomElement(UvPasswordInput) as unknown as UniversalVueElementConstructor
export const UvOtpInputElement: UniversalVueElementConstructor = defineCustomElement(UvOtpInput) as unknown as UniversalVueElementConstructor
export const UvColorPickerElement: UniversalVueElementConstructor = defineCustomElement(UvColorPicker) as unknown as UniversalVueElementConstructor
export const UvRangeSliderElement: UniversalVueElementConstructor = defineCustomElement(UvRangeSlider) as unknown as UniversalVueElementConstructor
export const UvToggleElement: UniversalVueElementConstructor = defineCustomElement(UvToggle) as unknown as UniversalVueElementConstructor
export const UvToggleGroupElement: UniversalVueElementConstructor = defineCustomElement(UvToggleGroup) as unknown as UniversalVueElementConstructor
export const UvSegmentedControlElement: UniversalVueElementConstructor = defineCustomElement(UvSegmentedControl) as unknown as UniversalVueElementConstructor
export const UvButtonGroupElement: UniversalVueElementConstructor = defineCustomElement(UvButtonGroup) as unknown as UniversalVueElementConstructor
export const UvSplitButtonElement: UniversalVueElementConstructor = defineCustomElement(UvSplitButton) as unknown as UniversalVueElementConstructor
export const UvLinkElement: UniversalVueElementConstructor = defineCustomElement(UvLink) as unknown as UniversalVueElementConstructor
export const UvSkipLinkElement: UniversalVueElementConstructor = defineCustomElement(UvSkipLink) as unknown as UniversalVueElementConstructor
export const UvNavigationMenuElement: UniversalVueElementConstructor = defineCustomElement(UvNavigationMenu) as unknown as UniversalVueElementConstructor
export const UvMenubarElement: UniversalVueElementConstructor = defineCustomElement(UvMenubar) as unknown as UniversalVueElementConstructor
export const UvBottomNavigationElement: UniversalVueElementConstructor = defineCustomElement(UvBottomNavigation) as unknown as UniversalVueElementConstructor
export const UvAlertDialogElement: UniversalVueElementConstructor = defineCustomElement(UvAlertDialog) as unknown as UniversalVueElementConstructor
export const UvHoverCardElement: UniversalVueElementConstructor = defineCustomElement(UvHoverCard) as unknown as UniversalVueElementConstructor
export const UvCollapsibleElement: UniversalVueElementConstructor = defineCustomElement(UvCollapsible) as unknown as UniversalVueElementConstructor
export const UvScrollAreaElement: UniversalVueElementConstructor = defineCustomElement(UvScrollArea) as unknown as UniversalVueElementConstructor
export const UvAspectRatioElement: UniversalVueElementConstructor = defineCustomElement(UvAspectRatio) as unknown as UniversalVueElementConstructor
export const UvDescriptionListElement: UniversalVueElementConstructor = defineCustomElement(UvDescriptionList) as unknown as UniversalVueElementConstructor
export const UvStatElement: UniversalVueElementConstructor = defineCustomElement(UvStat) as unknown as UniversalVueElementConstructor
export const UvCodeBlockElement: UniversalVueElementConstructor = defineCustomElement(UvCodeBlock) as unknown as UniversalVueElementConstructor
export const UvListboxElement: UniversalVueElementConstructor = defineCustomElement(UvListbox) as unknown as UniversalVueElementConstructor
export const UvTransferListElement: UniversalVueElementConstructor = defineCustomElement(UvTransferList) as unknown as UniversalVueElementConstructor
export const UvMeterElement: UniversalVueElementConstructor = defineCustomElement(UvMeter) as unknown as UniversalVueElementConstructor
export const UvKbdElement: UniversalVueElementConstructor = defineCustomElement(UvKbd) as unknown as UniversalVueElementConstructor
export const UvBlockquoteElement: UniversalVueElementConstructor = defineCustomElement(UvBlockquote) as unknown as UniversalVueElementConstructor
export const UvFigureElement: UniversalVueElementConstructor = defineCustomElement(UvFigure) as unknown as UniversalVueElementConstructor
export const UvVisuallyHiddenElement: UniversalVueElementConstructor = defineCustomElement(UvVisuallyHidden) as unknown as UniversalVueElementConstructor
export const UvImageElement: UniversalVueElementConstructor = defineCustomElement(UvImage) as unknown as UniversalVueElementConstructor
export const UvVideoElement: UniversalVueElementConstructor = defineCustomElement(UvVideo) as unknown as UniversalVueElementConstructor
export const UvAudioElement: UniversalVueElementConstructor = defineCustomElement(UvAudio) as unknown as UniversalVueElementConstructor
export const UvIconElement: UniversalVueElementConstructor = defineCustomElement(UvIcon) as unknown as UniversalVueElementConstructor
export const UvPlaceholderElement: UniversalVueElementConstructor = defineCustomElement(UvPlaceholder) as unknown as UniversalVueElementConstructor
export const UvContainerElement: UniversalVueElementConstructor = defineCustomElement(UvContainer) as unknown as UniversalVueElementConstructor
export const UvStackElement: UniversalVueElementConstructor = defineCustomElement(UvStack) as unknown as UniversalVueElementConstructor
export const UvClusterElement: UniversalVueElementConstructor = defineCustomElement(UvCluster) as unknown as UniversalVueElementConstructor
export const UvGridElement: UniversalVueElementConstructor = defineCustomElement(UvGrid) as unknown as UniversalVueElementConstructor
export const UvCenterElement: UniversalVueElementConstructor = defineCustomElement(UvCenter) as unknown as UniversalVueElementConstructor
export const UvBoxElement: UniversalVueElementConstructor = defineCustomElement(UvBox) as unknown as UniversalVueElementConstructor
export const UvFlexElement: UniversalVueElementConstructor = defineCustomElement(UvFlex) as unknown as UniversalVueElementConstructor
export const UvSpacerElement: UniversalVueElementConstructor = defineCustomElement(UvSpacer) as unknown as UniversalVueElementConstructor
export const UvSurfaceElement: UniversalVueElementConstructor = defineCustomElement(UvSurface) as unknown as UniversalVueElementConstructor
export const UvSectionElement: UniversalVueElementConstructor = defineCustomElement(UvSection) as unknown as UniversalVueElementConstructor
export const UvHeadingElement: UniversalVueElementConstructor = defineCustomElement(UvHeading) as unknown as UniversalVueElementConstructor
export const UvTextElement: UniversalVueElementConstructor = defineCustomElement(UvText) as unknown as UniversalVueElementConstructor
export const UvLabelElement: UniversalVueElementConstructor = defineCustomElement(UvLabel) as unknown as UniversalVueElementConstructor
export const UvProseElement: UniversalVueElementConstructor = defineCustomElement(UvProse) as unknown as UniversalVueElementConstructor
export const UvTruncateElement: UniversalVueElementConstructor = defineCustomElement(UvTruncate) as unknown as UniversalVueElementConstructor
export const UvChipElement: UniversalVueElementConstructor = defineCustomElement(UvChip) as unknown as UniversalVueElementConstructor
export const UvChipGroupElement: UniversalVueElementConstructor = defineCustomElement(UvChipGroup) as unknown as UniversalVueElementConstructor
export const UvStatusDotElement: UniversalVueElementConstructor = defineCustomElement(UvStatusDot) as unknown as UniversalVueElementConstructor
export const UvCounterElement: UniversalVueElementConstructor = defineCustomElement(UvCounter) as unknown as UniversalVueElementConstructor
export const UvKeyValueElement: UniversalVueElementConstructor = defineCustomElement(UvKeyValue) as unknown as UniversalVueElementConstructor
export const UvBannerElement: UniversalVueElementConstructor = defineCustomElement(UvBanner) as unknown as UniversalVueElementConstructor
export const UvCalloutElement: UniversalVueElementConstructor = defineCustomElement(UvCallout) as unknown as UniversalVueElementConstructor
export const UvNoticeElement: UniversalVueElementConstructor = defineCustomElement(UvNotice) as unknown as UniversalVueElementConstructor
export const UvResultElement: UniversalVueElementConstructor = defineCustomElement(UvResult) as unknown as UniversalVueElementConstructor
export const UvLoadingOverlayElement: UniversalVueElementConstructor = defineCustomElement(UvLoadingOverlay) as unknown as UniversalVueElementConstructor
export const UvSheetElement: UniversalVueElementConstructor = defineCustomElement(UvSheet) as unknown as UniversalVueElementConstructor
export const UvBackdropElement: UniversalVueElementConstructor = defineCustomElement(UvBackdrop) as unknown as UniversalVueElementConstructor
export const UvPortalElement: UniversalVueElementConstructor = defineCustomElement(UvPortal) as unknown as UniversalVueElementConstructor
export const UvFocusTrapElement: UniversalVueElementConstructor = defineCustomElement(UvFocusTrap) as unknown as UniversalVueElementConstructor
export const UvFocusScopeElement: UniversalVueElementConstructor = defineCustomElement(UvFocusScope) as unknown as UniversalVueElementConstructor
export const UvContextMenuElement: UniversalVueElementConstructor = defineCustomElement(UvContextMenu) as unknown as UniversalVueElementConstructor
export const UvMenuButtonElement: UniversalVueElementConstructor = defineCustomElement(UvMenuButton) as unknown as UniversalVueElementConstructor
export const UvActionMenuElement: UniversalVueElementConstructor = defineCustomElement(UvActionMenu) as unknown as UniversalVueElementConstructor
export const UvSpeedDialElement: UniversalVueElementConstructor = defineCustomElement(UvSpeedDial) as unknown as UniversalVueElementConstructor
export const UvFloatingActionButtonElement: UniversalVueElementConstructor = defineCustomElement(UvFloatingActionButton) as unknown as UniversalVueElementConstructor
export const UvDisclosureElement: UniversalVueElementConstructor = defineCustomElement(UvDisclosure) as unknown as UniversalVueElementConstructor
export const UvDetailsElement: UniversalVueElementConstructor = defineCustomElement(UvDetails) as unknown as UniversalVueElementConstructor
export const UvExpandableTextElement: UniversalVueElementConstructor = defineCustomElement(UvExpandableText) as unknown as UniversalVueElementConstructor
export const UvReadMoreElement: UniversalVueElementConstructor = defineCustomElement(UvReadMore) as unknown as UniversalVueElementConstructor
export const UvShowHideElement: UniversalVueElementConstructor = defineCustomElement(UvShowHide) as unknown as UniversalVueElementConstructor
export const UvTimePickerElement: UniversalVueElementConstructor = defineCustomElement(UvTimePicker) as unknown as UniversalVueElementConstructor
export const UvDateRangePickerElement: UniversalVueElementConstructor = defineCustomElement(UvDateRangePicker) as unknown as UniversalVueElementConstructor
export const UvMonthPickerElement: UniversalVueElementConstructor = defineCustomElement(UvMonthPicker) as unknown as UniversalVueElementConstructor
export const UvWeekPickerElement: UniversalVueElementConstructor = defineCustomElement(UvWeekPicker) as unknown as UniversalVueElementConstructor
export const UvYearPickerElement: UniversalVueElementConstructor = defineCustomElement(UvYearPicker) as unknown as UniversalVueElementConstructor
export const UvTimeInputElement: UniversalVueElementConstructor = defineCustomElement(UvTimeInput) as unknown as UniversalVueElementConstructor
export const UvDurationInputElement: UniversalVueElementConstructor = defineCustomElement(UvDurationInput) as unknown as UniversalVueElementConstructor
export const UvCurrencyInputElement: UniversalVueElementConstructor = defineCustomElement(UvCurrencyInput) as unknown as UniversalVueElementConstructor
export const UvPercentageInputElement: UniversalVueElementConstructor = defineCustomElement(UvPercentageInput) as unknown as UniversalVueElementConstructor
export const UvMaskedInputElement: UniversalVueElementConstructor = defineCustomElement(UvMaskedInput) as unknown as UniversalVueElementConstructor
export const UvPhoneInputElement: UniversalVueElementConstructor = defineCustomElement(UvPhoneInput) as unknown as UniversalVueElementConstructor
export const UvEmailInputElement: UniversalVueElementConstructor = defineCustomElement(UvEmailInput) as unknown as UniversalVueElementConstructor
export const UvUrlInputElement: UniversalVueElementConstructor = defineCustomElement(UvUrlInput) as unknown as UniversalVueElementConstructor
export const UvPinInputElement: UniversalVueElementConstructor = defineCustomElement(UvPinInput) as unknown as UniversalVueElementConstructor
export const UvSearchSelectElement: UniversalVueElementConstructor = defineCustomElement(UvSearchSelect) as unknown as UniversalVueElementConstructor
export const UvMultiSelectElement: UniversalVueElementConstructor = defineCustomElement(UvMultiSelect) as unknown as UniversalVueElementConstructor
export const UvCascaderElement: UniversalVueElementConstructor = defineCustomElement(UvCascader) as unknown as UniversalVueElementConstructor
export const UvAutocompleteElement: UniversalVueElementConstructor = defineCustomElement(UvAutocomplete) as unknown as UniversalVueElementConstructor
export const UvMentionInputElement: UniversalVueElementConstructor = defineCustomElement(UvMentionInput) as unknown as UniversalVueElementConstructor
export const UvTokenFieldElement: UniversalVueElementConstructor = defineCustomElement(UvTokenField) as unknown as UniversalVueElementConstructor
export const UvFormElement: UniversalVueElementConstructor = defineCustomElement(UvForm) as unknown as UniversalVueElementConstructor
export const UvFormSectionElement: UniversalVueElementConstructor = defineCustomElement(UvFormSection) as unknown as UniversalVueElementConstructor
export const UvFormActionsElement: UniversalVueElementConstructor = defineCustomElement(UvFormActions) as unknown as UniversalVueElementConstructor
export const UvErrorSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvErrorSummary) as unknown as UniversalVueElementConstructor
export const UvCharacterCounterElement: UniversalVueElementConstructor = defineCustomElement(UvCharacterCounter) as unknown as UniversalVueElementConstructor
export const UvDataGridElement: UniversalVueElementConstructor = defineCustomElement(UvDataGrid) as unknown as UniversalVueElementConstructor
export const UvVirtualListElement: UniversalVueElementConstructor = defineCustomElement(UvVirtualList) as unknown as UniversalVueElementConstructor
export const UvInfiniteScrollElement: UniversalVueElementConstructor = defineCustomElement(UvInfiniteScroll) as unknown as UniversalVueElementConstructor
export const UvMasonryElement: UniversalVueElementConstructor = defineCustomElement(UvMasonry) as unknown as UniversalVueElementConstructor
export const UvResizablePanelElement: UniversalVueElementConstructor = defineCustomElement(UvResizablePanel) as unknown as UniversalVueElementConstructor
export const UvKanbanElement: UniversalVueElementConstructor = defineCustomElement(UvKanban) as unknown as UniversalVueElementConstructor
export const UvSortableListElement: UniversalVueElementConstructor = defineCustomElement(UvSortableList) as unknown as UniversalVueElementConstructor
export const UvDragHandleElement: UniversalVueElementConstructor = defineCustomElement(UvDragHandle) as unknown as UniversalVueElementConstructor
export const UvDropZoneElement: UniversalVueElementConstructor = defineCustomElement(UvDropZone) as unknown as UniversalVueElementConstructor
export const UvReorderGroupElement: UniversalVueElementConstructor = defineCustomElement(UvReorderGroup) as unknown as UniversalVueElementConstructor
export const UvSparklineElement: UniversalVueElementConstructor = defineCustomElement(UvSparkline) as unknown as UniversalVueElementConstructor
export const UvBarChartElement: UniversalVueElementConstructor = defineCustomElement(UvBarChart) as unknown as UniversalVueElementConstructor
export const UvLineChartElement: UniversalVueElementConstructor = defineCustomElement(UvLineChart) as unknown as UniversalVueElementConstructor
export const UvPieChartElement: UniversalVueElementConstructor = defineCustomElement(UvPieChart) as unknown as UniversalVueElementConstructor
export const UvGaugeElement: UniversalVueElementConstructor = defineCustomElement(UvGauge) as unknown as UniversalVueElementConstructor
export const UvHeatmapElement: UniversalVueElementConstructor = defineCustomElement(UvHeatmap) as unknown as UniversalVueElementConstructor
export const UvRingChartElement: UniversalVueElementConstructor = defineCustomElement(UvRingChart) as unknown as UniversalVueElementConstructor
export const UvFunnelChartElement: UniversalVueElementConstructor = defineCustomElement(UvFunnelChart) as unknown as UniversalVueElementConstructor
export const UvChartLegendElement: UniversalVueElementConstructor = defineCustomElement(UvChartLegend) as unknown as UniversalVueElementConstructor
export const UvDataMarkerElement: UniversalVueElementConstructor = defineCustomElement(UvDataMarker) as unknown as UniversalVueElementConstructor
export const UvEditorElement: UniversalVueElementConstructor = defineCustomElement(UvEditor) as unknown as UniversalVueElementConstructor
export const UvMarkdownElement: UniversalVueElementConstructor = defineCustomElement(UvMarkdown) as unknown as UniversalVueElementConstructor
export const UvRichTextElement: UniversalVueElementConstructor = defineCustomElement(UvRichText) as unknown as UniversalVueElementConstructor
export const UvCodeEditorElement: UniversalVueElementConstructor = defineCustomElement(UvCodeEditor) as unknown as UniversalVueElementConstructor
export const UvDiffViewerElement: UniversalVueElementConstructor = defineCustomElement(UvDiffViewer) as unknown as UniversalVueElementConstructor
export const UvFileListElement: UniversalVueElementConstructor = defineCustomElement(UvFileList) as unknown as UniversalVueElementConstructor
export const UvFilePreviewElement: UniversalVueElementConstructor = defineCustomElement(UvFilePreview) as unknown as UniversalVueElementConstructor
export const UvImageCropperElement: UniversalVueElementConstructor = defineCustomElement(UvImageCropper) as unknown as UniversalVueElementConstructor
export const UvImageGalleryElement: UniversalVueElementConstructor = defineCustomElement(UvImageGallery) as unknown as UniversalVueElementConstructor
export const UvLightboxElement: UniversalVueElementConstructor = defineCustomElement(UvLightbox) as unknown as UniversalVueElementConstructor
export const UvUploadQueueElement: UniversalVueElementConstructor = defineCustomElement(UvUploadQueue) as unknown as UniversalVueElementConstructor
export const UvDropUploadElement: UniversalVueElementConstructor = defineCustomElement(UvDropUpload) as unknown as UniversalVueElementConstructor
export const UvAttachmentElement: UniversalVueElementConstructor = defineCustomElement(UvAttachment) as unknown as UniversalVueElementConstructor
export const UvAvatarGroupElement: UniversalVueElementConstructor = defineCustomElement(UvAvatarGroup) as unknown as UniversalVueElementConstructor
export const UvPresenceElement: UniversalVueElementConstructor = defineCustomElement(UvPresence) as unknown as UniversalVueElementConstructor
export const UvUserCardElement: UniversalVueElementConstructor = defineCustomElement(UvUserCard) as unknown as UniversalVueElementConstructor
export const UvProfileCardElement: UniversalVueElementConstructor = defineCustomElement(UvProfileCard) as unknown as UniversalVueElementConstructor
export const UvContactCardElement: UniversalVueElementConstructor = defineCustomElement(UvContactCard) as unknown as UniversalVueElementConstructor
export const UvProductCardElement: UniversalVueElementConstructor = defineCustomElement(UvProductCard) as unknown as UniversalVueElementConstructor
export const UvPricingCardElement: UniversalVueElementConstructor = defineCustomElement(UvPricingCard) as unknown as UniversalVueElementConstructor
export const UvReviewElement: UniversalVueElementConstructor = defineCustomElement(UvReview) as unknown as UniversalVueElementConstructor
export const UvTestimonialElement: UniversalVueElementConstructor = defineCustomElement(UvTestimonial) as unknown as UniversalVueElementConstructor
export const UvCommentElement: UniversalVueElementConstructor = defineCustomElement(UvComment) as unknown as UniversalVueElementConstructor
export const UvCommentThreadElement: UniversalVueElementConstructor = defineCustomElement(UvCommentThread) as unknown as UniversalVueElementConstructor
export const UvActivityFeedElement: UniversalVueElementConstructor = defineCustomElement(UvActivityFeed) as unknown as UniversalVueElementConstructor
export const UvChatBubbleElement: UniversalVueElementConstructor = defineCustomElement(UvChatBubble) as unknown as UniversalVueElementConstructor
export const UvChatComposerElement: UniversalVueElementConstructor = defineCustomElement(UvChatComposer) as unknown as UniversalVueElementConstructor
export const UvMessageListElement: UniversalVueElementConstructor = defineCustomElement(UvMessageList) as unknown as UniversalVueElementConstructor
export const UvTypingIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvTypingIndicator) as unknown as UniversalVueElementConstructor
export const UvConversationHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvConversationHeader) as unknown as UniversalVueElementConstructor
export const UvNotificationElement: UniversalVueElementConstructor = defineCustomElement(UvNotification) as unknown as UniversalVueElementConstructor
export const UvNotificationCenterElement: UniversalVueElementConstructor = defineCustomElement(UvNotificationCenter) as unknown as UniversalVueElementConstructor
export const UvInboxItemElement: UniversalVueElementConstructor = defineCustomElement(UvInboxItem) as unknown as UniversalVueElementConstructor
export const UvMailPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvMailPreview) as unknown as UniversalVueElementConstructor
export const UvAnnouncementElement: UniversalVueElementConstructor = defineCustomElement(UvAnnouncement) as unknown as UniversalVueElementConstructor
export const UvSearchResultsElement: UniversalVueElementConstructor = defineCustomElement(UvSearchResults) as unknown as UniversalVueElementConstructor
export const UvFilterBarElement: UniversalVueElementConstructor = defineCustomElement(UvFilterBar) as unknown as UniversalVueElementConstructor
export const UvFilterChipElement: UniversalVueElementConstructor = defineCustomElement(UvFilterChip) as unknown as UniversalVueElementConstructor
export const UvSortControlElement: UniversalVueElementConstructor = defineCustomElement(UvSortControl) as unknown as UniversalVueElementConstructor
export const UvViewSwitcherElement: UniversalVueElementConstructor = defineCustomElement(UvViewSwitcher) as unknown as UniversalVueElementConstructor
export const UvPaginationInfoElement: UniversalVueElementConstructor = defineCustomElement(UvPaginationInfo) as unknown as UniversalVueElementConstructor
export const UvPageSizeSelectElement: UniversalVueElementConstructor = defineCustomElement(UvPageSizeSelect) as unknown as UniversalVueElementConstructor
export const UvLoadMoreElement: UniversalVueElementConstructor = defineCustomElement(UvLoadMore) as unknown as UniversalVueElementConstructor
export const UvBreadcrumbItemElement: UniversalVueElementConstructor = defineCustomElement(UvBreadcrumbItem) as unknown as UniversalVueElementConstructor
export const UvBackToTopElement: UniversalVueElementConstructor = defineCustomElement(UvBackToTop) as unknown as UniversalVueElementConstructor
export const UvAppShellElement: UniversalVueElementConstructor = defineCustomElement(UvAppShell) as unknown as UniversalVueElementConstructor
export const UvHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvHeader) as unknown as UniversalVueElementConstructor
export const UvFooterElement: UniversalVueElementConstructor = defineCustomElement(UvFooter) as unknown as UniversalVueElementConstructor
export const UvMainElement: UniversalVueElementConstructor = defineCustomElement(UvMain) as unknown as UniversalVueElementConstructor
export const UvNavigationRailElement: UniversalVueElementConstructor = defineCustomElement(UvNavigationRail) as unknown as UniversalVueElementConstructor
export const UvTopBarElement: UniversalVueElementConstructor = defineCustomElement(UvTopBar) as unknown as UniversalVueElementConstructor
export const UvPageHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvPageHeader) as unknown as UniversalVueElementConstructor
export const UvPageLayoutElement: UniversalVueElementConstructor = defineCustomElement(UvPageLayout) as unknown as UniversalVueElementConstructor
export const UvSplitLayoutElement: UniversalVueElementConstructor = defineCustomElement(UvSplitLayout) as unknown as UniversalVueElementConstructor
export const UvDashboardGridElement: UniversalVueElementConstructor = defineCustomElement(UvDashboardGrid) as unknown as UniversalVueElementConstructor
export const UvPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPanel) as unknown as UniversalVueElementConstructor
export const UvPanelHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvPanelHeader) as unknown as UniversalVueElementConstructor
export const UvWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWidget) as unknown as UniversalVueElementConstructor
export const UvWidgetGridElement: UniversalVueElementConstructor = defineCustomElement(UvWidgetGrid) as unknown as UniversalVueElementConstructor
export const UvDockElement: UniversalVueElementConstructor = defineCustomElement(UvDock) as unknown as UniversalVueElementConstructor
export const UvTourElement: UniversalVueElementConstructor = defineCustomElement(UvTour) as unknown as UniversalVueElementConstructor
export const UvSpotlightElement: UniversalVueElementConstructor = defineCustomElement(UvSpotlight) as unknown as UniversalVueElementConstructor
export const UvCoachmarkElement: UniversalVueElementConstructor = defineCustomElement(UvCoachmark) as unknown as UniversalVueElementConstructor
export const UvHotspotElement: UniversalVueElementConstructor = defineCustomElement(UvHotspot) as unknown as UniversalVueElementConstructor
export const UvOnboardingStepElement: UniversalVueElementConstructor = defineCustomElement(UvOnboardingStep) as unknown as UniversalVueElementConstructor
export const UvSkeletonTextElement: UniversalVueElementConstructor = defineCustomElement(UvSkeletonText) as unknown as UniversalVueElementConstructor
export const UvSkeletonAvatarElement: UniversalVueElementConstructor = defineCustomElement(UvSkeletonAvatar) as unknown as UniversalVueElementConstructor
export const UvSkeletonCardElement: UniversalVueElementConstructor = defineCustomElement(UvSkeletonCard) as unknown as UniversalVueElementConstructor
export const UvSkeletonTableElement: UniversalVueElementConstructor = defineCustomElement(UvSkeletonTable) as unknown as UniversalVueElementConstructor
export const UvShimmerElement: UniversalVueElementConstructor = defineCustomElement(UvShimmer) as unknown as UniversalVueElementConstructor
export const UvAgendaElement: UniversalVueElementConstructor = defineCustomElement(UvAgenda) as unknown as UniversalVueElementConstructor
export const UvScheduleElement: UniversalVueElementConstructor = defineCustomElement(UvSchedule) as unknown as UniversalVueElementConstructor
export const UvEventCardElement: UniversalVueElementConstructor = defineCustomElement(UvEventCard) as unknown as UniversalVueElementConstructor
export const UvEventListElement: UniversalVueElementConstructor = defineCustomElement(UvEventList) as unknown as UniversalVueElementConstructor
export const UvTimezoneSelectElement: UniversalVueElementConstructor = defineCustomElement(UvTimezoneSelect) as unknown as UniversalVueElementConstructor
export const UvStepperFormElement: UniversalVueElementConstructor = defineCustomElement(UvStepperForm) as unknown as UniversalVueElementConstructor
export const UvProgressStepsElement: UniversalVueElementConstructor = defineCustomElement(UvProgressSteps) as unknown as UniversalVueElementConstructor
export const UvMilestoneElement: UniversalVueElementConstructor = defineCustomElement(UvMilestone) as unknown as UniversalVueElementConstructor
export const UvRoadmapElement: UniversalVueElementConstructor = defineCustomElement(UvRoadmap) as unknown as UniversalVueElementConstructor
export const UvProcessFlowElement: UniversalVueElementConstructor = defineCustomElement(UvProcessFlow) as unknown as UniversalVueElementConstructor
export const UvMetricElement: UniversalVueElementConstructor = defineCustomElement(UvMetric) as unknown as UniversalVueElementConstructor
export const UvKpiCardElement: UniversalVueElementConstructor = defineCustomElement(UvKpiCard) as unknown as UniversalVueElementConstructor
export const UvComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvComparison) as unknown as UniversalVueElementConstructor
export const UvTrendElement: UniversalVueElementConstructor = defineCustomElement(UvTrend) as unknown as UniversalVueElementConstructor
export const UvScoreElement: UniversalVueElementConstructor = defineCustomElement(UvScore) as unknown as UniversalVueElementConstructor
export const UvCommandBarElement: UniversalVueElementConstructor = defineCustomElement(UvCommandBar) as unknown as UniversalVueElementConstructor
export const UvShortcutElement: UniversalVueElementConstructor = defineCustomElement(UvShortcut) as unknown as UniversalVueElementConstructor
export const UvShortcutListElement: UniversalVueElementConstructor = defineCustomElement(UvShortcutList) as unknown as UniversalVueElementConstructor
export const UvKeySequenceElement: UniversalVueElementConstructor = defineCustomElement(UvKeySequence) as unknown as UniversalVueElementConstructor
export const UvCommandItemElement: UniversalVueElementConstructor = defineCustomElement(UvCommandItem) as unknown as UniversalVueElementConstructor
export const UvClipboardElement: UniversalVueElementConstructor = defineCustomElement(UvClipboard) as unknown as UniversalVueElementConstructor
export const UvCopyButtonElement: UniversalVueElementConstructor = defineCustomElement(UvCopyButton) as unknown as UniversalVueElementConstructor
export const UvShareButtonElement: UniversalVueElementConstructor = defineCustomElement(UvShareButton) as unknown as UniversalVueElementConstructor
export const UvPrintButtonElement: UniversalVueElementConstructor = defineCustomElement(UvPrintButton) as unknown as UniversalVueElementConstructor
export const UvDownloadButtonElement: UniversalVueElementConstructor = defineCustomElement(UvDownloadButton) as unknown as UniversalVueElementConstructor
export const UvQrCodeElement: UniversalVueElementConstructor = defineCustomElement(UvQrCode) as unknown as UniversalVueElementConstructor
export const UvBarcodeElement: UniversalVueElementConstructor = defineCustomElement(UvBarcode) as unknown as UniversalVueElementConstructor
export const UvColorSwatchElement: UniversalVueElementConstructor = defineCustomElement(UvColorSwatch) as unknown as UniversalVueElementConstructor
export const UvGradientPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvGradientPreview) as unknown as UniversalVueElementConstructor
export const UvPatternPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvPatternPreview) as unknown as UniversalVueElementConstructor
export const UvThemeProviderElement: UniversalVueElementConstructor = defineCustomElement(UvThemeProvider) as unknown as UniversalVueElementConstructor
export const UvThemeToggleElement: UniversalVueElementConstructor = defineCustomElement(UvThemeToggle) as unknown as UniversalVueElementConstructor
export const UvLocaleProviderElement: UniversalVueElementConstructor = defineCustomElement(UvLocaleProvider) as unknown as UniversalVueElementConstructor
export const UvDirectionProviderElement: UniversalVueElementConstructor = defineCustomElement(UvDirectionProvider) as unknown as UniversalVueElementConstructor
export const UvReducedMotionElement: UniversalVueElementConstructor = defineCustomElement(UvReducedMotion) as unknown as UniversalVueElementConstructor
export const UvLiveRegionElement: UniversalVueElementConstructor = defineCustomElement(UvLiveRegion) as unknown as UniversalVueElementConstructor
export const UvAnnouncerElement: UniversalVueElementConstructor = defineCustomElement(UvAnnouncer) as unknown as UniversalVueElementConstructor
export const UvFocusRingElement: UniversalVueElementConstructor = defineCustomElement(UvFocusRing) as unknown as UniversalVueElementConstructor
export const UvRovingFocusGroupElement: UniversalVueElementConstructor = defineCustomElement(UvRovingFocusGroup) as unknown as UniversalVueElementConstructor
export const UvAccessibilityPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAccessibilityPanel) as unknown as UniversalVueElementConstructor
export const UvMegaMenuElement: UniversalVueElementConstructor = defineCustomElement(UvMegaMenu) as unknown as UniversalVueElementConstructor
export const UvMobileMenuElement: UniversalVueElementConstructor = defineCustomElement(UvMobileMenu) as unknown as UniversalVueElementConstructor
export const UvAnchorNavElement: UniversalVueElementConstructor = defineCustomElement(UvAnchorNav) as unknown as UniversalVueElementConstructor
export const UvStepNavElement: UniversalVueElementConstructor = defineCustomElement(UvStepNav) as unknown as UniversalVueElementConstructor
export const UvSubnavElement: UniversalVueElementConstructor = defineCustomElement(UvSubnav) as unknown as UniversalVueElementConstructor
export const UvCloseButtonElement: UniversalVueElementConstructor = defineCustomElement(UvCloseButton) as unknown as UniversalVueElementConstructor
export const UvBackButtonElement: UniversalVueElementConstructor = defineCustomElement(UvBackButton) as unknown as UniversalVueElementConstructor
export const UvForwardButtonElement: UniversalVueElementConstructor = defineCustomElement(UvForwardButton) as unknown as UniversalVueElementConstructor
export const UvSubmitButtonElement: UniversalVueElementConstructor = defineCustomElement(UvSubmitButton) as unknown as UniversalVueElementConstructor
export const UvResetButtonElement: UniversalVueElementConstructor = defineCustomElement(UvResetButton) as unknown as UniversalVueElementConstructor
export const UvInputGroupElement: UniversalVueElementConstructor = defineCustomElement(UvInputGroup) as unknown as UniversalVueElementConstructor
export const UvInputAddonElement: UniversalVueElementConstructor = defineCustomElement(UvInputAddon) as unknown as UniversalVueElementConstructor
export const UvInputPrefixElement: UniversalVueElementConstructor = defineCustomElement(UvInputPrefix) as unknown as UniversalVueElementConstructor
export const UvInputSuffixElement: UniversalVueElementConstructor = defineCustomElement(UvInputSuffix) as unknown as UniversalVueElementConstructor
export const UvClearButtonElement: UniversalVueElementConstructor = defineCustomElement(UvClearButton) as unknown as UniversalVueElementConstructor
export const UvDecimalInputElement: UniversalVueElementConstructor = defineCustomElement(UvDecimalInput) as unknown as UniversalVueElementConstructor
export const UvIntegerInputElement: UniversalVueElementConstructor = defineCustomElement(UvIntegerInput) as unknown as UniversalVueElementConstructor
export const UvScientificInputElement: UniversalVueElementConstructor = defineCustomElement(UvScientificInput) as unknown as UniversalVueElementConstructor
export const UvUnitInputElement: UniversalVueElementConstructor = defineCustomElement(UvUnitInput) as unknown as UniversalVueElementConstructor
export const UvCoordinateInputElement: UniversalVueElementConstructor = defineCustomElement(UvCoordinateInput) as unknown as UniversalVueElementConstructor
export const UvCountrySelectElement: UniversalVueElementConstructor = defineCustomElement(UvCountrySelect) as unknown as UniversalVueElementConstructor
export const UvLanguageSelectElement: UniversalVueElementConstructor = defineCustomElement(UvLanguageSelect) as unknown as UniversalVueElementConstructor
export const UvRegionSelectElement: UniversalVueElementConstructor = defineCustomElement(UvRegionSelect) as unknown as UniversalVueElementConstructor
export const UvCitySelectElement: UniversalVueElementConstructor = defineCustomElement(UvCitySelect) as unknown as UniversalVueElementConstructor
export const UvPostalCodeInputElement: UniversalVueElementConstructor = defineCustomElement(UvPostalCodeInput) as unknown as UniversalVueElementConstructor
export const UvAddressFormElement: UniversalVueElementConstructor = defineCustomElement(UvAddressForm) as unknown as UniversalVueElementConstructor
export const UvNameFieldElement: UniversalVueElementConstructor = defineCustomElement(UvNameField) as unknown as UniversalVueElementConstructor
export const UvUsernameInputElement: UniversalVueElementConstructor = defineCustomElement(UvUsernameInput) as unknown as UniversalVueElementConstructor
export const UvPasswordStrengthElement: UniversalVueElementConstructor = defineCustomElement(UvPasswordStrength) as unknown as UniversalVueElementConstructor
export const UvConsentCheckboxElement: UniversalVueElementConstructor = defineCustomElement(UvConsentCheckbox) as unknown as UniversalVueElementConstructor
export const UvDateTimePickerElement: UniversalVueElementConstructor = defineCustomElement(UvDateTimePicker) as unknown as UniversalVueElementConstructor
export const UvDateTimeRangePickerElement: UniversalVueElementConstructor = defineCustomElement(UvDateTimeRangePicker) as unknown as UniversalVueElementConstructor
export const UvBusinessHoursElement: UniversalVueElementConstructor = defineCustomElement(UvBusinessHours) as unknown as UniversalVueElementConstructor
export const UvRecurringScheduleElement: UniversalVueElementConstructor = defineCustomElement(UvRecurringSchedule) as unknown as UniversalVueElementConstructor
export const UvUtcOffsetSelectElement: UniversalVueElementConstructor = defineCustomElement(UvUtcOffsetSelect) as unknown as UniversalVueElementConstructor
export const UvCalendarHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvCalendarHeader) as unknown as UniversalVueElementConstructor
export const UvCalendarGridElement: UniversalVueElementConstructor = defineCustomElement(UvCalendarGrid) as unknown as UniversalVueElementConstructor
export const UvCalendarDayElement: UniversalVueElementConstructor = defineCustomElement(UvCalendarDay) as unknown as UniversalVueElementConstructor
export const UvCalendarEventElement: UniversalVueElementConstructor = defineCustomElement(UvCalendarEvent) as unknown as UniversalVueElementConstructor
export const UvMiniCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvMiniCalendar) as unknown as UniversalVueElementConstructor
export const UvSchedulerElement: UniversalVueElementConstructor = defineCustomElement(UvScheduler) as unknown as UniversalVueElementConstructor
export const UvResourceCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvResourceCalendar) as unknown as UniversalVueElementConstructor
export const UvAvailabilityGridElement: UniversalVueElementConstructor = defineCustomElement(UvAvailabilityGrid) as unknown as UniversalVueElementConstructor
export const UvBookingSlotElement: UniversalVueElementConstructor = defineCustomElement(UvBookingSlot) as unknown as UniversalVueElementConstructor
export const UvAppointmentCardElement: UniversalVueElementConstructor = defineCustomElement(UvAppointmentCard) as unknown as UniversalVueElementConstructor
export const UvDataTableElement: UniversalVueElementConstructor = defineCustomElement(UvDataTable) as unknown as UniversalVueElementConstructor
export const UvTableToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvTableToolbar) as unknown as UniversalVueElementConstructor
export const UvTableColumnPickerElement: UniversalVueElementConstructor = defineCustomElement(UvTableColumnPicker) as unknown as UniversalVueElementConstructor
export const UvTableFilterElement: UniversalVueElementConstructor = defineCustomElement(UvTableFilter) as unknown as UniversalVueElementConstructor
export const UvTableSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvTableSummary) as unknown as UniversalVueElementConstructor
export const UvTreeTableElement: UniversalVueElementConstructor = defineCustomElement(UvTreeTable) as unknown as UniversalVueElementConstructor
export const UvPivotTableElement: UniversalVueElementConstructor = defineCustomElement(UvPivotTable) as unknown as UniversalVueElementConstructor
export const UvCrossTabElement: UniversalVueElementConstructor = defineCustomElement(UvCrossTab) as unknown as UniversalVueElementConstructor
export const UvMatrixElement: UniversalVueElementConstructor = defineCustomElement(UvMatrix) as unknown as UniversalVueElementConstructor
export const UvSpreadsheetElement: UniversalVueElementConstructor = defineCustomElement(UvSpreadsheet) as unknown as UniversalVueElementConstructor
export const UvRecordListElement: UniversalVueElementConstructor = defineCustomElement(UvRecordList) as unknown as UniversalVueElementConstructor
export const UvRecordCardElement: UniversalVueElementConstructor = defineCustomElement(UvRecordCard) as unknown as UniversalVueElementConstructor
export const UvRecordDetailElement: UniversalVueElementConstructor = defineCustomElement(UvRecordDetail) as unknown as UniversalVueElementConstructor
export const UvRecordFieldElement: UniversalVueElementConstructor = defineCustomElement(UvRecordField) as unknown as UniversalVueElementConstructor
export const UvRecordActionsElement: UniversalVueElementConstructor = defineCustomElement(UvRecordActions) as unknown as UniversalVueElementConstructor
export const UvDefinitionListElement: UniversalVueElementConstructor = defineCustomElement(UvDefinitionList) as unknown as UniversalVueElementConstructor
export const UvPropertyListElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyList) as unknown as UniversalVueElementConstructor
export const UvMetadataListElement: UniversalVueElementConstructor = defineCustomElement(UvMetadataList) as unknown as UniversalVueElementConstructor
export const UvAttributeListElement: UniversalVueElementConstructor = defineCustomElement(UvAttributeList) as unknown as UniversalVueElementConstructor
export const UvSpecTableElement: UniversalVueElementConstructor = defineCustomElement(UvSpecTable) as unknown as UniversalVueElementConstructor
export const UvDonutChartElement: UniversalVueElementConstructor = defineCustomElement(UvDonutChart) as unknown as UniversalVueElementConstructor
export const UvAreaChartElement: UniversalVueElementConstructor = defineCustomElement(UvAreaChart) as unknown as UniversalVueElementConstructor
export const UvRadarChartElement: UniversalVueElementConstructor = defineCustomElement(UvRadarChart) as unknown as UniversalVueElementConstructor
export const UvScatterPlotElement: UniversalVueElementConstructor = defineCustomElement(UvScatterPlot) as unknown as UniversalVueElementConstructor
export const UvBubbleChartElement: UniversalVueElementConstructor = defineCustomElement(UvBubbleChart) as unknown as UniversalVueElementConstructor
export const UvCandlestickChartElement: UniversalVueElementConstructor = defineCustomElement(UvCandlestickChart) as unknown as UniversalVueElementConstructor
export const UvWaterfallChartElement: UniversalVueElementConstructor = defineCustomElement(UvWaterfallChart) as unknown as UniversalVueElementConstructor
export const UvStackedBarChartElement: UniversalVueElementConstructor = defineCustomElement(UvStackedBarChart) as unknown as UniversalVueElementConstructor
export const UvHistogramElement: UniversalVueElementConstructor = defineCustomElement(UvHistogram) as unknown as UniversalVueElementConstructor
export const UvBoxPlotElement: UniversalVueElementConstructor = defineCustomElement(UvBoxPlot) as unknown as UniversalVueElementConstructor
export const UvTimelineChartElement: UniversalVueElementConstructor = defineCustomElement(UvTimelineChart) as unknown as UniversalVueElementConstructor
export const UvGanttChartElement: UniversalVueElementConstructor = defineCustomElement(UvGanttChart) as unknown as UniversalVueElementConstructor
export const UvSankeyDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvSankeyDiagram) as unknown as UniversalVueElementConstructor
export const UvTreemapElement: UniversalVueElementConstructor = defineCustomElement(UvTreemap) as unknown as UniversalVueElementConstructor
export const UvSunburstElement: UniversalVueElementConstructor = defineCustomElement(UvSunburst) as unknown as UniversalVueElementConstructor
export const UvMapElement: UniversalVueElementConstructor = defineCustomElement(UvMap) as unknown as UniversalVueElementConstructor
export const UvMapMarkerElement: UniversalVueElementConstructor = defineCustomElement(UvMapMarker) as unknown as UniversalVueElementConstructor
export const UvMapPopupElement: UniversalVueElementConstructor = defineCustomElement(UvMapPopup) as unknown as UniversalVueElementConstructor
export const UvMapLegendElement: UniversalVueElementConstructor = defineCustomElement(UvMapLegend) as unknown as UniversalVueElementConstructor
export const UvMapControlsElement: UniversalVueElementConstructor = defineCustomElement(UvMapControls) as unknown as UniversalVueElementConstructor
export const UvFloorPlanElement: UniversalVueElementConstructor = defineCustomElement(UvFloorPlan) as unknown as UniversalVueElementConstructor
export const UvSeatMapElement: UniversalVueElementConstructor = defineCustomElement(UvSeatMap) as unknown as UniversalVueElementConstructor
export const UvRouteMapElement: UniversalVueElementConstructor = defineCustomElement(UvRouteMap) as unknown as UniversalVueElementConstructor
export const UvGeoPickerElement: UniversalVueElementConstructor = defineCustomElement(UvGeoPicker) as unknown as UniversalVueElementConstructor
export const UvCoordinateDisplayElement: UniversalVueElementConstructor = defineCustomElement(UvCoordinateDisplay) as unknown as UniversalVueElementConstructor
export const UvDocumentViewerElement: UniversalVueElementConstructor = defineCustomElement(UvDocumentViewer) as unknown as UniversalVueElementConstructor
export const UvPdfViewerElement: UniversalVueElementConstructor = defineCustomElement(UvPdfViewer) as unknown as UniversalVueElementConstructor
export const UvTextViewerElement: UniversalVueElementConstructor = defineCustomElement(UvTextViewer) as unknown as UniversalVueElementConstructor
export const UvCsvViewerElement: UniversalVueElementConstructor = defineCustomElement(UvCsvViewer) as unknown as UniversalVueElementConstructor
export const UvJsonViewerElement: UniversalVueElementConstructor = defineCustomElement(UvJsonViewer) as unknown as UniversalVueElementConstructor
export const UvDocumentOutlineElement: UniversalVueElementConstructor = defineCustomElement(UvDocumentOutline) as unknown as UniversalVueElementConstructor
export const UvTableOfContentsElement: UniversalVueElementConstructor = defineCustomElement(UvTableOfContents) as unknown as UniversalVueElementConstructor
export const UvFootnoteElement: UniversalVueElementConstructor = defineCustomElement(UvFootnote) as unknown as UniversalVueElementConstructor
export const UvCitationElement: UniversalVueElementConstructor = defineCustomElement(UvCitation) as unknown as UniversalVueElementConstructor
export const UvReferenceListElement: UniversalVueElementConstructor = defineCustomElement(UvReferenceList) as unknown as UniversalVueElementConstructor
export const UvFileManagerElement: UniversalVueElementConstructor = defineCustomElement(UvFileManager) as unknown as UniversalVueElementConstructor
export const UvFolderTreeElement: UniversalVueElementConstructor = defineCustomElement(UvFolderTree) as unknown as UniversalVueElementConstructor
export const UvFileCardElement: UniversalVueElementConstructor = defineCustomElement(UvFileCard) as unknown as UniversalVueElementConstructor
export const UvFolderCardElement: UniversalVueElementConstructor = defineCustomElement(UvFolderCard) as unknown as UniversalVueElementConstructor
export const UvStorageMeterElement: UniversalVueElementConstructor = defineCustomElement(UvStorageMeter) as unknown as UniversalVueElementConstructor
export const UvFileRenameElement: UniversalVueElementConstructor = defineCustomElement(UvFileRename) as unknown as UniversalVueElementConstructor
export const UvFileMoveElement: UniversalVueElementConstructor = defineCustomElement(UvFileMove) as unknown as UniversalVueElementConstructor
export const UvFileShareElement: UniversalVueElementConstructor = defineCustomElement(UvFileShare) as unknown as UniversalVueElementConstructor
export const UvFileVersionElement: UniversalVueElementConstructor = defineCustomElement(UvFileVersion) as unknown as UniversalVueElementConstructor
export const UvFileActivityElement: UniversalVueElementConstructor = defineCustomElement(UvFileActivity) as unknown as UniversalVueElementConstructor
export const UvMediaPlayerElement: UniversalVueElementConstructor = defineCustomElement(UvMediaPlayer) as unknown as UniversalVueElementConstructor
export const UvVideoPlayerElement: UniversalVueElementConstructor = defineCustomElement(UvVideoPlayer) as unknown as UniversalVueElementConstructor
export const UvAudioPlayerElement: UniversalVueElementConstructor = defineCustomElement(UvAudioPlayer) as unknown as UniversalVueElementConstructor
export const UvMediaControlsElement: UniversalVueElementConstructor = defineCustomElement(UvMediaControls) as unknown as UniversalVueElementConstructor
export const UvMediaTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvMediaTimeline) as unknown as UniversalVueElementConstructor
export const UvPlaylistElement: UniversalVueElementConstructor = defineCustomElement(UvPlaylist) as unknown as UniversalVueElementConstructor
export const UvPlaylistItemElement: UniversalVueElementConstructor = defineCustomElement(UvPlaylistItem) as unknown as UniversalVueElementConstructor
export const UvTranscriptElement: UniversalVueElementConstructor = defineCustomElement(UvTranscript) as unknown as UniversalVueElementConstructor
export const UvCaptionTrackElement: UniversalVueElementConstructor = defineCustomElement(UvCaptionTrack) as unknown as UniversalVueElementConstructor
export const UvVolumeControlElement: UniversalVueElementConstructor = defineCustomElement(UvVolumeControl) as unknown as UniversalVueElementConstructor
export const UvCameraPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvCameraPreview) as unknown as UniversalVueElementConstructor
export const UvMicrophoneMeterElement: UniversalVueElementConstructor = defineCustomElement(UvMicrophoneMeter) as unknown as UniversalVueElementConstructor
export const UvScreenSharePreviewElement: UniversalVueElementConstructor = defineCustomElement(UvScreenSharePreview) as unknown as UniversalVueElementConstructor
export const UvRecordingIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvRecordingIndicator) as unknown as UniversalVueElementConstructor
export const UvDevicePickerElement: UniversalVueElementConstructor = defineCustomElement(UvDevicePicker) as unknown as UniversalVueElementConstructor
export const UvProductGridElement: UniversalVueElementConstructor = defineCustomElement(UvProductGrid) as unknown as UniversalVueElementConstructor
export const UvProductListElement: UniversalVueElementConstructor = defineCustomElement(UvProductList) as unknown as UniversalVueElementConstructor
export const UvProductGalleryElement: UniversalVueElementConstructor = defineCustomElement(UvProductGallery) as unknown as UniversalVueElementConstructor
export const UvProductVariantElement: UniversalVueElementConstructor = defineCustomElement(UvProductVariant) as unknown as UniversalVueElementConstructor
export const UvProductOptionsElement: UniversalVueElementConstructor = defineCustomElement(UvProductOptions) as unknown as UniversalVueElementConstructor
export const UvCartElement: UniversalVueElementConstructor = defineCustomElement(UvCart) as unknown as UniversalVueElementConstructor
export const UvCartItemElement: UniversalVueElementConstructor = defineCustomElement(UvCartItem) as unknown as UniversalVueElementConstructor
export const UvCartSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvCartSummary) as unknown as UniversalVueElementConstructor
export const UvQuantitySelectorElement: UniversalVueElementConstructor = defineCustomElement(UvQuantitySelector) as unknown as UniversalVueElementConstructor
export const UvPromoCodeInputElement: UniversalVueElementConstructor = defineCustomElement(UvPromoCodeInput) as unknown as UniversalVueElementConstructor
export const UvCheckoutSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvCheckoutSummary) as unknown as UniversalVueElementConstructor
export const UvPaymentMethodElement: UniversalVueElementConstructor = defineCustomElement(UvPaymentMethod) as unknown as UniversalVueElementConstructor
export const UvPaymentCardElement: UniversalVueElementConstructor = defineCustomElement(UvPaymentCard) as unknown as UniversalVueElementConstructor
export const UvBillingAddressElement: UniversalVueElementConstructor = defineCustomElement(UvBillingAddress) as unknown as UniversalVueElementConstructor
export const UvOrderConfirmationElement: UniversalVueElementConstructor = defineCustomElement(UvOrderConfirmation) as unknown as UniversalVueElementConstructor
export const UvOrderListElement: UniversalVueElementConstructor = defineCustomElement(UvOrderList) as unknown as UniversalVueElementConstructor
export const UvOrderCardElement: UniversalVueElementConstructor = defineCustomElement(UvOrderCard) as unknown as UniversalVueElementConstructor
export const UvOrderStatusElement: UniversalVueElementConstructor = defineCustomElement(UvOrderStatus) as unknown as UniversalVueElementConstructor
export const UvShipmentTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvShipmentTracker) as unknown as UniversalVueElementConstructor
export const UvDeliveryEstimateElement: UniversalVueElementConstructor = defineCustomElement(UvDeliveryEstimate) as unknown as UniversalVueElementConstructor
export const UvPriceElement: UniversalVueElementConstructor = defineCustomElement(UvPrice) as unknown as UniversalVueElementConstructor
export const UvDiscountBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvDiscountBadge) as unknown as UniversalVueElementConstructor
export const UvTaxSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvTaxSummary) as unknown as UniversalVueElementConstructor
export const UvCurrencyDisplayElement: UniversalVueElementConstructor = defineCustomElement(UvCurrencyDisplay) as unknown as UniversalVueElementConstructor
export const UvInstallmentPlanElement: UniversalVueElementConstructor = defineCustomElement(UvInstallmentPlan) as unknown as UniversalVueElementConstructor
export const UvSocialShareElement: UniversalVueElementConstructor = defineCustomElement(UvSocialShare) as unknown as UniversalVueElementConstructor
export const UvReactionBarElement: UniversalVueElementConstructor = defineCustomElement(UvReactionBar) as unknown as UniversalVueElementConstructor
export const UvReactionPickerElement: UniversalVueElementConstructor = defineCustomElement(UvReactionPicker) as unknown as UniversalVueElementConstructor
export const UvLikeButtonElement: UniversalVueElementConstructor = defineCustomElement(UvLikeButton) as unknown as UniversalVueElementConstructor
export const UvFollowButtonElement: UniversalVueElementConstructor = defineCustomElement(UvFollowButton) as unknown as UniversalVueElementConstructor
export const UvUserListElement: UniversalVueElementConstructor = defineCustomElement(UvUserList) as unknown as UniversalVueElementConstructor
export const UvUserMenuElement: UniversalVueElementConstructor = defineCustomElement(UvUserMenu) as unknown as UniversalVueElementConstructor
export const UvUserPickerElement: UniversalVueElementConstructor = defineCustomElement(UvUserPicker) as unknown as UniversalVueElementConstructor
export const UvAssigneePickerElement: UniversalVueElementConstructor = defineCustomElement(UvAssigneePicker) as unknown as UniversalVueElementConstructor
export const UvTeamCardElement: UniversalVueElementConstructor = defineCustomElement(UvTeamCard) as unknown as UniversalVueElementConstructor
export const UvTeamListElement: UniversalVueElementConstructor = defineCustomElement(UvTeamList) as unknown as UniversalVueElementConstructor
export const UvMemberCardElement: UniversalVueElementConstructor = defineCustomElement(UvMemberCard) as unknown as UniversalVueElementConstructor
export const UvRoleBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvRoleBadge) as unknown as UniversalVueElementConstructor
export const UvPermissionMatrixElement: UniversalVueElementConstructor = defineCustomElement(UvPermissionMatrix) as unknown as UniversalVueElementConstructor
export const UvInviteFormElement: UniversalVueElementConstructor = defineCustomElement(UvInviteForm) as unknown as UniversalVueElementConstructor
export const UvProfileHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvProfileHeader) as unknown as UniversalVueElementConstructor
export const UvProfileStatsElement: UniversalVueElementConstructor = defineCustomElement(UvProfileStats) as unknown as UniversalVueElementConstructor
export const UvBioElement: UniversalVueElementConstructor = defineCustomElement(UvBio) as unknown as UniversalVueElementConstructor
export const UvSocialLinksElement: UniversalVueElementConstructor = defineCustomElement(UvSocialLinks) as unknown as UniversalVueElementConstructor
export const UvContactActionsElement: UniversalVueElementConstructor = defineCustomElement(UvContactActions) as unknown as UniversalVueElementConstructor
export const UvForumPostElement: UniversalVueElementConstructor = defineCustomElement(UvForumPost) as unknown as UniversalVueElementConstructor
export const UvForumThreadElement: UniversalVueElementConstructor = defineCustomElement(UvForumThread) as unknown as UniversalVueElementConstructor
export const UvReplyComposerElement: UniversalVueElementConstructor = defineCustomElement(UvReplyComposer) as unknown as UniversalVueElementConstructor
export const UvVoteControlElement: UniversalVueElementConstructor = defineCustomElement(UvVoteControl) as unknown as UniversalVueElementConstructor
export const UvModerationBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvModerationBadge) as unknown as UniversalVueElementConstructor
export const UvTaskCardElement: UniversalVueElementConstructor = defineCustomElement(UvTaskCard) as unknown as UniversalVueElementConstructor
export const UvTaskListElement: UniversalVueElementConstructor = defineCustomElement(UvTaskList) as unknown as UniversalVueElementConstructor
export const UvTaskBoardElement: UniversalVueElementConstructor = defineCustomElement(UvTaskBoard) as unknown as UniversalVueElementConstructor
export const UvTaskStatusElement: UniversalVueElementConstructor = defineCustomElement(UvTaskStatus) as unknown as UniversalVueElementConstructor
export const UvTaskPriorityElement: UniversalVueElementConstructor = defineCustomElement(UvTaskPriority) as unknown as UniversalVueElementConstructor
export const UvProjectCardElement: UniversalVueElementConstructor = defineCustomElement(UvProjectCard) as unknown as UniversalVueElementConstructor
export const UvProjectListElement: UniversalVueElementConstructor = defineCustomElement(UvProjectList) as unknown as UniversalVueElementConstructor
export const UvProjectOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvProjectOverview) as unknown as UniversalVueElementConstructor
export const UvProjectHealthElement: UniversalVueElementConstructor = defineCustomElement(UvProjectHealth) as unknown as UniversalVueElementConstructor
export const UvProjectTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvProjectTimeline) as unknown as UniversalVueElementConstructor
export const UvIssueCardElement: UniversalVueElementConstructor = defineCustomElement(UvIssueCard) as unknown as UniversalVueElementConstructor
export const UvIssueListElement: UniversalVueElementConstructor = defineCustomElement(UvIssueList) as unknown as UniversalVueElementConstructor
export const UvIssueDetailElement: UniversalVueElementConstructor = defineCustomElement(UvIssueDetail) as unknown as UniversalVueElementConstructor
export const UvIssueLabelElement: UniversalVueElementConstructor = defineCustomElement(UvIssueLabel) as unknown as UniversalVueElementConstructor
export const UvIssueStatusElement: UniversalVueElementConstructor = defineCustomElement(UvIssueStatus) as unknown as UniversalVueElementConstructor
export const UvPullRequestCardElement: UniversalVueElementConstructor = defineCustomElement(UvPullRequestCard) as unknown as UniversalVueElementConstructor
export const UvCommitListElement: UniversalVueElementConstructor = defineCustomElement(UvCommitList) as unknown as UniversalVueElementConstructor
export const UvCommitCardElement: UniversalVueElementConstructor = defineCustomElement(UvCommitCard) as unknown as UniversalVueElementConstructor
export const UvBranchSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvBranchSelector) as unknown as UniversalVueElementConstructor
export const UvDiffSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvDiffSummary) as unknown as UniversalVueElementConstructor
export const UvLogViewerElement: UniversalVueElementConstructor = defineCustomElement(UvLogViewer) as unknown as UniversalVueElementConstructor
export const UvConsoleElement: UniversalVueElementConstructor = defineCustomElement(UvConsole) as unknown as UniversalVueElementConstructor
export const UvTerminalElement: UniversalVueElementConstructor = defineCustomElement(UvTerminal) as unknown as UniversalVueElementConstructor
export const UvCommandOutputElement: UniversalVueElementConstructor = defineCustomElement(UvCommandOutput) as unknown as UniversalVueElementConstructor
export const UvErrorTraceElement: UniversalVueElementConstructor = defineCustomElement(UvErrorTrace) as unknown as UniversalVueElementConstructor
export const UvApiRequestElement: UniversalVueElementConstructor = defineCustomElement(UvApiRequest) as unknown as UniversalVueElementConstructor
export const UvApiResponseElement: UniversalVueElementConstructor = defineCustomElement(UvApiResponse) as unknown as UniversalVueElementConstructor
export const UvHttpStatusElement: UniversalVueElementConstructor = defineCustomElement(UvHttpStatus) as unknown as UniversalVueElementConstructor
export const UvEndpointCardElement: UniversalVueElementConstructor = defineCustomElement(UvEndpointCard) as unknown as UniversalVueElementConstructor
export const UvSchemaViewerElement: UniversalVueElementConstructor = defineCustomElement(UvSchemaViewer) as unknown as UniversalVueElementConstructor
export const UvDatabaseTableElement: UniversalVueElementConstructor = defineCustomElement(UvDatabaseTable) as unknown as UniversalVueElementConstructor
export const UvDatabaseColumnElement: UniversalVueElementConstructor = defineCustomElement(UvDatabaseColumn) as unknown as UniversalVueElementConstructor
export const UvQueryEditorElement: UniversalVueElementConstructor = defineCustomElement(UvQueryEditor) as unknown as UniversalVueElementConstructor
export const UvQueryResultElement: UniversalVueElementConstructor = defineCustomElement(UvQueryResult) as unknown as UniversalVueElementConstructor
export const UvConnectionStatusElement: UniversalVueElementConstructor = defineCustomElement(UvConnectionStatus) as unknown as UniversalVueElementConstructor
export const UvMetricGroupElement: UniversalVueElementConstructor = defineCustomElement(UvMetricGroup) as unknown as UniversalVueElementConstructor
export const UvThresholdElement: UniversalVueElementConstructor = defineCustomElement(UvThreshold) as unknown as UniversalVueElementConstructor
export const UvHealthIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvHealthIndicator) as unknown as UniversalVueElementConstructor
export const UvStatusOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvStatusOverview) as unknown as UniversalVueElementConstructor
export const UvServiceLevelElement: UniversalVueElementConstructor = defineCustomElement(UvServiceLevel) as unknown as UniversalVueElementConstructor
export const UvAlertRuleElement: UniversalVueElementConstructor = defineCustomElement(UvAlertRule) as unknown as UniversalVueElementConstructor
export const UvIncidentCardElement: UniversalVueElementConstructor = defineCustomElement(UvIncidentCard) as unknown as UniversalVueElementConstructor
export const UvIncidentTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvIncidentTimeline) as unknown as UniversalVueElementConstructor
export const UvServiceStatusElement: UniversalVueElementConstructor = defineCustomElement(UvServiceStatus) as unknown as UniversalVueElementConstructor
export const UvUptimeChartElement: UniversalVueElementConstructor = defineCustomElement(UvUptimeChart) as unknown as UniversalVueElementConstructor
export const UvSecurityBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityBadge) as unknown as UniversalVueElementConstructor
export const UvRiskScoreElement: UniversalVueElementConstructor = defineCustomElement(UvRiskScore) as unknown as UniversalVueElementConstructor
export const UvAuditLogElement: UniversalVueElementConstructor = defineCustomElement(UvAuditLog) as unknown as UniversalVueElementConstructor
export const UvAccessReviewElement: UniversalVueElementConstructor = defineCustomElement(UvAccessReview) as unknown as UniversalVueElementConstructor
export const UvSessionListElement: UniversalVueElementConstructor = defineCustomElement(UvSessionList) as unknown as UniversalVueElementConstructor
export const UvLoginFormElement: UniversalVueElementConstructor = defineCustomElement(UvLoginForm) as unknown as UniversalVueElementConstructor
export const UvSignupFormElement: UniversalVueElementConstructor = defineCustomElement(UvSignupForm) as unknown as UniversalVueElementConstructor
export const UvForgotPasswordFormElement: UniversalVueElementConstructor = defineCustomElement(UvForgotPasswordForm) as unknown as UniversalVueElementConstructor
export const UvTwoFactorFormElement: UniversalVueElementConstructor = defineCustomElement(UvTwoFactorForm) as unknown as UniversalVueElementConstructor
export const UvPasskeyPromptElement: UniversalVueElementConstructor = defineCustomElement(UvPasskeyPrompt) as unknown as UniversalVueElementConstructor
export const UvNotificationSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvNotificationSettings) as unknown as UniversalVueElementConstructor
export const UvPrivacySettingsElement: UniversalVueElementConstructor = defineCustomElement(UvPrivacySettings) as unknown as UniversalVueElementConstructor
export const UvPreferencePanelElement: UniversalVueElementConstructor = defineCustomElement(UvPreferencePanel) as unknown as UniversalVueElementConstructor
export const UvAccountSwitcherElement: UniversalVueElementConstructor = defineCustomElement(UvAccountSwitcher) as unknown as UniversalVueElementConstructor
export const UvSessionCardElement: UniversalVueElementConstructor = defineCustomElement(UvSessionCard) as unknown as UniversalVueElementConstructor
export const UvAiPromptElement: UniversalVueElementConstructor = defineCustomElement(UvAiPrompt) as unknown as UniversalVueElementConstructor
export const UvAiResponseElement: UniversalVueElementConstructor = defineCustomElement(UvAiResponse) as unknown as UniversalVueElementConstructor
export const UvAiComposerElement: UniversalVueElementConstructor = defineCustomElement(UvAiComposer) as unknown as UniversalVueElementConstructor
export const UvModelSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvModelSelector) as unknown as UniversalVueElementConstructor
export const UvTokenUsageElement: UniversalVueElementConstructor = defineCustomElement(UvTokenUsage) as unknown as UniversalVueElementConstructor
export const UvFeatureFlagElement: UniversalVueElementConstructor = defineCustomElement(UvFeatureFlag) as unknown as UniversalVueElementConstructor
export const UvExperimentCardElement: UniversalVueElementConstructor = defineCustomElement(UvExperimentCard) as unknown as UniversalVueElementConstructor
export const UvVariantPickerElement: UniversalVueElementConstructor = defineCustomElement(UvVariantPicker) as unknown as UniversalVueElementConstructor
export const UvReleaseChannelElement: UniversalVueElementConstructor = defineCustomElement(UvReleaseChannel) as unknown as UniversalVueElementConstructor
export const UvVersionBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvVersionBadge) as unknown as UniversalVueElementConstructor
export const UvSkipTargetElement: UniversalVueElementConstructor = defineCustomElement(UvSkipTarget) as unknown as UniversalVueElementConstructor
export const UvFocusReturnElement: UniversalVueElementConstructor = defineCustomElement(UvFocusReturn) as unknown as UniversalVueElementConstructor
export const UvKeyboardHintElement: UniversalVueElementConstructor = defineCustomElement(UvKeyboardHint) as unknown as UniversalVueElementConstructor
export const UvScreenReaderOnlyElement: UniversalVueElementConstructor = defineCustomElement(UvScreenReaderOnly) as unknown as UniversalVueElementConstructor
export const UvHighContrastToggleElement: UniversalVueElementConstructor = defineCustomElement(UvHighContrastToggle) as unknown as UniversalVueElementConstructor
export const UvBreadcrumbOverflowElement: UniversalVueElementConstructor = defineCustomElement(UvBreadcrumbOverflow) as unknown as UniversalVueElementConstructor
export const UvNavDrawerElement: UniversalVueElementConstructor = defineCustomElement(UvNavDrawer) as unknown as UniversalVueElementConstructor
export const UvNavTabsElement: UniversalVueElementConstructor = defineCustomElement(UvNavTabs) as unknown as UniversalVueElementConstructor
export const UvSectionNavElement: UniversalVueElementConstructor = defineCustomElement(UvSectionNav) as unknown as UniversalVueElementConstructor
export const UvPaginationCursorElement: UniversalVueElementConstructor = defineCustomElement(UvPaginationCursor) as unknown as UniversalVueElementConstructor
export const UvCommandNavElement: UniversalVueElementConstructor = defineCustomElement(UvCommandNav) as unknown as UniversalVueElementConstructor
export const UvWorkspaceSwitcherElement: UniversalVueElementConstructor = defineCustomElement(UvWorkspaceSwitcher) as unknown as UniversalVueElementConstructor
export const UvOrganizationSwitcherElement: UniversalVueElementConstructor = defineCustomElement(UvOrganizationSwitcher) as unknown as UniversalVueElementConstructor
export const UvProjectSwitcherElement: UniversalVueElementConstructor = defineCustomElement(UvProjectSwitcher) as unknown as UniversalVueElementConstructor
export const UvEnvironmentSwitcherElement: UniversalVueElementConstructor = defineCustomElement(UvEnvironmentSwitcher) as unknown as UniversalVueElementConstructor
export const UvConfirmButtonElement: UniversalVueElementConstructor = defineCustomElement(UvConfirmButton) as unknown as UniversalVueElementConstructor
export const UvAsyncButtonElement: UniversalVueElementConstructor = defineCustomElement(UvAsyncButton) as unknown as UniversalVueElementConstructor
export const UvDestructiveButtonElement: UniversalVueElementConstructor = defineCustomElement(UvDestructiveButton) as unknown as UniversalVueElementConstructor
export const UvUndoButtonElement: UniversalVueElementConstructor = defineCustomElement(UvUndoButton) as unknown as UniversalVueElementConstructor
export const UvRedoButtonElement: UniversalVueElementConstructor = defineCustomElement(UvRedoButton) as unknown as UniversalVueElementConstructor
export const UvFavoriteButtonElement: UniversalVueElementConstructor = defineCustomElement(UvFavoriteButton) as unknown as UniversalVueElementConstructor
export const UvBookmarkButtonElement: UniversalVueElementConstructor = defineCustomElement(UvBookmarkButton) as unknown as UniversalVueElementConstructor
export const UvPinButtonElement: UniversalVueElementConstructor = defineCustomElement(UvPinButton) as unknown as UniversalVueElementConstructor
export const UvArchiveButtonElement: UniversalVueElementConstructor = defineCustomElement(UvArchiveButton) as unknown as UniversalVueElementConstructor
export const UvRestoreButtonElement: UniversalVueElementConstructor = defineCustomElement(UvRestoreButton) as unknown as UniversalVueElementConstructor
export const UvSearchFieldElement: UniversalVueElementConstructor = defineCustomElement(UvSearchField) as unknown as UniversalVueElementConstructor
export const UvFilterInputElement: UniversalVueElementConstructor = defineCustomElement(UvFilterInput) as unknown as UniversalVueElementConstructor
export const UvSlugInputElement: UniversalVueElementConstructor = defineCustomElement(UvSlugInput) as unknown as UniversalVueElementConstructor
export const UvHandleInputElement: UniversalVueElementConstructor = defineCustomElement(UvHandleInput) as unknown as UniversalVueElementConstructor
export const UvDomainInputElement: UniversalVueElementConstructor = defineCustomElement(UvDomainInput) as unknown as UniversalVueElementConstructor
export const UvSecretInputElement: UniversalVueElementConstructor = defineCustomElement(UvSecretInput) as unknown as UniversalVueElementConstructor
export const UvApiKeyInputElement: UniversalVueElementConstructor = defineCustomElement(UvApiKeyInput) as unknown as UniversalVueElementConstructor
export const UvRecoveryCodeInputElement: UniversalVueElementConstructor = defineCustomElement(UvRecoveryCodeInput) as unknown as UniversalVueElementConstructor
export const UvSecurityQuestionElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityQuestion) as unknown as UniversalVueElementConstructor
export const UvCaptchaFieldElement: UniversalVueElementConstructor = defineCustomElement(UvCaptchaField) as unknown as UniversalVueElementConstructor
export const UvFirstNameInputElement: UniversalVueElementConstructor = defineCustomElement(UvFirstNameInput) as unknown as UniversalVueElementConstructor
export const UvLastNameInputElement: UniversalVueElementConstructor = defineCustomElement(UvLastNameInput) as unknown as UniversalVueElementConstructor
export const UvMiddleNameInputElement: UniversalVueElementConstructor = defineCustomElement(UvMiddleNameInput) as unknown as UniversalVueElementConstructor
export const UvPronounSelectElement: UniversalVueElementConstructor = defineCustomElement(UvPronounSelect) as unknown as UniversalVueElementConstructor
export const UvBirthdateInputElement: UniversalVueElementConstructor = defineCustomElement(UvBirthdateInput) as unknown as UniversalVueElementConstructor
export const UvContactMethodSelectElement: UniversalVueElementConstructor = defineCustomElement(UvContactMethodSelect) as unknown as UniversalVueElementConstructor
export const UvTelephoneInputElement: UniversalVueElementConstructor = defineCustomElement(UvTelephoneInput) as unknown as UniversalVueElementConstructor
export const UvFaxInputElement: UniversalVueElementConstructor = defineCustomElement(UvFaxInput) as unknown as UniversalVueElementConstructor
export const UvWebsiteInputElement: UniversalVueElementConstructor = defineCustomElement(UvWebsiteInput) as unknown as UniversalVueElementConstructor
export const UvSocialHandleInputElement: UniversalVueElementConstructor = defineCustomElement(UvSocialHandleInput) as unknown as UniversalVueElementConstructor
export const UvStreetAddressInputElement: UniversalVueElementConstructor = defineCustomElement(UvStreetAddressInput) as unknown as UniversalVueElementConstructor
export const UvApartmentInputElement: UniversalVueElementConstructor = defineCustomElement(UvApartmentInput) as unknown as UniversalVueElementConstructor
export const UvProvinceSelectElement: UniversalVueElementConstructor = defineCustomElement(UvProvinceSelect) as unknown as UniversalVueElementConstructor
export const UvStateSelectElement: UniversalVueElementConstructor = defineCustomElement(UvStateSelect) as unknown as UniversalVueElementConstructor
export const UvZipCodeInputElement: UniversalVueElementConstructor = defineCustomElement(UvZipCodeInput) as unknown as UniversalVueElementConstructor
export const UvBankAccountInputElement: UniversalVueElementConstructor = defineCustomElement(UvBankAccountInput) as unknown as UniversalVueElementConstructor
export const UvRoutingNumberInputElement: UniversalVueElementConstructor = defineCustomElement(UvRoutingNumberInput) as unknown as UniversalVueElementConstructor
export const UvIbanInputElement: UniversalVueElementConstructor = defineCustomElement(UvIbanInput) as unknown as UniversalVueElementConstructor
export const UvSwiftInputElement: UniversalVueElementConstructor = defineCustomElement(UvSwiftInput) as unknown as UniversalVueElementConstructor
export const UvCardNumberInputElement: UniversalVueElementConstructor = defineCustomElement(UvCardNumberInput) as unknown as UniversalVueElementConstructor
export const UvExpiryInputElement: UniversalVueElementConstructor = defineCustomElement(UvExpiryInput) as unknown as UniversalVueElementConstructor
export const UvCvcInputElement: UniversalVueElementConstructor = defineCustomElement(UvCvcInput) as unknown as UniversalVueElementConstructor
export const UvAmountInputElement: UniversalVueElementConstructor = defineCustomElement(UvAmountInput) as unknown as UniversalVueElementConstructor
export const UvExchangeRateInputElement: UniversalVueElementConstructor = defineCustomElement(UvExchangeRateInput) as unknown as UniversalVueElementConstructor
export const UvBudgetInputElement: UniversalVueElementConstructor = defineCustomElement(UvBudgetInput) as unknown as UniversalVueElementConstructor
export const UvLengthInputElement: UniversalVueElementConstructor = defineCustomElement(UvLengthInput) as unknown as UniversalVueElementConstructor
export const UvWeightInputElement: UniversalVueElementConstructor = defineCustomElement(UvWeightInput) as unknown as UniversalVueElementConstructor
export const UvTemperatureInputElement: UniversalVueElementConstructor = defineCustomElement(UvTemperatureInput) as unknown as UniversalVueElementConstructor
export const UvSpeedInputElement: UniversalVueElementConstructor = defineCustomElement(UvSpeedInput) as unknown as UniversalVueElementConstructor
export const UvVolumeInputElement: UniversalVueElementConstructor = defineCustomElement(UvVolumeInput) as unknown as UniversalVueElementConstructor
export const UvAreaInputElement: UniversalVueElementConstructor = defineCustomElement(UvAreaInput) as unknown as UniversalVueElementConstructor
export const UvPressureInputElement: UniversalVueElementConstructor = defineCustomElement(UvPressureInput) as unknown as UniversalVueElementConstructor
export const UvEnergyInputElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyInput) as unknown as UniversalVueElementConstructor
export const UvPowerInputElement: UniversalVueElementConstructor = defineCustomElement(UvPowerInput) as unknown as UniversalVueElementConstructor
export const UvFrequencyInputElement: UniversalVueElementConstructor = defineCustomElement(UvFrequencyInput) as unknown as UniversalVueElementConstructor
export const UvValidationMessageElement: UniversalVueElementConstructor = defineCustomElement(UvValidationMessage) as unknown as UniversalVueElementConstructor
export const UvValidationSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvValidationSummary) as unknown as UniversalVueElementConstructor
export const UvFieldErrorElement: UniversalVueElementConstructor = defineCustomElement(UvFieldError) as unknown as UniversalVueElementConstructor
export const UvFieldSuccessElement: UniversalVueElementConstructor = defineCustomElement(UvFieldSuccess) as unknown as UniversalVueElementConstructor
export const UvRequiredIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvRequiredIndicator) as unknown as UniversalVueElementConstructor
export const UvOptionCardElement: UniversalVueElementConstructor = defineCustomElement(UvOptionCard) as unknown as UniversalVueElementConstructor
export const UvOptionGridElement: UniversalVueElementConstructor = defineCustomElement(UvOptionGrid) as unknown as UniversalVueElementConstructor
export const UvChoiceChipElement: UniversalVueElementConstructor = defineCustomElement(UvChoiceChip) as unknown as UniversalVueElementConstructor
export const UvChoiceListElement: UniversalVueElementConstructor = defineCustomElement(UvChoiceList) as unknown as UniversalVueElementConstructor
export const UvRankedChoiceElement: UniversalVueElementConstructor = defineCustomElement(UvRankedChoice) as unknown as UniversalVueElementConstructor
export const UvImageUploadElement: UniversalVueElementConstructor = defineCustomElement(UvImageUpload) as unknown as UniversalVueElementConstructor
export const UvVideoUploadElement: UniversalVueElementConstructor = defineCustomElement(UvVideoUpload) as unknown as UniversalVueElementConstructor
export const UvAudioUploadElement: UniversalVueElementConstructor = defineCustomElement(UvAudioUpload) as unknown as UniversalVueElementConstructor
export const UvDocumentUploadElement: UniversalVueElementConstructor = defineCustomElement(UvDocumentUpload) as unknown as UniversalVueElementConstructor
export const UvAvatarUploadElement: UniversalVueElementConstructor = defineCustomElement(UvAvatarUpload) as unknown as UniversalVueElementConstructor
export const UvQuarterPickerElement: UniversalVueElementConstructor = defineCustomElement(UvQuarterPicker) as unknown as UniversalVueElementConstructor
export const UvFiscalYearPickerElement: UniversalVueElementConstructor = defineCustomElement(UvFiscalYearPicker) as unknown as UniversalVueElementConstructor
export const UvTimeRangePickerElement: UniversalVueElementConstructor = defineCustomElement(UvTimeRangePicker) as unknown as UniversalVueElementConstructor
export const UvTimezonePickerElement: UniversalVueElementConstructor = defineCustomElement(UvTimezonePicker) as unknown as UniversalVueElementConstructor
export const UvCronInputElement: UniversalVueElementConstructor = defineCustomElement(UvCronInput) as unknown as UniversalVueElementConstructor
export const UvCountdownElement: UniversalVueElementConstructor = defineCustomElement(UvCountdown) as unknown as UniversalVueElementConstructor
export const UvStopwatchElement: UniversalVueElementConstructor = defineCustomElement(UvStopwatch) as unknown as UniversalVueElementConstructor
export const UvTimerElement: UniversalVueElementConstructor = defineCustomElement(UvTimer) as unknown as UniversalVueElementConstructor
export const UvWorldClockElement: UniversalVueElementConstructor = defineCustomElement(UvWorldClock) as unknown as UniversalVueElementConstructor
export const UvRelativeTimeElement: UniversalVueElementConstructor = defineCustomElement(UvRelativeTime) as unknown as UniversalVueElementConstructor
export const UvDateBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvDateBadge) as unknown as UniversalVueElementConstructor
export const UvTimeBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvTimeBadge) as unknown as UniversalVueElementConstructor
export const UvDurationBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvDurationBadge) as unknown as UniversalVueElementConstructor
export const UvScheduleBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvScheduleBadge) as unknown as UniversalVueElementConstructor
export const UvAvailabilityBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvAvailabilityBadge) as unknown as UniversalVueElementConstructor
export const UvDataCardElement: UniversalVueElementConstructor = defineCustomElement(UvDataCard) as unknown as UniversalVueElementConstructor
export const UvDataListElement: UniversalVueElementConstructor = defineCustomElement(UvDataList) as unknown as UniversalVueElementConstructor
export const UvDataDetailElement: UniversalVueElementConstructor = defineCustomElement(UvDataDetail) as unknown as UniversalVueElementConstructor
export const UvDataFieldElement: UniversalVueElementConstructor = defineCustomElement(UvDataField) as unknown as UniversalVueElementConstructor
export const UvDataActionsElement: UniversalVueElementConstructor = defineCustomElement(UvDataActions) as unknown as UniversalVueElementConstructor
export const UvSummaryCardElement: UniversalVueElementConstructor = defineCustomElement(UvSummaryCard) as unknown as UniversalVueElementConstructor
export const UvSummaryListElement: UniversalVueElementConstructor = defineCustomElement(UvSummaryList) as unknown as UniversalVueElementConstructor
export const UvSummaryRowElement: UniversalVueElementConstructor = defineCustomElement(UvSummaryRow) as unknown as UniversalVueElementConstructor
export const UvSummaryGroupElement: UniversalVueElementConstructor = defineCustomElement(UvSummaryGroup) as unknown as UniversalVueElementConstructor
export const UvSummaryFooterElement: UniversalVueElementConstructor = defineCustomElement(UvSummaryFooter) as unknown as UniversalVueElementConstructor
export const UvEntityCardElement: UniversalVueElementConstructor = defineCustomElement(UvEntityCard) as unknown as UniversalVueElementConstructor
export const UvEntityListElement: UniversalVueElementConstructor = defineCustomElement(UvEntityList) as unknown as UniversalVueElementConstructor
export const UvEntityHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvEntityHeader) as unknown as UniversalVueElementConstructor
export const UvEntityMetadataElement: UniversalVueElementConstructor = defineCustomElement(UvEntityMetadata) as unknown as UniversalVueElementConstructor
export const UvEntityActionsElement: UniversalVueElementConstructor = defineCustomElement(UvEntityActions) as unknown as UniversalVueElementConstructor
export const UvTimelineListElement: UniversalVueElementConstructor = defineCustomElement(UvTimelineList) as unknown as UniversalVueElementConstructor
export const UvAuditTrailElement: UniversalVueElementConstructor = defineCustomElement(UvAuditTrail) as unknown as UniversalVueElementConstructor
export const UvChangeLogElement: UniversalVueElementConstructor = defineCustomElement(UvChangeLog) as unknown as UniversalVueElementConstructor
export const UvRevisionListElement: UniversalVueElementConstructor = defineCustomElement(UvRevisionList) as unknown as UniversalVueElementConstructor
export const UvHistoryPanelElement: UniversalVueElementConstructor = defineCustomElement(UvHistoryPanel) as unknown as UniversalVueElementConstructor
export const UvEditableTableElement: UniversalVueElementConstructor = defineCustomElement(UvEditableTable) as unknown as UniversalVueElementConstructor
export const UvResponsiveTableElement: UniversalVueElementConstructor = defineCustomElement(UvResponsiveTable) as unknown as UniversalVueElementConstructor
export const UvCompactTableElement: UniversalVueElementConstructor = defineCustomElement(UvCompactTable) as unknown as UniversalVueElementConstructor
export const UvComparisonTableElement: UniversalVueElementConstructor = defineCustomElement(UvComparisonTable) as unknown as UniversalVueElementConstructor
export const UvRankingTableElement: UniversalVueElementConstructor = defineCustomElement(UvRankingTable) as unknown as UniversalVueElementConstructor
export const UvGroupedTableElement: UniversalVueElementConstructor = defineCustomElement(UvGroupedTable) as unknown as UniversalVueElementConstructor
export const UvNestedTableElement: UniversalVueElementConstructor = defineCustomElement(UvNestedTable) as unknown as UniversalVueElementConstructor
export const UvStickyTableElement: UniversalVueElementConstructor = defineCustomElement(UvStickyTable) as unknown as UniversalVueElementConstructor
export const UvSelectableTableElement: UniversalVueElementConstructor = defineCustomElement(UvSelectableTable) as unknown as UniversalVueElementConstructor
export const UvExpandableTableElement: UniversalVueElementConstructor = defineCustomElement(UvExpandableTable) as unknown as UniversalVueElementConstructor
export const UvCheckListElement: UniversalVueElementConstructor = defineCustomElement(UvCheckList) as unknown as UniversalVueElementConstructor
export const UvNumberedListElement: UniversalVueElementConstructor = defineCustomElement(UvNumberedList) as unknown as UniversalVueElementConstructor
export const UvIconListElement: UniversalVueElementConstructor = defineCustomElement(UvIconList) as unknown as UniversalVueElementConstructor
export const UvLinkListElement: UniversalVueElementConstructor = defineCustomElement(UvLinkList) as unknown as UniversalVueElementConstructor
export const UvActionListElement: UniversalVueElementConstructor = defineCustomElement(UvActionList) as unknown as UniversalVueElementConstructor
export const UvGroupedListElement: UniversalVueElementConstructor = defineCustomElement(UvGroupedList) as unknown as UniversalVueElementConstructor
export const UvSectionedListElement: UniversalVueElementConstructor = defineCustomElement(UvSectionedList) as unknown as UniversalVueElementConstructor
export const UvDenseListElement: UniversalVueElementConstructor = defineCustomElement(UvDenseList) as unknown as UniversalVueElementConstructor
export const UvContentListElement: UniversalVueElementConstructor = defineCustomElement(UvContentList) as unknown as UniversalVueElementConstructor
export const UvDescriptionGridElement: UniversalVueElementConstructor = defineCustomElement(UvDescriptionGrid) as unknown as UniversalVueElementConstructor
export const UvColumnChartElement: UniversalVueElementConstructor = defineCustomElement(UvColumnChart) as unknown as UniversalVueElementConstructor
export const UvComboChartElement: UniversalVueElementConstructor = defineCustomElement(UvComboChart) as unknown as UniversalVueElementConstructor
export const UvStepChartElement: UniversalVueElementConstructor = defineCustomElement(UvStepChart) as unknown as UniversalVueElementConstructor
export const UvRangeChartElement: UniversalVueElementConstructor = defineCustomElement(UvRangeChart) as unknown as UniversalVueElementConstructor
export const UvBulletChartElement: UniversalVueElementConstructor = defineCustomElement(UvBulletChart) as unknown as UniversalVueElementConstructor
export const UvPolarChartElement: UniversalVueElementConstructor = defineCustomElement(UvPolarChart) as unknown as UniversalVueElementConstructor
export const UvChordDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvChordDiagram) as unknown as UniversalVueElementConstructor
export const UvNetworkGraphElement: UniversalVueElementConstructor = defineCustomElement(UvNetworkGraph) as unknown as UniversalVueElementConstructor
export const UvFlowChartElement: UniversalVueElementConstructor = defineCustomElement(UvFlowChart) as unknown as UniversalVueElementConstructor
export const UvDependencyGraphElement: UniversalVueElementConstructor = defineCustomElement(UvDependencyGraph) as unknown as UniversalVueElementConstructor
export const UvCalendarHeatmapElement: UniversalVueElementConstructor = defineCustomElement(UvCalendarHeatmap) as unknown as UniversalVueElementConstructor
export const UvCohortChartElement: UniversalVueElementConstructor = defineCustomElement(UvCohortChart) as unknown as UniversalVueElementConstructor
export const UvRetentionChartElement: UniversalVueElementConstructor = defineCustomElement(UvRetentionChart) as unknown as UniversalVueElementConstructor
export const UvConversionChartElement: UniversalVueElementConstructor = defineCustomElement(UvConversionChart) as unknown as UniversalVueElementConstructor
export const UvGrowthChartElement: UniversalVueElementConstructor = defineCustomElement(UvGrowthChart) as unknown as UniversalVueElementConstructor
export const UvForecastChartElement: UniversalVueElementConstructor = defineCustomElement(UvForecastChart) as unknown as UniversalVueElementConstructor
export const UvAnomalyChartElement: UniversalVueElementConstructor = defineCustomElement(UvAnomalyChart) as unknown as UniversalVueElementConstructor
export const UvBaselineChartElement: UniversalVueElementConstructor = defineCustomElement(UvBaselineChart) as unknown as UniversalVueElementConstructor
export const UvVarianceChartElement: UniversalVueElementConstructor = defineCustomElement(UvVarianceChart) as unknown as UniversalVueElementConstructor
export const UvTargetChartElement: UniversalVueElementConstructor = defineCustomElement(UvTargetChart) as unknown as UniversalVueElementConstructor
export const UvMetricCardElement: UniversalVueElementConstructor = defineCustomElement(UvMetricCard) as unknown as UniversalVueElementConstructor
export const UvMetricTableElement: UniversalVueElementConstructor = defineCustomElement(UvMetricTable) as unknown as UniversalVueElementConstructor
export const UvMetricChartElement: UniversalVueElementConstructor = defineCustomElement(UvMetricChart) as unknown as UniversalVueElementConstructor
export const UvMetricTrendElement: UniversalVueElementConstructor = defineCustomElement(UvMetricTrend) as unknown as UniversalVueElementConstructor
export const UvMetricDeltaElement: UniversalVueElementConstructor = defineCustomElement(UvMetricDelta) as unknown as UniversalVueElementConstructor
export const UvDashboardHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvDashboardHeader) as unknown as UniversalVueElementConstructor
export const UvDashboardSectionElement: UniversalVueElementConstructor = defineCustomElement(UvDashboardSection) as unknown as UniversalVueElementConstructor
export const UvDashboardToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvDashboardToolbar) as unknown as UniversalVueElementConstructor
export const UvDashboardFilterElement: UniversalVueElementConstructor = defineCustomElement(UvDashboardFilter) as unknown as UniversalVueElementConstructor
export const UvDashboardEmptyStateElement: UniversalVueElementConstructor = defineCustomElement(UvDashboardEmptyState) as unknown as UniversalVueElementConstructor
export const UvMapSearchElement: UniversalVueElementConstructor = defineCustomElement(UvMapSearch) as unknown as UniversalVueElementConstructor
export const UvMapLayerControlElement: UniversalVueElementConstructor = defineCustomElement(UvMapLayerControl) as unknown as UniversalVueElementConstructor
export const UvMapScaleElement: UniversalVueElementConstructor = defineCustomElement(UvMapScale) as unknown as UniversalVueElementConstructor
export const UvMapAttributionElement: UniversalVueElementConstructor = defineCustomElement(UvMapAttribution) as unknown as UniversalVueElementConstructor
export const UvMapTooltipElement: UniversalVueElementConstructor = defineCustomElement(UvMapTooltip) as unknown as UniversalVueElementConstructor
export const UvMapClusterElement: UniversalVueElementConstructor = defineCustomElement(UvMapCluster) as unknown as UniversalVueElementConstructor
export const UvMapPolygonElement: UniversalVueElementConstructor = defineCustomElement(UvMapPolygon) as unknown as UniversalVueElementConstructor
export const UvMapPolylineElement: UniversalVueElementConstructor = defineCustomElement(UvMapPolyline) as unknown as UniversalVueElementConstructor
export const UvMapCircleElement: UniversalVueElementConstructor = defineCustomElement(UvMapCircle) as unknown as UniversalVueElementConstructor
export const UvMapHeatLayerElement: UniversalVueElementConstructor = defineCustomElement(UvMapHeatLayer) as unknown as UniversalVueElementConstructor
export const UvLatitudeInputElement: UniversalVueElementConstructor = defineCustomElement(UvLatitudeInput) as unknown as UniversalVueElementConstructor
export const UvLongitudeInputElement: UniversalVueElementConstructor = defineCustomElement(UvLongitudeInput) as unknown as UniversalVueElementConstructor
export const UvAltitudeInputElement: UniversalVueElementConstructor = defineCustomElement(UvAltitudeInput) as unknown as UniversalVueElementConstructor
export const UvGeoFenceElement: UniversalVueElementConstructor = defineCustomElement(UvGeoFence) as unknown as UniversalVueElementConstructor
export const UvGeoBoundsElement: UniversalVueElementConstructor = defineCustomElement(UvGeoBounds) as unknown as UniversalVueElementConstructor
export const UvDocHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvDocHeader) as unknown as UniversalVueElementConstructor
export const UvDocFooterElement: UniversalVueElementConstructor = defineCustomElement(UvDocFooter) as unknown as UniversalVueElementConstructor
export const UvDocSectionElement: UniversalVueElementConstructor = defineCustomElement(UvDocSection) as unknown as UniversalVueElementConstructor
export const UvDocPageElement: UniversalVueElementConstructor = defineCustomElement(UvDocPage) as unknown as UniversalVueElementConstructor
export const UvDocMetadataElement: UniversalVueElementConstructor = defineCustomElement(UvDocMetadata) as unknown as UniversalVueElementConstructor
export const UvPageNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvPageNavigator) as unknown as UniversalVueElementConstructor
export const UvPageThumbnailElement: UniversalVueElementConstructor = defineCustomElement(UvPageThumbnail) as unknown as UniversalVueElementConstructor
export const UvPageCountElement: UniversalVueElementConstructor = defineCustomElement(UvPageCount) as unknown as UniversalVueElementConstructor
export const UvZoomControlElement: UniversalVueElementConstructor = defineCustomElement(UvZoomControl) as unknown as UniversalVueElementConstructor
export const UvRotationControlElement: UniversalVueElementConstructor = defineCustomElement(UvRotationControl) as unknown as UniversalVueElementConstructor
export const UvAnnotationToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvAnnotationToolbar) as unknown as UniversalVueElementConstructor
export const UvAnnotationListElement: UniversalVueElementConstructor = defineCustomElement(UvAnnotationList) as unknown as UniversalVueElementConstructor
export const UvAnnotationCardElement: UniversalVueElementConstructor = defineCustomElement(UvAnnotationCard) as unknown as UniversalVueElementConstructor
export const UvHighlightToolElement: UniversalVueElementConstructor = defineCustomElement(UvHighlightTool) as unknown as UniversalVueElementConstructor
export const UvCommentToolElement: UniversalVueElementConstructor = defineCustomElement(UvCommentTool) as unknown as UniversalVueElementConstructor
export const UvFileBreadcrumbElement: UniversalVueElementConstructor = defineCustomElement(UvFileBreadcrumb) as unknown as UniversalVueElementConstructor
export const UvFileToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvFileToolbar) as unknown as UniversalVueElementConstructor
export const UvFileGridElement: UniversalVueElementConstructor = defineCustomElement(UvFileGrid) as unknown as UniversalVueElementConstructor
export const UvFileDetailsElement: UniversalVueElementConstructor = defineCustomElement(UvFileDetails) as unknown as UniversalVueElementConstructor
export const UvFilePermissionsElement: UniversalVueElementConstructor = defineCustomElement(UvFilePermissions) as unknown as UniversalVueElementConstructor
export const UvFolderPickerElement: UniversalVueElementConstructor = defineCustomElement(UvFolderPicker) as unknown as UniversalVueElementConstructor
export const UvFilePickerElement: UniversalVueElementConstructor = defineCustomElement(UvFilePicker) as unknown as UniversalVueElementConstructor
export const UvPathInputElement: UniversalVueElementConstructor = defineCustomElement(UvPathInput) as unknown as UniversalVueElementConstructor
export const UvFileTypeBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvFileTypeBadge) as unknown as UniversalVueElementConstructor
export const UvFileSizeElement: UniversalVueElementConstructor = defineCustomElement(UvFileSize) as unknown as UniversalVueElementConstructor
export const UvDownloadQueueElement: UniversalVueElementConstructor = defineCustomElement(UvDownloadQueue) as unknown as UniversalVueElementConstructor
export const UvTransferProgressElement: UniversalVueElementConstructor = defineCustomElement(UvTransferProgress) as unknown as UniversalVueElementConstructor
export const UvSyncStatusElement: UniversalVueElementConstructor = defineCustomElement(UvSyncStatus) as unknown as UniversalVueElementConstructor
export const UvConflictResolverElement: UniversalVueElementConstructor = defineCustomElement(UvConflictResolver) as unknown as UniversalVueElementConstructor
export const UvOfflineFileElement: UniversalVueElementConstructor = defineCustomElement(UvOfflineFile) as unknown as UniversalVueElementConstructor
export const UvMediaCardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaCard) as unknown as UniversalVueElementConstructor
export const UvMediaGridElement: UniversalVueElementConstructor = defineCustomElement(UvMediaGrid) as unknown as UniversalVueElementConstructor
export const UvMediaListElement: UniversalVueElementConstructor = defineCustomElement(UvMediaList) as unknown as UniversalVueElementConstructor
export const UvMediaMetadataElement: UniversalVueElementConstructor = defineCustomElement(UvMediaMetadata) as unknown as UniversalVueElementConstructor
export const UvMediaInfoElement: UniversalVueElementConstructor = defineCustomElement(UvMediaInfo) as unknown as UniversalVueElementConstructor
export const UvPlaybackRateElement: UniversalVueElementConstructor = defineCustomElement(UvPlaybackRate) as unknown as UniversalVueElementConstructor
export const UvQualitySelectorElement: UniversalVueElementConstructor = defineCustomElement(UvQualitySelector) as unknown as UniversalVueElementConstructor
export const UvSubtitleSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvSubtitleSelector) as unknown as UniversalVueElementConstructor
export const UvAudioTrackSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvAudioTrackSelector) as unknown as UniversalVueElementConstructor
export const UvPictureInPictureButtonElement: UniversalVueElementConstructor = defineCustomElement(UvPictureInPictureButton) as unknown as UniversalVueElementConstructor
export const UvWaveformElement: UniversalVueElementConstructor = defineCustomElement(UvWaveform) as unknown as UniversalVueElementConstructor
export const UvAudioSpectrumElement: UniversalVueElementConstructor = defineCustomElement(UvAudioSpectrum) as unknown as UniversalVueElementConstructor
export const UvVideoThumbnailElement: UniversalVueElementConstructor = defineCustomElement(UvVideoThumbnail) as unknown as UniversalVueElementConstructor
export const UvFrameStripElement: UniversalVueElementConstructor = defineCustomElement(UvFrameStrip) as unknown as UniversalVueElementConstructor
export const UvChapterListElement: UniversalVueElementConstructor = defineCustomElement(UvChapterList) as unknown as UniversalVueElementConstructor
export const UvImageCompareElement: UniversalVueElementConstructor = defineCustomElement(UvImageCompare) as unknown as UniversalVueElementConstructor
export const UvImageZoomElement: UniversalVueElementConstructor = defineCustomElement(UvImageZoom) as unknown as UniversalVueElementConstructor
export const UvImagePanElement: UniversalVueElementConstructor = defineCustomElement(UvImagePan) as unknown as UniversalVueElementConstructor
export const UvImageRotateElement: UniversalVueElementConstructor = defineCustomElement(UvImageRotate) as unknown as UniversalVueElementConstructor
export const UvImageAnnotateElement: UniversalVueElementConstructor = defineCustomElement(UvImageAnnotate) as unknown as UniversalVueElementConstructor
export const UvPhotoGridElement: UniversalVueElementConstructor = defineCustomElement(UvPhotoGrid) as unknown as UniversalVueElementConstructor
export const UvPhotoCardElement: UniversalVueElementConstructor = defineCustomElement(UvPhotoCard) as unknown as UniversalVueElementConstructor
export const UvPhotoMetadataElement: UniversalVueElementConstructor = defineCustomElement(UvPhotoMetadata) as unknown as UniversalVueElementConstructor
export const UvPhotoExifElement: UniversalVueElementConstructor = defineCustomElement(UvPhotoExif) as unknown as UniversalVueElementConstructor
export const UvPhotoMapElement: UniversalVueElementConstructor = defineCustomElement(UvPhotoMap) as unknown as UniversalVueElementConstructor
export const UvCategoryCardElement: UniversalVueElementConstructor = defineCustomElement(UvCategoryCard) as unknown as UniversalVueElementConstructor
export const UvCategoryGridElement: UniversalVueElementConstructor = defineCustomElement(UvCategoryGrid) as unknown as UniversalVueElementConstructor
export const UvBrandCardElement: UniversalVueElementConstructor = defineCustomElement(UvBrandCard) as unknown as UniversalVueElementConstructor
export const UvBrandListElement: UniversalVueElementConstructor = defineCustomElement(UvBrandList) as unknown as UniversalVueElementConstructor
export const UvCollectionCardElement: UniversalVueElementConstructor = defineCustomElement(UvCollectionCard) as unknown as UniversalVueElementConstructor
export const UvProductBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvProductBadge) as unknown as UniversalVueElementConstructor
export const UvProductMetaElement: UniversalVueElementConstructor = defineCustomElement(UvProductMeta) as unknown as UniversalVueElementConstructor
export const UvProductSpecsElement: UniversalVueElementConstructor = defineCustomElement(UvProductSpecs) as unknown as UniversalVueElementConstructor
export const UvProductComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvProductComparison) as unknown as UniversalVueElementConstructor
export const UvProductRecommendationsElement: UniversalVueElementConstructor = defineCustomElement(UvProductRecommendations) as unknown as UniversalVueElementConstructor
export const UvMiniCartElement: UniversalVueElementConstructor = defineCustomElement(UvMiniCart) as unknown as UniversalVueElementConstructor
export const UvCartDrawerElement: UniversalVueElementConstructor = defineCustomElement(UvCartDrawer) as unknown as UniversalVueElementConstructor
export const UvCartBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvCartBadge) as unknown as UniversalVueElementConstructor
export const UvCartEmptyStateElement: UniversalVueElementConstructor = defineCustomElement(UvCartEmptyState) as unknown as UniversalVueElementConstructor
export const UvCartCouponElement: UniversalVueElementConstructor = defineCustomElement(UvCartCoupon) as unknown as UniversalVueElementConstructor
export const UvCheckoutStepsElement: UniversalVueElementConstructor = defineCustomElement(UvCheckoutSteps) as unknown as UniversalVueElementConstructor
export const UvShippingMethodElement: UniversalVueElementConstructor = defineCustomElement(UvShippingMethod) as unknown as UniversalVueElementConstructor
export const UvDeliverySlotElement: UniversalVueElementConstructor = defineCustomElement(UvDeliverySlot) as unknown as UniversalVueElementConstructor
export const UvGiftOptionsElement: UniversalVueElementConstructor = defineCustomElement(UvGiftOptions) as unknown as UniversalVueElementConstructor
export const UvOrderNotesElement: UniversalVueElementConstructor = defineCustomElement(UvOrderNotes) as unknown as UniversalVueElementConstructor
export const UvCardFormElement: UniversalVueElementConstructor = defineCustomElement(UvCardForm) as unknown as UniversalVueElementConstructor
export const UvWalletButtonElement: UniversalVueElementConstructor = defineCustomElement(UvWalletButton) as unknown as UniversalVueElementConstructor
export const UvBankTransferElement: UniversalVueElementConstructor = defineCustomElement(UvBankTransfer) as unknown as UniversalVueElementConstructor
export const UvPaymentStatusElement: UniversalVueElementConstructor = defineCustomElement(UvPaymentStatus) as unknown as UniversalVueElementConstructor
export const UvReceiptElement: UniversalVueElementConstructor = defineCustomElement(UvReceipt) as unknown as UniversalVueElementConstructor
export const UvOrderDetailsElement: UniversalVueElementConstructor = defineCustomElement(UvOrderDetails) as unknown as UniversalVueElementConstructor
export const UvOrderItemsElement: UniversalVueElementConstructor = defineCustomElement(UvOrderItems) as unknown as UniversalVueElementConstructor
export const UvOrderTotalsElement: UniversalVueElementConstructor = defineCustomElement(UvOrderTotals) as unknown as UniversalVueElementConstructor
export const UvReturnStatusElement: UniversalVueElementConstructor = defineCustomElement(UvReturnStatus) as unknown as UniversalVueElementConstructor
export const UvRefundStatusElement: UniversalVueElementConstructor = defineCustomElement(UvRefundStatus) as unknown as UniversalVueElementConstructor
export const UvPlanCardElement: UniversalVueElementConstructor = defineCustomElement(UvPlanCard) as unknown as UniversalVueElementConstructor
export const UvPlanSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvPlanSelector) as unknown as UniversalVueElementConstructor
export const UvSubscriptionCardElement: UniversalVueElementConstructor = defineCustomElement(UvSubscriptionCard) as unknown as UniversalVueElementConstructor
export const UvBillingCycleElement: UniversalVueElementConstructor = defineCustomElement(UvBillingCycle) as unknown as UniversalVueElementConstructor
export const UvUsageMeterElement: UniversalVueElementConstructor = defineCustomElement(UvUsageMeter) as unknown as UniversalVueElementConstructor
export const UvShareMenuElement: UniversalVueElementConstructor = defineCustomElement(UvShareMenu) as unknown as UniversalVueElementConstructor
export const UvSharePreviewElement: UniversalVueElementConstructor = defineCustomElement(UvSharePreview) as unknown as UniversalVueElementConstructor
export const UvMentionListElement: UniversalVueElementConstructor = defineCustomElement(UvMentionList) as unknown as UniversalVueElementConstructor
export const UvHashtagElement: UniversalVueElementConstructor = defineCustomElement(UvHashtag) as unknown as UniversalVueElementConstructor
export const UvSocialCardElement: UniversalVueElementConstructor = defineCustomElement(UvSocialCard) as unknown as UniversalVueElementConstructor
export const UvPostCardElement: UniversalVueElementConstructor = defineCustomElement(UvPostCard) as unknown as UniversalVueElementConstructor
export const UvPostComposerElement: UniversalVueElementConstructor = defineCustomElement(UvPostComposer) as unknown as UniversalVueElementConstructor
export const UvPostActionsElement: UniversalVueElementConstructor = defineCustomElement(UvPostActions) as unknown as UniversalVueElementConstructor
export const UvPostMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvPostMetrics) as unknown as UniversalVueElementConstructor
export const UvPostMediaElement: UniversalVueElementConstructor = defineCustomElement(UvPostMedia) as unknown as UniversalVueElementConstructor
export const UvChatHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvChatHeader) as unknown as UniversalVueElementConstructor
export const UvChatListElement: UniversalVueElementConstructor = defineCustomElement(UvChatList) as unknown as UniversalVueElementConstructor
export const UvChatItemElement: UniversalVueElementConstructor = defineCustomElement(UvChatItem) as unknown as UniversalVueElementConstructor
export const UvChatMessageElement: UniversalVueElementConstructor = defineCustomElement(UvChatMessage) as unknown as UniversalVueElementConstructor
export const UvChatAttachmentElement: UniversalVueElementConstructor = defineCustomElement(UvChatAttachment) as unknown as UniversalVueElementConstructor
export const UvMessageComposerElement: UniversalVueElementConstructor = defineCustomElement(UvMessageComposer) as unknown as UniversalVueElementConstructor
export const UvMessageActionsElement: UniversalVueElementConstructor = defineCustomElement(UvMessageActions) as unknown as UniversalVueElementConstructor
export const UvMessageStatusElement: UniversalVueElementConstructor = defineCustomElement(UvMessageStatus) as unknown as UniversalVueElementConstructor
export const UvReadReceiptElement: UniversalVueElementConstructor = defineCustomElement(UvReadReceipt) as unknown as UniversalVueElementConstructor
export const UvVoiceMessageElement: UniversalVueElementConstructor = defineCustomElement(UvVoiceMessage) as unknown as UniversalVueElementConstructor
export const UvNotificationBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvNotificationBadge) as unknown as UniversalVueElementConstructor
export const UvNotificationListElement: UniversalVueElementConstructor = defineCustomElement(UvNotificationList) as unknown as UniversalVueElementConstructor
export const UvNotificationItemElement: UniversalVueElementConstructor = defineCustomElement(UvNotificationItem) as unknown as UniversalVueElementConstructor
export const UvNotificationPreferencesElement: UniversalVueElementConstructor = defineCustomElement(UvNotificationPreferences) as unknown as UniversalVueElementConstructor
export const UvNotificationDigestElement: UniversalVueElementConstructor = defineCustomElement(UvNotificationDigest) as unknown as UniversalVueElementConstructor
export const UvPersonCardElement: UniversalVueElementConstructor = defineCustomElement(UvPersonCard) as unknown as UniversalVueElementConstructor
export const UvPersonListElement: UniversalVueElementConstructor = defineCustomElement(UvPersonList) as unknown as UniversalVueElementConstructor
export const UvPersonPickerElement: UniversalVueElementConstructor = defineCustomElement(UvPersonPicker) as unknown as UniversalVueElementConstructor
export const UvPersonAvatarElement: UniversalVueElementConstructor = defineCustomElement(UvPersonAvatar) as unknown as UniversalVueElementConstructor
export const UvPersonDetailsElement: UniversalVueElementConstructor = defineCustomElement(UvPersonDetails) as unknown as UniversalVueElementConstructor
export const UvTeamHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvTeamHeader) as unknown as UniversalVueElementConstructor
export const UvTeamMembersElement: UniversalVueElementConstructor = defineCustomElement(UvTeamMembers) as unknown as UniversalVueElementConstructor
export const UvTeamPickerElement: UniversalVueElementConstructor = defineCustomElement(UvTeamPicker) as unknown as UniversalVueElementConstructor
export const UvTeamSwitcherElement: UniversalVueElementConstructor = defineCustomElement(UvTeamSwitcher) as unknown as UniversalVueElementConstructor
export const UvTeamSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvTeamSettings) as unknown as UniversalVueElementConstructor
export const UvOrganizationCardElement: UniversalVueElementConstructor = defineCustomElement(UvOrganizationCard) as unknown as UniversalVueElementConstructor
export const UvOrganizationListElement: UniversalVueElementConstructor = defineCustomElement(UvOrganizationList) as unknown as UniversalVueElementConstructor
export const UvOrganizationHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvOrganizationHeader) as unknown as UniversalVueElementConstructor
export const UvOrganizationChartElement: UniversalVueElementConstructor = defineCustomElement(UvOrganizationChart) as unknown as UniversalVueElementConstructor
export const UvOrganizationSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvOrganizationSettings) as unknown as UniversalVueElementConstructor
export const UvLeadCardElement: UniversalVueElementConstructor = defineCustomElement(UvLeadCard) as unknown as UniversalVueElementConstructor
export const UvLeadListElement: UniversalVueElementConstructor = defineCustomElement(UvLeadList) as unknown as UniversalVueElementConstructor
export const UvLeadScoreElement: UniversalVueElementConstructor = defineCustomElement(UvLeadScore) as unknown as UniversalVueElementConstructor
export const UvLeadStatusElement: UniversalVueElementConstructor = defineCustomElement(UvLeadStatus) as unknown as UniversalVueElementConstructor
export const UvLeadPipelineElement: UniversalVueElementConstructor = defineCustomElement(UvLeadPipeline) as unknown as UniversalVueElementConstructor
export const UvContactListElement: UniversalVueElementConstructor = defineCustomElement(UvContactList) as unknown as UniversalVueElementConstructor
export const UvContactDetailElement: UniversalVueElementConstructor = defineCustomElement(UvContactDetail) as unknown as UniversalVueElementConstructor
export const UvDealCardElement: UniversalVueElementConstructor = defineCustomElement(UvDealCard) as unknown as UniversalVueElementConstructor
export const UvDealPipelineElement: UniversalVueElementConstructor = defineCustomElement(UvDealPipeline) as unknown as UniversalVueElementConstructor
export const UvDealStageElement: UniversalVueElementConstructor = defineCustomElement(UvDealStage) as unknown as UniversalVueElementConstructor
export const UvAccountCardElement: UniversalVueElementConstructor = defineCustomElement(UvAccountCard) as unknown as UniversalVueElementConstructor
export const UvAccountListElement: UniversalVueElementConstructor = defineCustomElement(UvAccountList) as unknown as UniversalVueElementConstructor
export const UvOpportunityCardElement: UniversalVueElementConstructor = defineCustomElement(UvOpportunityCard) as unknown as UniversalVueElementConstructor
export const UvOpportunityListElement: UniversalVueElementConstructor = defineCustomElement(UvOpportunityList) as unknown as UniversalVueElementConstructor
export const UvSalesForecastElement: UniversalVueElementConstructor = defineCustomElement(UvSalesForecast) as unknown as UniversalVueElementConstructor
export const UvProjectHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvProjectHeader) as unknown as UniversalVueElementConstructor
export const UvProjectNavElement: UniversalVueElementConstructor = defineCustomElement(UvProjectNav) as unknown as UniversalVueElementConstructor
export const UvProjectMembersElement: UniversalVueElementConstructor = defineCustomElement(UvProjectMembers) as unknown as UniversalVueElementConstructor
export const UvProjectSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvProjectSettings) as unknown as UniversalVueElementConstructor
export const UvProjectActivityElement: UniversalVueElementConstructor = defineCustomElement(UvProjectActivity) as unknown as UniversalVueElementConstructor
export const UvTaskHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvTaskHeader) as unknown as UniversalVueElementConstructor
export const UvTaskDetailElement: UniversalVueElementConstructor = defineCustomElement(UvTaskDetail) as unknown as UniversalVueElementConstructor
export const UvTaskAssigneeElement: UniversalVueElementConstructor = defineCustomElement(UvTaskAssignee) as unknown as UniversalVueElementConstructor
export const UvTaskDueDateElement: UniversalVueElementConstructor = defineCustomElement(UvTaskDueDate) as unknown as UniversalVueElementConstructor
export const UvTaskChecklistElement: UniversalVueElementConstructor = defineCustomElement(UvTaskChecklist) as unknown as UniversalVueElementConstructor
export const UvSubtaskListElement: UniversalVueElementConstructor = defineCustomElement(UvSubtaskList) as unknown as UniversalVueElementConstructor
export const UvTaskDependenciesElement: UniversalVueElementConstructor = defineCustomElement(UvTaskDependencies) as unknown as UniversalVueElementConstructor
export const UvTaskEstimateElement: UniversalVueElementConstructor = defineCustomElement(UvTaskEstimate) as unknown as UniversalVueElementConstructor
export const UvTaskProgressElement: UniversalVueElementConstructor = defineCustomElement(UvTaskProgress) as unknown as UniversalVueElementConstructor
export const UvTaskCommentsElement: UniversalVueElementConstructor = defineCustomElement(UvTaskComments) as unknown as UniversalVueElementConstructor
export const UvSprintCardElement: UniversalVueElementConstructor = defineCustomElement(UvSprintCard) as unknown as UniversalVueElementConstructor
export const UvSprintListElement: UniversalVueElementConstructor = defineCustomElement(UvSprintList) as unknown as UniversalVueElementConstructor
export const UvSprintBoardElement: UniversalVueElementConstructor = defineCustomElement(UvSprintBoard) as unknown as UniversalVueElementConstructor
export const UvSprintBurndownElement: UniversalVueElementConstructor = defineCustomElement(UvSprintBurndown) as unknown as UniversalVueElementConstructor
export const UvBacklogElement: UniversalVueElementConstructor = defineCustomElement(UvBacklog) as unknown as UniversalVueElementConstructor
export const UvEpicCardElement: UniversalVueElementConstructor = defineCustomElement(UvEpicCard) as unknown as UniversalVueElementConstructor
export const UvEpicListElement: UniversalVueElementConstructor = defineCustomElement(UvEpicList) as unknown as UniversalVueElementConstructor
export const UvStoryCardElement: UniversalVueElementConstructor = defineCustomElement(UvStoryCard) as unknown as UniversalVueElementConstructor
export const UvStoryPointsElement: UniversalVueElementConstructor = defineCustomElement(UvStoryPoints) as unknown as UniversalVueElementConstructor
export const UvVelocityChartElement: UniversalVueElementConstructor = defineCustomElement(UvVelocityChart) as unknown as UniversalVueElementConstructor
export const UvRepositoryCardElement: UniversalVueElementConstructor = defineCustomElement(UvRepositoryCard) as unknown as UniversalVueElementConstructor
export const UvRepositoryListElement: UniversalVueElementConstructor = defineCustomElement(UvRepositoryList) as unknown as UniversalVueElementConstructor
export const UvRepositoryHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvRepositoryHeader) as unknown as UniversalVueElementConstructor
export const UvRepositoryStatsElement: UniversalVueElementConstructor = defineCustomElement(UvRepositoryStats) as unknown as UniversalVueElementConstructor
export const UvRepositoryLanguagesElement: UniversalVueElementConstructor = defineCustomElement(UvRepositoryLanguages) as unknown as UniversalVueElementConstructor
export const UvCodeReviewElement: UniversalVueElementConstructor = defineCustomElement(UvCodeReview) as unknown as UniversalVueElementConstructor
export const UvReviewCommentElement: UniversalVueElementConstructor = defineCustomElement(UvReviewComment) as unknown as UniversalVueElementConstructor
export const UvReviewThreadElement: UniversalVueElementConstructor = defineCustomElement(UvReviewThread) as unknown as UniversalVueElementConstructor
export const UvMergeStatusElement: UniversalVueElementConstructor = defineCustomElement(UvMergeStatus) as unknown as UniversalVueElementConstructor
export const UvPipelineStatusElement: UniversalVueElementConstructor = defineCustomElement(UvPipelineStatus) as unknown as UniversalVueElementConstructor
export const UvBuildCardElement: UniversalVueElementConstructor = defineCustomElement(UvBuildCard) as unknown as UniversalVueElementConstructor
export const UvBuildListElement: UniversalVueElementConstructor = defineCustomElement(UvBuildList) as unknown as UniversalVueElementConstructor
export const UvBuildLogElement: UniversalVueElementConstructor = defineCustomElement(UvBuildLog) as unknown as UniversalVueElementConstructor
export const UvBuildStatusElement: UniversalVueElementConstructor = defineCustomElement(UvBuildStatus) as unknown as UniversalVueElementConstructor
export const UvBuildArtifactsElement: UniversalVueElementConstructor = defineCustomElement(UvBuildArtifacts) as unknown as UniversalVueElementConstructor
export const UvDeploymentCardElement: UniversalVueElementConstructor = defineCustomElement(UvDeploymentCard) as unknown as UniversalVueElementConstructor
export const UvDeploymentListElement: UniversalVueElementConstructor = defineCustomElement(UvDeploymentList) as unknown as UniversalVueElementConstructor
export const UvDeploymentStatusElement: UniversalVueElementConstructor = defineCustomElement(UvDeploymentStatus) as unknown as UniversalVueElementConstructor
export const UvEnvironmentCardElement: UniversalVueElementConstructor = defineCustomElement(UvEnvironmentCard) as unknown as UniversalVueElementConstructor
export const UvEnvironmentListElement: UniversalVueElementConstructor = defineCustomElement(UvEnvironmentList) as unknown as UniversalVueElementConstructor
export const UvApiExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvApiExplorer) as unknown as UniversalVueElementConstructor
export const UvApiMethodElement: UniversalVueElementConstructor = defineCustomElement(UvApiMethod) as unknown as UniversalVueElementConstructor
export const UvApiHeadersElement: UniversalVueElementConstructor = defineCustomElement(UvApiHeaders) as unknown as UniversalVueElementConstructor
export const UvApiParametersElement: UniversalVueElementConstructor = defineCustomElement(UvApiParameters) as unknown as UniversalVueElementConstructor
export const UvApiBodyElement: UniversalVueElementConstructor = defineCustomElement(UvApiBody) as unknown as UniversalVueElementConstructor
export const UvApiHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvApiHistory) as unknown as UniversalVueElementConstructor
export const UvApiCollectionElement: UniversalVueElementConstructor = defineCustomElement(UvApiCollection) as unknown as UniversalVueElementConstructor
export const UvApiEnvironmentElement: UniversalVueElementConstructor = defineCustomElement(UvApiEnvironment) as unknown as UniversalVueElementConstructor
export const UvApiAuthElement: UniversalVueElementConstructor = defineCustomElement(UvApiAuth) as unknown as UniversalVueElementConstructor
export const UvApiCookiesElement: UniversalVueElementConstructor = defineCustomElement(UvApiCookies) as unknown as UniversalVueElementConstructor
export const UvDatabaseBrowserElement: UniversalVueElementConstructor = defineCustomElement(UvDatabaseBrowser) as unknown as UniversalVueElementConstructor
export const UvDatabaseSchemaElement: UniversalVueElementConstructor = defineCustomElement(UvDatabaseSchema) as unknown as UniversalVueElementConstructor
export const UvDatabaseIndexElement: UniversalVueElementConstructor = defineCustomElement(UvDatabaseIndex) as unknown as UniversalVueElementConstructor
export const UvDatabaseRelationElement: UniversalVueElementConstructor = defineCustomElement(UvDatabaseRelation) as unknown as UniversalVueElementConstructor
export const UvDatabaseQueryPlanElement: UniversalVueElementConstructor = defineCustomElement(UvDatabaseQueryPlan) as unknown as UniversalVueElementConstructor
export const UvDataSourceCardElement: UniversalVueElementConstructor = defineCustomElement(UvDataSourceCard) as unknown as UniversalVueElementConstructor
export const UvDataSourceListElement: UniversalVueElementConstructor = defineCustomElement(UvDataSourceList) as unknown as UniversalVueElementConstructor
export const UvConnectionFormElement: UniversalVueElementConstructor = defineCustomElement(UvConnectionForm) as unknown as UniversalVueElementConstructor
export const UvConnectionListElement: UniversalVueElementConstructor = defineCustomElement(UvConnectionList) as unknown as UniversalVueElementConstructor
export const UvConnectionCardElement: UniversalVueElementConstructor = defineCustomElement(UvConnectionCard) as unknown as UniversalVueElementConstructor
export const UvMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvMonitorCard) as unknown as UniversalVueElementConstructor
export const UvMonitorListElement: UniversalVueElementConstructor = defineCustomElement(UvMonitorList) as unknown as UniversalVueElementConstructor
export const UvMonitorStatusElement: UniversalVueElementConstructor = defineCustomElement(UvMonitorStatus) as unknown as UniversalVueElementConstructor
export const UvMonitorChartElement: UniversalVueElementConstructor = defineCustomElement(UvMonitorChart) as unknown as UniversalVueElementConstructor
export const UvMonitorSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvMonitorSettings) as unknown as UniversalVueElementConstructor
export const UvLogStreamElement: UniversalVueElementConstructor = defineCustomElement(UvLogStream) as unknown as UniversalVueElementConstructor
export const UvLogFilterElement: UniversalVueElementConstructor = defineCustomElement(UvLogFilter) as unknown as UniversalVueElementConstructor
export const UvLogEntryElement: UniversalVueElementConstructor = defineCustomElement(UvLogEntry) as unknown as UniversalVueElementConstructor
export const UvLogLevelElement: UniversalVueElementConstructor = defineCustomElement(UvLogLevel) as unknown as UniversalVueElementConstructor
export const UvLogStatsElement: UniversalVueElementConstructor = defineCustomElement(UvLogStats) as unknown as UniversalVueElementConstructor
export const UvTraceListElement: UniversalVueElementConstructor = defineCustomElement(UvTraceList) as unknown as UniversalVueElementConstructor
export const UvTraceDetailElement: UniversalVueElementConstructor = defineCustomElement(UvTraceDetail) as unknown as UniversalVueElementConstructor
export const UvSpanTreeElement: UniversalVueElementConstructor = defineCustomElement(UvSpanTree) as unknown as UniversalVueElementConstructor
export const UvSpanDetailElement: UniversalVueElementConstructor = defineCustomElement(UvSpanDetail) as unknown as UniversalVueElementConstructor
export const UvTraceWaterfallElement: UniversalVueElementConstructor = defineCustomElement(UvTraceWaterfall) as unknown as UniversalVueElementConstructor
export const UvAlertCardElement: UniversalVueElementConstructor = defineCustomElement(UvAlertCard) as unknown as UniversalVueElementConstructor
export const UvAlertListElement: UniversalVueElementConstructor = defineCustomElement(UvAlertList) as unknown as UniversalVueElementConstructor
export const UvAlertHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvAlertHistory) as unknown as UniversalVueElementConstructor
export const UvAlertSeverityElement: UniversalVueElementConstructor = defineCustomElement(UvAlertSeverity) as unknown as UniversalVueElementConstructor
export const UvAlertChannelElement: UniversalVueElementConstructor = defineCustomElement(UvAlertChannel) as unknown as UniversalVueElementConstructor
export const UvSecurityOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOverview) as unknown as UniversalVueElementConstructor
export const UvSecurityEventElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityEvent) as unknown as UniversalVueElementConstructor
export const UvSecurityFindingElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityFinding) as unknown as UniversalVueElementConstructor
export const UvSecurityControlElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityControl) as unknown as UniversalVueElementConstructor
export const UvSecurityPolicyElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityPolicy) as unknown as UniversalVueElementConstructor
export const UvVulnerabilityCardElement: UniversalVueElementConstructor = defineCustomElement(UvVulnerabilityCard) as unknown as UniversalVueElementConstructor
export const UvVulnerabilityListElement: UniversalVueElementConstructor = defineCustomElement(UvVulnerabilityList) as unknown as UniversalVueElementConstructor
export const UvVulnerabilitySeverityElement: UniversalVueElementConstructor = defineCustomElement(UvVulnerabilitySeverity) as unknown as UniversalVueElementConstructor
export const UvPatchStatusElement: UniversalVueElementConstructor = defineCustomElement(UvPatchStatus) as unknown as UniversalVueElementConstructor
export const UvComplianceStatusElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceStatus) as unknown as UniversalVueElementConstructor
export const UvMfaSetupElement: UniversalVueElementConstructor = defineCustomElement(UvMfaSetup) as unknown as UniversalVueElementConstructor
export const UvMfaChallengeElement: UniversalVueElementConstructor = defineCustomElement(UvMfaChallenge) as unknown as UniversalVueElementConstructor
export const UvPasskeyListElement: UniversalVueElementConstructor = defineCustomElement(UvPasskeyList) as unknown as UniversalVueElementConstructor
export const UvDeviceSessionElement: UniversalVueElementConstructor = defineCustomElement(UvDeviceSession) as unknown as UniversalVueElementConstructor
export const UvLoginHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvLoginHistory) as unknown as UniversalVueElementConstructor
export const UvAccessTokenElement: UniversalVueElementConstructor = defineCustomElement(UvAccessToken) as unknown as UniversalVueElementConstructor
export const UvAccessTokenListElement: UniversalVueElementConstructor = defineCustomElement(UvAccessTokenList) as unknown as UniversalVueElementConstructor
export const UvOauthConsentElement: UniversalVueElementConstructor = defineCustomElement(UvOauthConsent) as unknown as UniversalVueElementConstructor
export const UvSsoButtonElement: UniversalVueElementConstructor = defineCustomElement(UvSsoButton) as unknown as UniversalVueElementConstructor
export const UvIdentityProviderElement: UniversalVueElementConstructor = defineCustomElement(UvIdentityProvider) as unknown as UniversalVueElementConstructor
export const UvSettingsHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvSettingsHeader) as unknown as UniversalVueElementConstructor
export const UvSettingsNavElement: UniversalVueElementConstructor = defineCustomElement(UvSettingsNav) as unknown as UniversalVueElementConstructor
export const UvSettingsSectionElement: UniversalVueElementConstructor = defineCustomElement(UvSettingsSection) as unknown as UniversalVueElementConstructor
export const UvSettingsGroupElement: UniversalVueElementConstructor = defineCustomElement(UvSettingsGroup) as unknown as UniversalVueElementConstructor
export const UvSettingsRowElement: UniversalVueElementConstructor = defineCustomElement(UvSettingsRow) as unknown as UniversalVueElementConstructor
export const UvThemeSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvThemeSettings) as unknown as UniversalVueElementConstructor
export const UvLanguageSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvLanguageSettings) as unknown as UniversalVueElementConstructor
export const UvAccessibilitySettingsElement: UniversalVueElementConstructor = defineCustomElement(UvAccessibilitySettings) as unknown as UniversalVueElementConstructor
export const UvDataSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvDataSettings) as unknown as UniversalVueElementConstructor
export const UvSecuritySettingsElement: UniversalVueElementConstructor = defineCustomElement(UvSecuritySettings) as unknown as UniversalVueElementConstructor
export const UvPromptLibraryElement: UniversalVueElementConstructor = defineCustomElement(UvPromptLibrary) as unknown as UniversalVueElementConstructor
export const UvPromptCardElement: UniversalVueElementConstructor = defineCustomElement(UvPromptCard) as unknown as UniversalVueElementConstructor
export const UvPromptHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvPromptHistory) as unknown as UniversalVueElementConstructor
export const UvPromptVariablesElement: UniversalVueElementConstructor = defineCustomElement(UvPromptVariables) as unknown as UniversalVueElementConstructor
export const UvPromptTemplateElement: UniversalVueElementConstructor = defineCustomElement(UvPromptTemplate) as unknown as UniversalVueElementConstructor
export const UvAgentCardElement: UniversalVueElementConstructor = defineCustomElement(UvAgentCard) as unknown as UniversalVueElementConstructor
export const UvAgentListElement: UniversalVueElementConstructor = defineCustomElement(UvAgentList) as unknown as UniversalVueElementConstructor
export const UvAgentStatusElement: UniversalVueElementConstructor = defineCustomElement(UvAgentStatus) as unknown as UniversalVueElementConstructor
export const UvAgentToolElement: UniversalVueElementConstructor = defineCustomElement(UvAgentTool) as unknown as UniversalVueElementConstructor
export const UvAgentMemoryElement: UniversalVueElementConstructor = defineCustomElement(UvAgentMemory) as unknown as UniversalVueElementConstructor
export const UvAiConversationElement: UniversalVueElementConstructor = defineCustomElement(UvAiConversation) as unknown as UniversalVueElementConstructor
export const UvAiMessageElement: UniversalVueElementConstructor = defineCustomElement(UvAiMessage) as unknown as UniversalVueElementConstructor
export const UvAiThinkingElement: UniversalVueElementConstructor = defineCustomElement(UvAiThinking) as unknown as UniversalVueElementConstructor
export const UvAiCitationElement: UniversalVueElementConstructor = defineCustomElement(UvAiCitation) as unknown as UniversalVueElementConstructor
export const UvAiFeedbackElement: UniversalVueElementConstructor = defineCustomElement(UvAiFeedback) as unknown as UniversalVueElementConstructor
export const UvModelCardElement: UniversalVueElementConstructor = defineCustomElement(UvModelCard) as unknown as UniversalVueElementConstructor
export const UvModelListElement: UniversalVueElementConstructor = defineCustomElement(UvModelList) as unknown as UniversalVueElementConstructor
export const UvModelParametersElement: UniversalVueElementConstructor = defineCustomElement(UvModelParameters) as unknown as UniversalVueElementConstructor
export const UvModelBenchmarkElement: UniversalVueElementConstructor = defineCustomElement(UvModelBenchmark) as unknown as UniversalVueElementConstructor
export const UvModelPricingElement: UniversalVueElementConstructor = defineCustomElement(UvModelPricing) as unknown as UniversalVueElementConstructor
export const UvWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvWorkflowListElement: UniversalVueElementConstructor = defineCustomElement(UvWorkflowList) as unknown as UniversalVueElementConstructor
export const UvWorkflowBuilderElement: UniversalVueElementConstructor = defineCustomElement(UvWorkflowBuilder) as unknown as UniversalVueElementConstructor
export const UvWorkflowNodeElement: UniversalVueElementConstructor = defineCustomElement(UvWorkflowNode) as unknown as UniversalVueElementConstructor
export const UvWorkflowEdgeElement: UniversalVueElementConstructor = defineCustomElement(UvWorkflowEdge) as unknown as UniversalVueElementConstructor
export const UvAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvAutomationCard) as unknown as UniversalVueElementConstructor
export const UvAutomationListElement: UniversalVueElementConstructor = defineCustomElement(UvAutomationList) as unknown as UniversalVueElementConstructor
export const UvAutomationTriggerElement: UniversalVueElementConstructor = defineCustomElement(UvAutomationTrigger) as unknown as UniversalVueElementConstructor
export const UvAutomationActionElement: UniversalVueElementConstructor = defineCustomElement(UvAutomationAction) as unknown as UniversalVueElementConstructor
export const UvAutomationRunElement: UniversalVueElementConstructor = defineCustomElement(UvAutomationRun) as unknown as UniversalVueElementConstructor
export const UvIntegrationCardElement: UniversalVueElementConstructor = defineCustomElement(UvIntegrationCard) as unknown as UniversalVueElementConstructor
export const UvIntegrationListElement: UniversalVueElementConstructor = defineCustomElement(UvIntegrationList) as unknown as UniversalVueElementConstructor
export const UvIntegrationSetupElement: UniversalVueElementConstructor = defineCustomElement(UvIntegrationSetup) as unknown as UniversalVueElementConstructor
export const UvIntegrationStatusElement: UniversalVueElementConstructor = defineCustomElement(UvIntegrationStatus) as unknown as UniversalVueElementConstructor
export const UvWebhookCardElement: UniversalVueElementConstructor = defineCustomElement(UvWebhookCard) as unknown as UniversalVueElementConstructor
export const UvWebhookListElement: UniversalVueElementConstructor = defineCustomElement(UvWebhookList) as unknown as UniversalVueElementConstructor
export const UvWebhookEventElement: UniversalVueElementConstructor = defineCustomElement(UvWebhookEvent) as unknown as UniversalVueElementConstructor
export const UvWebhookDeliveryElement: UniversalVueElementConstructor = defineCustomElement(UvWebhookDelivery) as unknown as UniversalVueElementConstructor
export const UvWebhookLogElement: UniversalVueElementConstructor = defineCustomElement(UvWebhookLog) as unknown as UniversalVueElementConstructor
export const UvApiCredentialElement: UniversalVueElementConstructor = defineCustomElement(UvApiCredential) as unknown as UniversalVueElementConstructor
export const UvReleaseCardElement: UniversalVueElementConstructor = defineCustomElement(UvReleaseCard) as unknown as UniversalVueElementConstructor
export const UvReleaseListElement: UniversalVueElementConstructor = defineCustomElement(UvReleaseList) as unknown as UniversalVueElementConstructor
export const UvReleaseNotesElement: UniversalVueElementConstructor = defineCustomElement(UvReleaseNotes) as unknown as UniversalVueElementConstructor
export const UvReleaseTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvReleaseTimeline) as unknown as UniversalVueElementConstructor
export const UvReleaseStatusElement: UniversalVueElementConstructor = defineCustomElement(UvReleaseStatus) as unknown as UniversalVueElementConstructor
export const UvExperimentListElement: UniversalVueElementConstructor = defineCustomElement(UvExperimentList) as unknown as UniversalVueElementConstructor
export const UvExperimentResultsElement: UniversalVueElementConstructor = defineCustomElement(UvExperimentResults) as unknown as UniversalVueElementConstructor
export const UvExperimentMetricElement: UniversalVueElementConstructor = defineCustomElement(UvExperimentMetric) as unknown as UniversalVueElementConstructor
export const UvExperimentAudienceElement: UniversalVueElementConstructor = defineCustomElement(UvExperimentAudience) as unknown as UniversalVueElementConstructor
export const UvExperimentStatusElement: UniversalVueElementConstructor = defineCustomElement(UvExperimentStatus) as unknown as UniversalVueElementConstructor
export const UvAdminShellElement: UniversalVueElementConstructor = defineCustomElement(UvAdminShell) as unknown as UniversalVueElementConstructor
export const UvAdminHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvAdminHeader) as unknown as UniversalVueElementConstructor
export const UvAdminSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvAdminSidebar) as unknown as UniversalVueElementConstructor
export const UvAdminToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvAdminToolbar) as unknown as UniversalVueElementConstructor
export const UvAdminDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvAdminDashboard) as unknown as UniversalVueElementConstructor
export const UvCommerceOrderOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceOrderOverview) as unknown as UniversalVueElementConstructor
export const UvCommerceOrderStatusElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceOrderStatus) as unknown as UniversalVueElementConstructor
export const UvCommerceOrderTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceOrderTimeline) as unknown as UniversalVueElementConstructor
export const UvCommerceOrderFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceOrderFilters) as unknown as UniversalVueElementConstructor
export const UvCommerceOrderActionsElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceOrderActions) as unknown as UniversalVueElementConstructor
export const UvCommerceCartDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCartDashboard) as unknown as UniversalVueElementConstructor
export const UvCommerceCartSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCartSummary) as unknown as UniversalVueElementConstructor
export const UvCommerceCartListElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCartList) as unknown as UniversalVueElementConstructor
export const UvCommerceCartDetailElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCartDetail) as unknown as UniversalVueElementConstructor
export const UvCommerceCartToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCartToolbar) as unknown as UniversalVueElementConstructor
export const UvCommerceCheckoutCardElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCheckoutCard) as unknown as UniversalVueElementConstructor
export const UvCommerceCheckoutTableElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCheckoutTable) as unknown as UniversalVueElementConstructor
export const UvCommerceCheckoutMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCheckoutMetrics) as unknown as UniversalVueElementConstructor
export const UvCommerceCheckoutInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCheckoutInsights) as unknown as UniversalVueElementConstructor
export const UvCommerceCheckoutMenuElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCheckoutMenu) as unknown as UniversalVueElementConstructor
export const UvCommerceCatalogExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCatalogExplorer) as unknown as UniversalVueElementConstructor
export const UvCommerceCatalogNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCatalogNavigator) as unknown as UniversalVueElementConstructor
export const UvCommerceCatalogViewerElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCatalogViewer) as unknown as UniversalVueElementConstructor
export const UvCommerceCatalogEditorElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCatalogEditor) as unknown as UniversalVueElementConstructor
export const UvCommerceCatalogSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceCatalogSettings) as unknown as UniversalVueElementConstructor
export const UvCommerceProductQueueElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceProductQueue) as unknown as UniversalVueElementConstructor
export const UvCommerceProductBoardElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceProductBoard) as unknown as UniversalVueElementConstructor
export const UvCommerceProductCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceProductCalendar) as unknown as UniversalVueElementConstructor
export const UvCommerceProductHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceProductHistory) as unknown as UniversalVueElementConstructor
export const UvCommerceProductReportsElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceProductReports) as unknown as UniversalVueElementConstructor
export const UvCommercePricingHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvCommercePricingHeader) as unknown as UniversalVueElementConstructor
export const UvCommercePricingSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvCommercePricingSidebar) as unknown as UniversalVueElementConstructor
export const UvCommercePricingGridElement: UniversalVueElementConstructor = defineCustomElement(UvCommercePricingGrid) as unknown as UniversalVueElementConstructor
export const UvCommercePricingPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCommercePricingPanel) as unknown as UniversalVueElementConstructor
export const UvCommercePricingFooterElement: UniversalVueElementConstructor = defineCustomElement(UvCommercePricingFooter) as unknown as UniversalVueElementConstructor
export const UvCommerceDiscountMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceDiscountMonitor) as unknown as UniversalVueElementConstructor
export const UvCommerceDiscountTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceDiscountTracker) as unknown as UniversalVueElementConstructor
export const UvCommerceDiscountAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceDiscountAlerts) as unknown as UniversalVueElementConstructor
export const UvCommerceDiscountActivityElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceDiscountActivity) as unknown as UniversalVueElementConstructor
export const UvCommerceDiscountControlsElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceDiscountControls) as unknown as UniversalVueElementConstructor
export const UvCommerceTaxSearchElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceTaxSearch) as unknown as UniversalVueElementConstructor
export const UvCommerceTaxSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceTaxSelector) as unknown as UniversalVueElementConstructor
export const UvCommerceTaxPickerElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceTaxPicker) as unknown as UniversalVueElementConstructor
export const UvCommerceTaxFormElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceTaxForm) as unknown as UniversalVueElementConstructor
export const UvCommerceTaxPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceTaxPreview) as unknown as UniversalVueElementConstructor
export const UvCommerceRefundBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceRefundBadge) as unknown as UniversalVueElementConstructor
export const UvCommerceRefundIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceRefundIndicator) as unknown as UniversalVueElementConstructor
export const UvCommerceRefundProgressElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceRefundProgress) as unknown as UniversalVueElementConstructor
export const UvCommerceRefundScoreElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceRefundScore) as unknown as UniversalVueElementConstructor
export const UvCommerceRefundMeterElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceRefundMeter) as unknown as UniversalVueElementConstructor
export const UvCommerceSubscriptionMapElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceSubscriptionMap) as unknown as UniversalVueElementConstructor
export const UvCommerceSubscriptionChartElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceSubscriptionChart) as unknown as UniversalVueElementConstructor
export const UvCommerceSubscriptionDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceSubscriptionDiagram) as unknown as UniversalVueElementConstructor
export const UvCommerceSubscriptionBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceSubscriptionBreakdown) as unknown as UniversalVueElementConstructor
export const UvCommerceSubscriptionComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvCommerceSubscriptionComparison) as unknown as UniversalVueElementConstructor
export const UvFinanceLedgerOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceLedgerOverview) as unknown as UniversalVueElementConstructor
export const UvFinanceLedgerStatusElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceLedgerStatus) as unknown as UniversalVueElementConstructor
export const UvFinanceLedgerTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceLedgerTimeline) as unknown as UniversalVueElementConstructor
export const UvFinanceLedgerFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceLedgerFilters) as unknown as UniversalVueElementConstructor
export const UvFinanceLedgerActionsElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceLedgerActions) as unknown as UniversalVueElementConstructor
export const UvFinanceInvoiceDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceInvoiceDashboard) as unknown as UniversalVueElementConstructor
export const UvFinanceInvoiceSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceInvoiceSummary) as unknown as UniversalVueElementConstructor
export const UvFinanceInvoiceListElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceInvoiceList) as unknown as UniversalVueElementConstructor
export const UvFinanceInvoiceDetailElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceInvoiceDetail) as unknown as UniversalVueElementConstructor
export const UvFinanceInvoiceToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceInvoiceToolbar) as unknown as UniversalVueElementConstructor
export const UvFinancePaymentCardElement: UniversalVueElementConstructor = defineCustomElement(UvFinancePaymentCard) as unknown as UniversalVueElementConstructor
export const UvFinancePaymentTableElement: UniversalVueElementConstructor = defineCustomElement(UvFinancePaymentTable) as unknown as UniversalVueElementConstructor
export const UvFinancePaymentMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvFinancePaymentMetrics) as unknown as UniversalVueElementConstructor
export const UvFinancePaymentInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvFinancePaymentInsights) as unknown as UniversalVueElementConstructor
export const UvFinancePaymentMenuElement: UniversalVueElementConstructor = defineCustomElement(UvFinancePaymentMenu) as unknown as UniversalVueElementConstructor
export const UvFinancePayoutExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvFinancePayoutExplorer) as unknown as UniversalVueElementConstructor
export const UvFinancePayoutNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvFinancePayoutNavigator) as unknown as UniversalVueElementConstructor
export const UvFinancePayoutViewerElement: UniversalVueElementConstructor = defineCustomElement(UvFinancePayoutViewer) as unknown as UniversalVueElementConstructor
export const UvFinancePayoutEditorElement: UniversalVueElementConstructor = defineCustomElement(UvFinancePayoutEditor) as unknown as UniversalVueElementConstructor
export const UvFinancePayoutSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvFinancePayoutSettings) as unknown as UniversalVueElementConstructor
export const UvFinanceExpenseQueueElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceExpenseQueue) as unknown as UniversalVueElementConstructor
export const UvFinanceExpenseBoardElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceExpenseBoard) as unknown as UniversalVueElementConstructor
export const UvFinanceExpenseCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceExpenseCalendar) as unknown as UniversalVueElementConstructor
export const UvFinanceExpenseHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceExpenseHistory) as unknown as UniversalVueElementConstructor
export const UvFinanceExpenseReportsElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceExpenseReports) as unknown as UniversalVueElementConstructor
export const UvFinanceBudgetHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceBudgetHeader) as unknown as UniversalVueElementConstructor
export const UvFinanceBudgetSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceBudgetSidebar) as unknown as UniversalVueElementConstructor
export const UvFinanceBudgetGridElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceBudgetGrid) as unknown as UniversalVueElementConstructor
export const UvFinanceBudgetPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceBudgetPanel) as unknown as UniversalVueElementConstructor
export const UvFinanceBudgetFooterElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceBudgetFooter) as unknown as UniversalVueElementConstructor
export const UvFinanceForecastMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceForecastMonitor) as unknown as UniversalVueElementConstructor
export const UvFinanceForecastTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceForecastTracker) as unknown as UniversalVueElementConstructor
export const UvFinanceForecastAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceForecastAlerts) as unknown as UniversalVueElementConstructor
export const UvFinanceForecastActivityElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceForecastActivity) as unknown as UniversalVueElementConstructor
export const UvFinanceForecastControlsElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceForecastControls) as unknown as UniversalVueElementConstructor
export const UvFinanceTreasurySearchElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceTreasurySearch) as unknown as UniversalVueElementConstructor
export const UvFinanceTreasurySelectorElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceTreasurySelector) as unknown as UniversalVueElementConstructor
export const UvFinanceTreasuryPickerElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceTreasuryPicker) as unknown as UniversalVueElementConstructor
export const UvFinanceTreasuryFormElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceTreasuryForm) as unknown as UniversalVueElementConstructor
export const UvFinanceTreasuryPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceTreasuryPreview) as unknown as UniversalVueElementConstructor
export const UvFinanceReconciliationBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceReconciliationBadge) as unknown as UniversalVueElementConstructor
export const UvFinanceReconciliationIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceReconciliationIndicator) as unknown as UniversalVueElementConstructor
export const UvFinanceReconciliationProgressElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceReconciliationProgress) as unknown as UniversalVueElementConstructor
export const UvFinanceReconciliationScoreElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceReconciliationScore) as unknown as UniversalVueElementConstructor
export const UvFinanceReconciliationMeterElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceReconciliationMeter) as unknown as UniversalVueElementConstructor
export const UvFinanceAuditMapElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceAuditMap) as unknown as UniversalVueElementConstructor
export const UvFinanceAuditChartElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceAuditChart) as unknown as UniversalVueElementConstructor
export const UvFinanceAuditDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceAuditDiagram) as unknown as UniversalVueElementConstructor
export const UvFinanceAuditBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceAuditBreakdown) as unknown as UniversalVueElementConstructor
export const UvFinanceAuditComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvFinanceAuditComparison) as unknown as UniversalVueElementConstructor
export const UvBankingAccountOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvBankingAccountOverview) as unknown as UniversalVueElementConstructor
export const UvBankingAccountStatusElement: UniversalVueElementConstructor = defineCustomElement(UvBankingAccountStatus) as unknown as UniversalVueElementConstructor
export const UvBankingAccountTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvBankingAccountTimeline) as unknown as UniversalVueElementConstructor
export const UvBankingAccountFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvBankingAccountFilters) as unknown as UniversalVueElementConstructor
export const UvBankingAccountActionsElement: UniversalVueElementConstructor = defineCustomElement(UvBankingAccountActions) as unknown as UniversalVueElementConstructor
export const UvBankingTransactionDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvBankingTransactionDashboard) as unknown as UniversalVueElementConstructor
export const UvBankingTransactionSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvBankingTransactionSummary) as unknown as UniversalVueElementConstructor
export const UvBankingTransactionListElement: UniversalVueElementConstructor = defineCustomElement(UvBankingTransactionList) as unknown as UniversalVueElementConstructor
export const UvBankingTransactionDetailElement: UniversalVueElementConstructor = defineCustomElement(UvBankingTransactionDetail) as unknown as UniversalVueElementConstructor
export const UvBankingTransactionToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvBankingTransactionToolbar) as unknown as UniversalVueElementConstructor
export const UvBankingTransferCardElement: UniversalVueElementConstructor = defineCustomElement(UvBankingTransferCard) as unknown as UniversalVueElementConstructor
export const UvBankingTransferTableElement: UniversalVueElementConstructor = defineCustomElement(UvBankingTransferTable) as unknown as UniversalVueElementConstructor
export const UvBankingTransferMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvBankingTransferMetrics) as unknown as UniversalVueElementConstructor
export const UvBankingTransferInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvBankingTransferInsights) as unknown as UniversalVueElementConstructor
export const UvBankingTransferMenuElement: UniversalVueElementConstructor = defineCustomElement(UvBankingTransferMenu) as unknown as UniversalVueElementConstructor
export const UvBankingDepositExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvBankingDepositExplorer) as unknown as UniversalVueElementConstructor
export const UvBankingDepositNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvBankingDepositNavigator) as unknown as UniversalVueElementConstructor
export const UvBankingDepositViewerElement: UniversalVueElementConstructor = defineCustomElement(UvBankingDepositViewer) as unknown as UniversalVueElementConstructor
export const UvBankingDepositEditorElement: UniversalVueElementConstructor = defineCustomElement(UvBankingDepositEditor) as unknown as UniversalVueElementConstructor
export const UvBankingDepositSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvBankingDepositSettings) as unknown as UniversalVueElementConstructor
export const UvBankingWithdrawalQueueElement: UniversalVueElementConstructor = defineCustomElement(UvBankingWithdrawalQueue) as unknown as UniversalVueElementConstructor
export const UvBankingWithdrawalBoardElement: UniversalVueElementConstructor = defineCustomElement(UvBankingWithdrawalBoard) as unknown as UniversalVueElementConstructor
export const UvBankingWithdrawalCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvBankingWithdrawalCalendar) as unknown as UniversalVueElementConstructor
export const UvBankingWithdrawalHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvBankingWithdrawalHistory) as unknown as UniversalVueElementConstructor
export const UvBankingWithdrawalReportsElement: UniversalVueElementConstructor = defineCustomElement(UvBankingWithdrawalReports) as unknown as UniversalVueElementConstructor
export const UvBankingLoanHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvBankingLoanHeader) as unknown as UniversalVueElementConstructor
export const UvBankingLoanSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvBankingLoanSidebar) as unknown as UniversalVueElementConstructor
export const UvBankingLoanGridElement: UniversalVueElementConstructor = defineCustomElement(UvBankingLoanGrid) as unknown as UniversalVueElementConstructor
export const UvBankingLoanPanelElement: UniversalVueElementConstructor = defineCustomElement(UvBankingLoanPanel) as unknown as UniversalVueElementConstructor
export const UvBankingLoanFooterElement: UniversalVueElementConstructor = defineCustomElement(UvBankingLoanFooter) as unknown as UniversalVueElementConstructor
export const UvBankingCreditMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvBankingCreditMonitor) as unknown as UniversalVueElementConstructor
export const UvBankingCreditTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvBankingCreditTracker) as unknown as UniversalVueElementConstructor
export const UvBankingCreditAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvBankingCreditAlerts) as unknown as UniversalVueElementConstructor
export const UvBankingCreditActivityElement: UniversalVueElementConstructor = defineCustomElement(UvBankingCreditActivity) as unknown as UniversalVueElementConstructor
export const UvBankingCreditControlsElement: UniversalVueElementConstructor = defineCustomElement(UvBankingCreditControls) as unknown as UniversalVueElementConstructor
export const UvBankingDebitSearchElement: UniversalVueElementConstructor = defineCustomElement(UvBankingDebitSearch) as unknown as UniversalVueElementConstructor
export const UvBankingDebitSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvBankingDebitSelector) as unknown as UniversalVueElementConstructor
export const UvBankingDebitPickerElement: UniversalVueElementConstructor = defineCustomElement(UvBankingDebitPicker) as unknown as UniversalVueElementConstructor
export const UvBankingDebitFormElement: UniversalVueElementConstructor = defineCustomElement(UvBankingDebitForm) as unknown as UniversalVueElementConstructor
export const UvBankingDebitPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvBankingDebitPreview) as unknown as UniversalVueElementConstructor
export const UvBankingStatementBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvBankingStatementBadge) as unknown as UniversalVueElementConstructor
export const UvBankingStatementIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvBankingStatementIndicator) as unknown as UniversalVueElementConstructor
export const UvBankingStatementProgressElement: UniversalVueElementConstructor = defineCustomElement(UvBankingStatementProgress) as unknown as UniversalVueElementConstructor
export const UvBankingStatementScoreElement: UniversalVueElementConstructor = defineCustomElement(UvBankingStatementScore) as unknown as UniversalVueElementConstructor
export const UvBankingStatementMeterElement: UniversalVueElementConstructor = defineCustomElement(UvBankingStatementMeter) as unknown as UniversalVueElementConstructor
export const UvBankingBeneficiaryMapElement: UniversalVueElementConstructor = defineCustomElement(UvBankingBeneficiaryMap) as unknown as UniversalVueElementConstructor
export const UvBankingBeneficiaryChartElement: UniversalVueElementConstructor = defineCustomElement(UvBankingBeneficiaryChart) as unknown as UniversalVueElementConstructor
export const UvBankingBeneficiaryDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvBankingBeneficiaryDiagram) as unknown as UniversalVueElementConstructor
export const UvBankingBeneficiaryBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvBankingBeneficiaryBreakdown) as unknown as UniversalVueElementConstructor
export const UvBankingBeneficiaryComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvBankingBeneficiaryComparison) as unknown as UniversalVueElementConstructor
export const UvHealthPatientOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvHealthPatientOverview) as unknown as UniversalVueElementConstructor
export const UvHealthPatientStatusElement: UniversalVueElementConstructor = defineCustomElement(UvHealthPatientStatus) as unknown as UniversalVueElementConstructor
export const UvHealthPatientTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvHealthPatientTimeline) as unknown as UniversalVueElementConstructor
export const UvHealthPatientFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvHealthPatientFilters) as unknown as UniversalVueElementConstructor
export const UvHealthPatientActionsElement: UniversalVueElementConstructor = defineCustomElement(UvHealthPatientActions) as unknown as UniversalVueElementConstructor
export const UvHealthAppointmentDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvHealthAppointmentDashboard) as unknown as UniversalVueElementConstructor
export const UvHealthAppointmentSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvHealthAppointmentSummary) as unknown as UniversalVueElementConstructor
export const UvHealthAppointmentListElement: UniversalVueElementConstructor = defineCustomElement(UvHealthAppointmentList) as unknown as UniversalVueElementConstructor
export const UvHealthAppointmentDetailElement: UniversalVueElementConstructor = defineCustomElement(UvHealthAppointmentDetail) as unknown as UniversalVueElementConstructor
export const UvHealthAppointmentToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvHealthAppointmentToolbar) as unknown as UniversalVueElementConstructor
export const UvHealthEncounterCardElement: UniversalVueElementConstructor = defineCustomElement(UvHealthEncounterCard) as unknown as UniversalVueElementConstructor
export const UvHealthEncounterTableElement: UniversalVueElementConstructor = defineCustomElement(UvHealthEncounterTable) as unknown as UniversalVueElementConstructor
export const UvHealthEncounterMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvHealthEncounterMetrics) as unknown as UniversalVueElementConstructor
export const UvHealthEncounterInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvHealthEncounterInsights) as unknown as UniversalVueElementConstructor
export const UvHealthEncounterMenuElement: UniversalVueElementConstructor = defineCustomElement(UvHealthEncounterMenu) as unknown as UniversalVueElementConstructor
export const UvHealthPrescriptionExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvHealthPrescriptionExplorer) as unknown as UniversalVueElementConstructor
export const UvHealthPrescriptionNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvHealthPrescriptionNavigator) as unknown as UniversalVueElementConstructor
export const UvHealthPrescriptionViewerElement: UniversalVueElementConstructor = defineCustomElement(UvHealthPrescriptionViewer) as unknown as UniversalVueElementConstructor
export const UvHealthPrescriptionEditorElement: UniversalVueElementConstructor = defineCustomElement(UvHealthPrescriptionEditor) as unknown as UniversalVueElementConstructor
export const UvHealthPrescriptionSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvHealthPrescriptionSettings) as unknown as UniversalVueElementConstructor
export const UvHealthLaboratoryQueueElement: UniversalVueElementConstructor = defineCustomElement(UvHealthLaboratoryQueue) as unknown as UniversalVueElementConstructor
export const UvHealthLaboratoryBoardElement: UniversalVueElementConstructor = defineCustomElement(UvHealthLaboratoryBoard) as unknown as UniversalVueElementConstructor
export const UvHealthLaboratoryCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvHealthLaboratoryCalendar) as unknown as UniversalVueElementConstructor
export const UvHealthLaboratoryHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvHealthLaboratoryHistory) as unknown as UniversalVueElementConstructor
export const UvHealthLaboratoryReportsElement: UniversalVueElementConstructor = defineCustomElement(UvHealthLaboratoryReports) as unknown as UniversalVueElementConstructor
export const UvHealthImagingHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvHealthImagingHeader) as unknown as UniversalVueElementConstructor
export const UvHealthImagingSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvHealthImagingSidebar) as unknown as UniversalVueElementConstructor
export const UvHealthImagingGridElement: UniversalVueElementConstructor = defineCustomElement(UvHealthImagingGrid) as unknown as UniversalVueElementConstructor
export const UvHealthImagingPanelElement: UniversalVueElementConstructor = defineCustomElement(UvHealthImagingPanel) as unknown as UniversalVueElementConstructor
export const UvHealthImagingFooterElement: UniversalVueElementConstructor = defineCustomElement(UvHealthImagingFooter) as unknown as UniversalVueElementConstructor
export const UvHealthInsuranceMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvHealthInsuranceMonitor) as unknown as UniversalVueElementConstructor
export const UvHealthInsuranceTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvHealthInsuranceTracker) as unknown as UniversalVueElementConstructor
export const UvHealthInsuranceAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvHealthInsuranceAlerts) as unknown as UniversalVueElementConstructor
export const UvHealthInsuranceActivityElement: UniversalVueElementConstructor = defineCustomElement(UvHealthInsuranceActivity) as unknown as UniversalVueElementConstructor
export const UvHealthInsuranceControlsElement: UniversalVueElementConstructor = defineCustomElement(UvHealthInsuranceControls) as unknown as UniversalVueElementConstructor
export const UvHealthClaimSearchElement: UniversalVueElementConstructor = defineCustomElement(UvHealthClaimSearch) as unknown as UniversalVueElementConstructor
export const UvHealthClaimSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvHealthClaimSelector) as unknown as UniversalVueElementConstructor
export const UvHealthClaimPickerElement: UniversalVueElementConstructor = defineCustomElement(UvHealthClaimPicker) as unknown as UniversalVueElementConstructor
export const UvHealthClaimFormElement: UniversalVueElementConstructor = defineCustomElement(UvHealthClaimForm) as unknown as UniversalVueElementConstructor
export const UvHealthClaimPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvHealthClaimPreview) as unknown as UniversalVueElementConstructor
export const UvHealthCarePlanBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvHealthCarePlanBadge) as unknown as UniversalVueElementConstructor
export const UvHealthCarePlanIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvHealthCarePlanIndicator) as unknown as UniversalVueElementConstructor
export const UvHealthCarePlanProgressElement: UniversalVueElementConstructor = defineCustomElement(UvHealthCarePlanProgress) as unknown as UniversalVueElementConstructor
export const UvHealthCarePlanScoreElement: UniversalVueElementConstructor = defineCustomElement(UvHealthCarePlanScore) as unknown as UniversalVueElementConstructor
export const UvHealthCarePlanMeterElement: UniversalVueElementConstructor = defineCustomElement(UvHealthCarePlanMeter) as unknown as UniversalVueElementConstructor
export const UvHealthTriageMapElement: UniversalVueElementConstructor = defineCustomElement(UvHealthTriageMap) as unknown as UniversalVueElementConstructor
export const UvHealthTriageChartElement: UniversalVueElementConstructor = defineCustomElement(UvHealthTriageChart) as unknown as UniversalVueElementConstructor
export const UvHealthTriageDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvHealthTriageDiagram) as unknown as UniversalVueElementConstructor
export const UvHealthTriageBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvHealthTriageBreakdown) as unknown as UniversalVueElementConstructor
export const UvHealthTriageComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvHealthTriageComparison) as unknown as UniversalVueElementConstructor
export const UvEducationCourseOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvEducationCourseOverview) as unknown as UniversalVueElementConstructor
export const UvEducationCourseStatusElement: UniversalVueElementConstructor = defineCustomElement(UvEducationCourseStatus) as unknown as UniversalVueElementConstructor
export const UvEducationCourseTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvEducationCourseTimeline) as unknown as UniversalVueElementConstructor
export const UvEducationCourseFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvEducationCourseFilters) as unknown as UniversalVueElementConstructor
export const UvEducationCourseActionsElement: UniversalVueElementConstructor = defineCustomElement(UvEducationCourseActions) as unknown as UniversalVueElementConstructor
export const UvEducationLessonDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvEducationLessonDashboard) as unknown as UniversalVueElementConstructor
export const UvEducationLessonSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvEducationLessonSummary) as unknown as UniversalVueElementConstructor
export const UvEducationLessonListElement: UniversalVueElementConstructor = defineCustomElement(UvEducationLessonList) as unknown as UniversalVueElementConstructor
export const UvEducationLessonDetailElement: UniversalVueElementConstructor = defineCustomElement(UvEducationLessonDetail) as unknown as UniversalVueElementConstructor
export const UvEducationLessonToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvEducationLessonToolbar) as unknown as UniversalVueElementConstructor
export const UvEducationStudentCardElement: UniversalVueElementConstructor = defineCustomElement(UvEducationStudentCard) as unknown as UniversalVueElementConstructor
export const UvEducationStudentTableElement: UniversalVueElementConstructor = defineCustomElement(UvEducationStudentTable) as unknown as UniversalVueElementConstructor
export const UvEducationStudentMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvEducationStudentMetrics) as unknown as UniversalVueElementConstructor
export const UvEducationStudentInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvEducationStudentInsights) as unknown as UniversalVueElementConstructor
export const UvEducationStudentMenuElement: UniversalVueElementConstructor = defineCustomElement(UvEducationStudentMenu) as unknown as UniversalVueElementConstructor
export const UvEducationTeacherExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvEducationTeacherExplorer) as unknown as UniversalVueElementConstructor
export const UvEducationTeacherNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvEducationTeacherNavigator) as unknown as UniversalVueElementConstructor
export const UvEducationTeacherViewerElement: UniversalVueElementConstructor = defineCustomElement(UvEducationTeacherViewer) as unknown as UniversalVueElementConstructor
export const UvEducationTeacherEditorElement: UniversalVueElementConstructor = defineCustomElement(UvEducationTeacherEditor) as unknown as UniversalVueElementConstructor
export const UvEducationTeacherSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvEducationTeacherSettings) as unknown as UniversalVueElementConstructor
export const UvEducationGradeQueueElement: UniversalVueElementConstructor = defineCustomElement(UvEducationGradeQueue) as unknown as UniversalVueElementConstructor
export const UvEducationGradeBoardElement: UniversalVueElementConstructor = defineCustomElement(UvEducationGradeBoard) as unknown as UniversalVueElementConstructor
export const UvEducationGradeCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvEducationGradeCalendar) as unknown as UniversalVueElementConstructor
export const UvEducationGradeHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvEducationGradeHistory) as unknown as UniversalVueElementConstructor
export const UvEducationGradeReportsElement: UniversalVueElementConstructor = defineCustomElement(UvEducationGradeReports) as unknown as UniversalVueElementConstructor
export const UvEducationAssignmentHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvEducationAssignmentHeader) as unknown as UniversalVueElementConstructor
export const UvEducationAssignmentSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvEducationAssignmentSidebar) as unknown as UniversalVueElementConstructor
export const UvEducationAssignmentGridElement: UniversalVueElementConstructor = defineCustomElement(UvEducationAssignmentGrid) as unknown as UniversalVueElementConstructor
export const UvEducationAssignmentPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEducationAssignmentPanel) as unknown as UniversalVueElementConstructor
export const UvEducationAssignmentFooterElement: UniversalVueElementConstructor = defineCustomElement(UvEducationAssignmentFooter) as unknown as UniversalVueElementConstructor
export const UvEducationExamMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvEducationExamMonitor) as unknown as UniversalVueElementConstructor
export const UvEducationExamTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvEducationExamTracker) as unknown as UniversalVueElementConstructor
export const UvEducationExamAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvEducationExamAlerts) as unknown as UniversalVueElementConstructor
export const UvEducationExamActivityElement: UniversalVueElementConstructor = defineCustomElement(UvEducationExamActivity) as unknown as UniversalVueElementConstructor
export const UvEducationExamControlsElement: UniversalVueElementConstructor = defineCustomElement(UvEducationExamControls) as unknown as UniversalVueElementConstructor
export const UvEducationEnrollmentSearchElement: UniversalVueElementConstructor = defineCustomElement(UvEducationEnrollmentSearch) as unknown as UniversalVueElementConstructor
export const UvEducationEnrollmentSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvEducationEnrollmentSelector) as unknown as UniversalVueElementConstructor
export const UvEducationEnrollmentPickerElement: UniversalVueElementConstructor = defineCustomElement(UvEducationEnrollmentPicker) as unknown as UniversalVueElementConstructor
export const UvEducationEnrollmentFormElement: UniversalVueElementConstructor = defineCustomElement(UvEducationEnrollmentForm) as unknown as UniversalVueElementConstructor
export const UvEducationEnrollmentPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvEducationEnrollmentPreview) as unknown as UniversalVueElementConstructor
export const UvEducationCurriculumBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvEducationCurriculumBadge) as unknown as UniversalVueElementConstructor
export const UvEducationCurriculumIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvEducationCurriculumIndicator) as unknown as UniversalVueElementConstructor
export const UvEducationCurriculumProgressElement: UniversalVueElementConstructor = defineCustomElement(UvEducationCurriculumProgress) as unknown as UniversalVueElementConstructor
export const UvEducationCurriculumScoreElement: UniversalVueElementConstructor = defineCustomElement(UvEducationCurriculumScore) as unknown as UniversalVueElementConstructor
export const UvEducationCurriculumMeterElement: UniversalVueElementConstructor = defineCustomElement(UvEducationCurriculumMeter) as unknown as UniversalVueElementConstructor
export const UvEducationAttendanceMapElement: UniversalVueElementConstructor = defineCustomElement(UvEducationAttendanceMap) as unknown as UniversalVueElementConstructor
export const UvEducationAttendanceChartElement: UniversalVueElementConstructor = defineCustomElement(UvEducationAttendanceChart) as unknown as UniversalVueElementConstructor
export const UvEducationAttendanceDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvEducationAttendanceDiagram) as unknown as UniversalVueElementConstructor
export const UvEducationAttendanceBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvEducationAttendanceBreakdown) as unknown as UniversalVueElementConstructor
export const UvEducationAttendanceComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvEducationAttendanceComparison) as unknown as UniversalVueElementConstructor
export const UvLogisticsShipmentOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsShipmentOverview) as unknown as UniversalVueElementConstructor
export const UvLogisticsShipmentStatusElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsShipmentStatus) as unknown as UniversalVueElementConstructor
export const UvLogisticsShipmentTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsShipmentTimeline) as unknown as UniversalVueElementConstructor
export const UvLogisticsShipmentFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsShipmentFilters) as unknown as UniversalVueElementConstructor
export const UvLogisticsShipmentActionsElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsShipmentActions) as unknown as UniversalVueElementConstructor
export const UvLogisticsDeliveryDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsDeliveryDashboard) as unknown as UniversalVueElementConstructor
export const UvLogisticsDeliverySummaryElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsDeliverySummary) as unknown as UniversalVueElementConstructor
export const UvLogisticsDeliveryListElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsDeliveryList) as unknown as UniversalVueElementConstructor
export const UvLogisticsDeliveryDetailElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsDeliveryDetail) as unknown as UniversalVueElementConstructor
export const UvLogisticsDeliveryToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsDeliveryToolbar) as unknown as UniversalVueElementConstructor
export const UvLogisticsRouteCardElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsRouteCard) as unknown as UniversalVueElementConstructor
export const UvLogisticsRouteTableElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsRouteTable) as unknown as UniversalVueElementConstructor
export const UvLogisticsRouteMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsRouteMetrics) as unknown as UniversalVueElementConstructor
export const UvLogisticsRouteInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsRouteInsights) as unknown as UniversalVueElementConstructor
export const UvLogisticsRouteMenuElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsRouteMenu) as unknown as UniversalVueElementConstructor
export const UvLogisticsFleetExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsFleetExplorer) as unknown as UniversalVueElementConstructor
export const UvLogisticsFleetNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsFleetNavigator) as unknown as UniversalVueElementConstructor
export const UvLogisticsFleetViewerElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsFleetViewer) as unknown as UniversalVueElementConstructor
export const UvLogisticsFleetEditorElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsFleetEditor) as unknown as UniversalVueElementConstructor
export const UvLogisticsFleetSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsFleetSettings) as unknown as UniversalVueElementConstructor
export const UvLogisticsWarehouseQueueElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsWarehouseQueue) as unknown as UniversalVueElementConstructor
export const UvLogisticsWarehouseBoardElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsWarehouseBoard) as unknown as UniversalVueElementConstructor
export const UvLogisticsWarehouseCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsWarehouseCalendar) as unknown as UniversalVueElementConstructor
export const UvLogisticsWarehouseHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsWarehouseHistory) as unknown as UniversalVueElementConstructor
export const UvLogisticsWarehouseReportsElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsWarehouseReports) as unknown as UniversalVueElementConstructor
export const UvLogisticsInventoryHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsInventoryHeader) as unknown as UniversalVueElementConstructor
export const UvLogisticsInventorySidebarElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsInventorySidebar) as unknown as UniversalVueElementConstructor
export const UvLogisticsInventoryGridElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsInventoryGrid) as unknown as UniversalVueElementConstructor
export const UvLogisticsInventoryPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsInventoryPanel) as unknown as UniversalVueElementConstructor
export const UvLogisticsInventoryFooterElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsInventoryFooter) as unknown as UniversalVueElementConstructor
export const UvLogisticsPackageMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsPackageMonitor) as unknown as UniversalVueElementConstructor
export const UvLogisticsPackageTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsPackageTracker) as unknown as UniversalVueElementConstructor
export const UvLogisticsPackageAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsPackageAlerts) as unknown as UniversalVueElementConstructor
export const UvLogisticsPackageActivityElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsPackageActivity) as unknown as UniversalVueElementConstructor
export const UvLogisticsPackageControlsElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsPackageControls) as unknown as UniversalVueElementConstructor
export const UvLogisticsCarrierSearchElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsCarrierSearch) as unknown as UniversalVueElementConstructor
export const UvLogisticsCarrierSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsCarrierSelector) as unknown as UniversalVueElementConstructor
export const UvLogisticsCarrierPickerElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsCarrierPicker) as unknown as UniversalVueElementConstructor
export const UvLogisticsCarrierFormElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsCarrierForm) as unknown as UniversalVueElementConstructor
export const UvLogisticsCarrierPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsCarrierPreview) as unknown as UniversalVueElementConstructor
export const UvLogisticsDispatchBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsDispatchBadge) as unknown as UniversalVueElementConstructor
export const UvLogisticsDispatchIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsDispatchIndicator) as unknown as UniversalVueElementConstructor
export const UvLogisticsDispatchProgressElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsDispatchProgress) as unknown as UniversalVueElementConstructor
export const UvLogisticsDispatchScoreElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsDispatchScore) as unknown as UniversalVueElementConstructor
export const UvLogisticsDispatchMeterElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsDispatchMeter) as unknown as UniversalVueElementConstructor
export const UvLogisticsTrackingMapElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsTrackingMap) as unknown as UniversalVueElementConstructor
export const UvLogisticsTrackingChartElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsTrackingChart) as unknown as UniversalVueElementConstructor
export const UvLogisticsTrackingDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsTrackingDiagram) as unknown as UniversalVueElementConstructor
export const UvLogisticsTrackingBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsTrackingBreakdown) as unknown as UniversalVueElementConstructor
export const UvLogisticsTrackingComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvLogisticsTrackingComparison) as unknown as UniversalVueElementConstructor
export const UvManufacturingWorkOrderOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingWorkOrderOverview) as unknown as UniversalVueElementConstructor
export const UvManufacturingWorkOrderStatusElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingWorkOrderStatus) as unknown as UniversalVueElementConstructor
export const UvManufacturingWorkOrderTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingWorkOrderTimeline) as unknown as UniversalVueElementConstructor
export const UvManufacturingWorkOrderFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingWorkOrderFilters) as unknown as UniversalVueElementConstructor
export const UvManufacturingWorkOrderActionsElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingWorkOrderActions) as unknown as UniversalVueElementConstructor
export const UvManufacturingProductionDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingProductionDashboard) as unknown as UniversalVueElementConstructor
export const UvManufacturingProductionSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingProductionSummary) as unknown as UniversalVueElementConstructor
export const UvManufacturingProductionListElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingProductionList) as unknown as UniversalVueElementConstructor
export const UvManufacturingProductionDetailElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingProductionDetail) as unknown as UniversalVueElementConstructor
export const UvManufacturingProductionToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingProductionToolbar) as unknown as UniversalVueElementConstructor
export const UvManufacturingAssemblyCardElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingAssemblyCard) as unknown as UniversalVueElementConstructor
export const UvManufacturingAssemblyTableElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingAssemblyTable) as unknown as UniversalVueElementConstructor
export const UvManufacturingAssemblyMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingAssemblyMetrics) as unknown as UniversalVueElementConstructor
export const UvManufacturingAssemblyInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingAssemblyInsights) as unknown as UniversalVueElementConstructor
export const UvManufacturingAssemblyMenuElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingAssemblyMenu) as unknown as UniversalVueElementConstructor
export const UvManufacturingQualityExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingQualityExplorer) as unknown as UniversalVueElementConstructor
export const UvManufacturingQualityNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingQualityNavigator) as unknown as UniversalVueElementConstructor
export const UvManufacturingQualityViewerElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingQualityViewer) as unknown as UniversalVueElementConstructor
export const UvManufacturingQualityEditorElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingQualityEditor) as unknown as UniversalVueElementConstructor
export const UvManufacturingQualitySettingsElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingQualitySettings) as unknown as UniversalVueElementConstructor
export const UvManufacturingMaintenanceQueueElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMaintenanceQueue) as unknown as UniversalVueElementConstructor
export const UvManufacturingMaintenanceBoardElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMaintenanceBoard) as unknown as UniversalVueElementConstructor
export const UvManufacturingMaintenanceCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMaintenanceCalendar) as unknown as UniversalVueElementConstructor
export const UvManufacturingMaintenanceHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMaintenanceHistory) as unknown as UniversalVueElementConstructor
export const UvManufacturingMaintenanceReportsElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMaintenanceReports) as unknown as UniversalVueElementConstructor
export const UvManufacturingDowntimeHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingDowntimeHeader) as unknown as UniversalVueElementConstructor
export const UvManufacturingDowntimeSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingDowntimeSidebar) as unknown as UniversalVueElementConstructor
export const UvManufacturingDowntimeGridElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingDowntimeGrid) as unknown as UniversalVueElementConstructor
export const UvManufacturingDowntimePanelElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingDowntimePanel) as unknown as UniversalVueElementConstructor
export const UvManufacturingDowntimeFooterElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingDowntimeFooter) as unknown as UniversalVueElementConstructor
export const UvManufacturingMaterialMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMaterialMonitor) as unknown as UniversalVueElementConstructor
export const UvManufacturingMaterialTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMaterialTracker) as unknown as UniversalVueElementConstructor
export const UvManufacturingMaterialAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMaterialAlerts) as unknown as UniversalVueElementConstructor
export const UvManufacturingMaterialActivityElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMaterialActivity) as unknown as UniversalVueElementConstructor
export const UvManufacturingMaterialControlsElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMaterialControls) as unknown as UniversalVueElementConstructor
export const UvManufacturingMachineSearchElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMachineSearch) as unknown as UniversalVueElementConstructor
export const UvManufacturingMachineSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMachineSelector) as unknown as UniversalVueElementConstructor
export const UvManufacturingMachinePickerElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMachinePicker) as unknown as UniversalVueElementConstructor
export const UvManufacturingMachineFormElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMachineForm) as unknown as UniversalVueElementConstructor
export const UvManufacturingMachinePreviewElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingMachinePreview) as unknown as UniversalVueElementConstructor
export const UvManufacturingPlantBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingPlantBadge) as unknown as UniversalVueElementConstructor
export const UvManufacturingPlantIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingPlantIndicator) as unknown as UniversalVueElementConstructor
export const UvManufacturingPlantProgressElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingPlantProgress) as unknown as UniversalVueElementConstructor
export const UvManufacturingPlantScoreElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingPlantScore) as unknown as UniversalVueElementConstructor
export const UvManufacturingPlantMeterElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingPlantMeter) as unknown as UniversalVueElementConstructor
export const UvManufacturingBatchMapElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingBatchMap) as unknown as UniversalVueElementConstructor
export const UvManufacturingBatchChartElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingBatchChart) as unknown as UniversalVueElementConstructor
export const UvManufacturingBatchDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingBatchDiagram) as unknown as UniversalVueElementConstructor
export const UvManufacturingBatchBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingBatchBreakdown) as unknown as UniversalVueElementConstructor
export const UvManufacturingBatchComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvManufacturingBatchComparison) as unknown as UniversalVueElementConstructor
export const UvRetailStoreOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvRetailStoreOverview) as unknown as UniversalVueElementConstructor
export const UvRetailStoreStatusElement: UniversalVueElementConstructor = defineCustomElement(UvRetailStoreStatus) as unknown as UniversalVueElementConstructor
export const UvRetailStoreTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvRetailStoreTimeline) as unknown as UniversalVueElementConstructor
export const UvRetailStoreFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvRetailStoreFilters) as unknown as UniversalVueElementConstructor
export const UvRetailStoreActionsElement: UniversalVueElementConstructor = defineCustomElement(UvRetailStoreActions) as unknown as UniversalVueElementConstructor
export const UvRetailPointOfSaleDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvRetailPointOfSaleDashboard) as unknown as UniversalVueElementConstructor
export const UvRetailPointOfSaleSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvRetailPointOfSaleSummary) as unknown as UniversalVueElementConstructor
export const UvRetailPointOfSaleListElement: UniversalVueElementConstructor = defineCustomElement(UvRetailPointOfSaleList) as unknown as UniversalVueElementConstructor
export const UvRetailPointOfSaleDetailElement: UniversalVueElementConstructor = defineCustomElement(UvRetailPointOfSaleDetail) as unknown as UniversalVueElementConstructor
export const UvRetailPointOfSaleToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvRetailPointOfSaleToolbar) as unknown as UniversalVueElementConstructor
export const UvRetailReceiptCardElement: UniversalVueElementConstructor = defineCustomElement(UvRetailReceiptCard) as unknown as UniversalVueElementConstructor
export const UvRetailReceiptTableElement: UniversalVueElementConstructor = defineCustomElement(UvRetailReceiptTable) as unknown as UniversalVueElementConstructor
export const UvRetailReceiptMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvRetailReceiptMetrics) as unknown as UniversalVueElementConstructor
export const UvRetailReceiptInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvRetailReceiptInsights) as unknown as UniversalVueElementConstructor
export const UvRetailReceiptMenuElement: UniversalVueElementConstructor = defineCustomElement(UvRetailReceiptMenu) as unknown as UniversalVueElementConstructor
export const UvRetailLoyaltyExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvRetailLoyaltyExplorer) as unknown as UniversalVueElementConstructor
export const UvRetailLoyaltyNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvRetailLoyaltyNavigator) as unknown as UniversalVueElementConstructor
export const UvRetailLoyaltyViewerElement: UniversalVueElementConstructor = defineCustomElement(UvRetailLoyaltyViewer) as unknown as UniversalVueElementConstructor
export const UvRetailLoyaltyEditorElement: UniversalVueElementConstructor = defineCustomElement(UvRetailLoyaltyEditor) as unknown as UniversalVueElementConstructor
export const UvRetailLoyaltySettingsElement: UniversalVueElementConstructor = defineCustomElement(UvRetailLoyaltySettings) as unknown as UniversalVueElementConstructor
export const UvRetailPromotionQueueElement: UniversalVueElementConstructor = defineCustomElement(UvRetailPromotionQueue) as unknown as UniversalVueElementConstructor
export const UvRetailPromotionBoardElement: UniversalVueElementConstructor = defineCustomElement(UvRetailPromotionBoard) as unknown as UniversalVueElementConstructor
export const UvRetailPromotionCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvRetailPromotionCalendar) as unknown as UniversalVueElementConstructor
export const UvRetailPromotionHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvRetailPromotionHistory) as unknown as UniversalVueElementConstructor
export const UvRetailPromotionReportsElement: UniversalVueElementConstructor = defineCustomElement(UvRetailPromotionReports) as unknown as UniversalVueElementConstructor
export const UvRetailMerchandisingHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvRetailMerchandisingHeader) as unknown as UniversalVueElementConstructor
export const UvRetailMerchandisingSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvRetailMerchandisingSidebar) as unknown as UniversalVueElementConstructor
export const UvRetailMerchandisingGridElement: UniversalVueElementConstructor = defineCustomElement(UvRetailMerchandisingGrid) as unknown as UniversalVueElementConstructor
export const UvRetailMerchandisingPanelElement: UniversalVueElementConstructor = defineCustomElement(UvRetailMerchandisingPanel) as unknown as UniversalVueElementConstructor
export const UvRetailMerchandisingFooterElement: UniversalVueElementConstructor = defineCustomElement(UvRetailMerchandisingFooter) as unknown as UniversalVueElementConstructor
export const UvRetailStockMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvRetailStockMonitor) as unknown as UniversalVueElementConstructor
export const UvRetailStockTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvRetailStockTracker) as unknown as UniversalVueElementConstructor
export const UvRetailStockAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvRetailStockAlerts) as unknown as UniversalVueElementConstructor
export const UvRetailStockActivityElement: UniversalVueElementConstructor = defineCustomElement(UvRetailStockActivity) as unknown as UniversalVueElementConstructor
export const UvRetailStockControlsElement: UniversalVueElementConstructor = defineCustomElement(UvRetailStockControls) as unknown as UniversalVueElementConstructor
export const UvRetailReturnSearchElement: UniversalVueElementConstructor = defineCustomElement(UvRetailReturnSearch) as unknown as UniversalVueElementConstructor
export const UvRetailReturnSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvRetailReturnSelector) as unknown as UniversalVueElementConstructor
export const UvRetailReturnPickerElement: UniversalVueElementConstructor = defineCustomElement(UvRetailReturnPicker) as unknown as UniversalVueElementConstructor
export const UvRetailReturnFormElement: UniversalVueElementConstructor = defineCustomElement(UvRetailReturnForm) as unknown as UniversalVueElementConstructor
export const UvRetailReturnPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvRetailReturnPreview) as unknown as UniversalVueElementConstructor
export const UvRetailGiftCardBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvRetailGiftCardBadge) as unknown as UniversalVueElementConstructor
export const UvRetailGiftCardIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvRetailGiftCardIndicator) as unknown as UniversalVueElementConstructor
export const UvRetailGiftCardProgressElement: UniversalVueElementConstructor = defineCustomElement(UvRetailGiftCardProgress) as unknown as UniversalVueElementConstructor
export const UvRetailGiftCardScoreElement: UniversalVueElementConstructor = defineCustomElement(UvRetailGiftCardScore) as unknown as UniversalVueElementConstructor
export const UvRetailGiftCardMeterElement: UniversalVueElementConstructor = defineCustomElement(UvRetailGiftCardMeter) as unknown as UniversalVueElementConstructor
export const UvRetailCustomerMapElement: UniversalVueElementConstructor = defineCustomElement(UvRetailCustomerMap) as unknown as UniversalVueElementConstructor
export const UvRetailCustomerChartElement: UniversalVueElementConstructor = defineCustomElement(UvRetailCustomerChart) as unknown as UniversalVueElementConstructor
export const UvRetailCustomerDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvRetailCustomerDiagram) as unknown as UniversalVueElementConstructor
export const UvRetailCustomerBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvRetailCustomerBreakdown) as unknown as UniversalVueElementConstructor
export const UvRetailCustomerComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvRetailCustomerComparison) as unknown as UniversalVueElementConstructor
export const UvHospitalityBookingOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityBookingOverview) as unknown as UniversalVueElementConstructor
export const UvHospitalityBookingStatusElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityBookingStatus) as unknown as UniversalVueElementConstructor
export const UvHospitalityBookingTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityBookingTimeline) as unknown as UniversalVueElementConstructor
export const UvHospitalityBookingFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityBookingFilters) as unknown as UniversalVueElementConstructor
export const UvHospitalityBookingActionsElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityBookingActions) as unknown as UniversalVueElementConstructor
export const UvHospitalityRoomDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityRoomDashboard) as unknown as UniversalVueElementConstructor
export const UvHospitalityRoomSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityRoomSummary) as unknown as UniversalVueElementConstructor
export const UvHospitalityRoomListElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityRoomList) as unknown as UniversalVueElementConstructor
export const UvHospitalityRoomDetailElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityRoomDetail) as unknown as UniversalVueElementConstructor
export const UvHospitalityRoomToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityRoomToolbar) as unknown as UniversalVueElementConstructor
export const UvHospitalityGuestCardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityGuestCard) as unknown as UniversalVueElementConstructor
export const UvHospitalityGuestTableElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityGuestTable) as unknown as UniversalVueElementConstructor
export const UvHospitalityGuestMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityGuestMetrics) as unknown as UniversalVueElementConstructor
export const UvHospitalityGuestInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityGuestInsights) as unknown as UniversalVueElementConstructor
export const UvHospitalityGuestMenuElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityGuestMenu) as unknown as UniversalVueElementConstructor
export const UvHospitalityReservationExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityReservationExplorer) as unknown as UniversalVueElementConstructor
export const UvHospitalityReservationNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityReservationNavigator) as unknown as UniversalVueElementConstructor
export const UvHospitalityReservationViewerElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityReservationViewer) as unknown as UniversalVueElementConstructor
export const UvHospitalityReservationEditorElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityReservationEditor) as unknown as UniversalVueElementConstructor
export const UvHospitalityReservationSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityReservationSettings) as unknown as UniversalVueElementConstructor
export const UvHospitalityCheckInQueueElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityCheckInQueue) as unknown as UniversalVueElementConstructor
export const UvHospitalityCheckInBoardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityCheckInBoard) as unknown as UniversalVueElementConstructor
export const UvHospitalityCheckInCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityCheckInCalendar) as unknown as UniversalVueElementConstructor
export const UvHospitalityCheckInHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityCheckInHistory) as unknown as UniversalVueElementConstructor
export const UvHospitalityCheckInReportsElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityCheckInReports) as unknown as UniversalVueElementConstructor
export const UvHospitalityCheckOutHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityCheckOutHeader) as unknown as UniversalVueElementConstructor
export const UvHospitalityCheckOutSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityCheckOutSidebar) as unknown as UniversalVueElementConstructor
export const UvHospitalityCheckOutGridElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityCheckOutGrid) as unknown as UniversalVueElementConstructor
export const UvHospitalityCheckOutPanelElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityCheckOutPanel) as unknown as UniversalVueElementConstructor
export const UvHospitalityCheckOutFooterElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityCheckOutFooter) as unknown as UniversalVueElementConstructor
export const UvHospitalityHousekeepingMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityHousekeepingMonitor) as unknown as UniversalVueElementConstructor
export const UvHospitalityHousekeepingTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityHousekeepingTracker) as unknown as UniversalVueElementConstructor
export const UvHospitalityHousekeepingAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityHousekeepingAlerts) as unknown as UniversalVueElementConstructor
export const UvHospitalityHousekeepingActivityElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityHousekeepingActivity) as unknown as UniversalVueElementConstructor
export const UvHospitalityHousekeepingControlsElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityHousekeepingControls) as unknown as UniversalVueElementConstructor
export const UvHospitalityAmenitySearchElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityAmenitySearch) as unknown as UniversalVueElementConstructor
export const UvHospitalityAmenitySelectorElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityAmenitySelector) as unknown as UniversalVueElementConstructor
export const UvHospitalityAmenityPickerElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityAmenityPicker) as unknown as UniversalVueElementConstructor
export const UvHospitalityAmenityFormElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityAmenityForm) as unknown as UniversalVueElementConstructor
export const UvHospitalityAmenityPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityAmenityPreview) as unknown as UniversalVueElementConstructor
export const UvHospitalityRatePlanBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityRatePlanBadge) as unknown as UniversalVueElementConstructor
export const UvHospitalityRatePlanIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityRatePlanIndicator) as unknown as UniversalVueElementConstructor
export const UvHospitalityRatePlanProgressElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityRatePlanProgress) as unknown as UniversalVueElementConstructor
export const UvHospitalityRatePlanScoreElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityRatePlanScore) as unknown as UniversalVueElementConstructor
export const UvHospitalityRatePlanMeterElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityRatePlanMeter) as unknown as UniversalVueElementConstructor
export const UvHospitalityOccupancyMapElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOccupancyMap) as unknown as UniversalVueElementConstructor
export const UvHospitalityOccupancyChartElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOccupancyChart) as unknown as UniversalVueElementConstructor
export const UvHospitalityOccupancyDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOccupancyDiagram) as unknown as UniversalVueElementConstructor
export const UvHospitalityOccupancyBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOccupancyBreakdown) as unknown as UniversalVueElementConstructor
export const UvHospitalityOccupancyComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOccupancyComparison) as unknown as UniversalVueElementConstructor
export const UvTravelTripOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvTravelTripOverview) as unknown as UniversalVueElementConstructor
export const UvTravelTripStatusElement: UniversalVueElementConstructor = defineCustomElement(UvTravelTripStatus) as unknown as UniversalVueElementConstructor
export const UvTravelTripTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvTravelTripTimeline) as unknown as UniversalVueElementConstructor
export const UvTravelTripFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvTravelTripFilters) as unknown as UniversalVueElementConstructor
export const UvTravelTripActionsElement: UniversalVueElementConstructor = defineCustomElement(UvTravelTripActions) as unknown as UniversalVueElementConstructor
export const UvTravelItineraryDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelItineraryDashboard) as unknown as UniversalVueElementConstructor
export const UvTravelItinerarySummaryElement: UniversalVueElementConstructor = defineCustomElement(UvTravelItinerarySummary) as unknown as UniversalVueElementConstructor
export const UvTravelItineraryListElement: UniversalVueElementConstructor = defineCustomElement(UvTravelItineraryList) as unknown as UniversalVueElementConstructor
export const UvTravelItineraryDetailElement: UniversalVueElementConstructor = defineCustomElement(UvTravelItineraryDetail) as unknown as UniversalVueElementConstructor
export const UvTravelItineraryToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvTravelItineraryToolbar) as unknown as UniversalVueElementConstructor
export const UvTravelFlightCardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelFlightCard) as unknown as UniversalVueElementConstructor
export const UvTravelFlightTableElement: UniversalVueElementConstructor = defineCustomElement(UvTravelFlightTable) as unknown as UniversalVueElementConstructor
export const UvTravelFlightMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvTravelFlightMetrics) as unknown as UniversalVueElementConstructor
export const UvTravelFlightInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvTravelFlightInsights) as unknown as UniversalVueElementConstructor
export const UvTravelFlightMenuElement: UniversalVueElementConstructor = defineCustomElement(UvTravelFlightMenu) as unknown as UniversalVueElementConstructor
export const UvTravelHotelExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvTravelHotelExplorer) as unknown as UniversalVueElementConstructor
export const UvTravelHotelNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvTravelHotelNavigator) as unknown as UniversalVueElementConstructor
export const UvTravelHotelViewerElement: UniversalVueElementConstructor = defineCustomElement(UvTravelHotelViewer) as unknown as UniversalVueElementConstructor
export const UvTravelHotelEditorElement: UniversalVueElementConstructor = defineCustomElement(UvTravelHotelEditor) as unknown as UniversalVueElementConstructor
export const UvTravelHotelSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvTravelHotelSettings) as unknown as UniversalVueElementConstructor
export const UvTravelRentalCarQueueElement: UniversalVueElementConstructor = defineCustomElement(UvTravelRentalCarQueue) as unknown as UniversalVueElementConstructor
export const UvTravelRentalCarBoardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelRentalCarBoard) as unknown as UniversalVueElementConstructor
export const UvTravelRentalCarCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvTravelRentalCarCalendar) as unknown as UniversalVueElementConstructor
export const UvTravelRentalCarHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvTravelRentalCarHistory) as unknown as UniversalVueElementConstructor
export const UvTravelRentalCarReportsElement: UniversalVueElementConstructor = defineCustomElement(UvTravelRentalCarReports) as unknown as UniversalVueElementConstructor
export const UvTravelVisaHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvTravelVisaHeader) as unknown as UniversalVueElementConstructor
export const UvTravelVisaSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvTravelVisaSidebar) as unknown as UniversalVueElementConstructor
export const UvTravelVisaGridElement: UniversalVueElementConstructor = defineCustomElement(UvTravelVisaGrid) as unknown as UniversalVueElementConstructor
export const UvTravelVisaPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTravelVisaPanel) as unknown as UniversalVueElementConstructor
export const UvTravelVisaFooterElement: UniversalVueElementConstructor = defineCustomElement(UvTravelVisaFooter) as unknown as UniversalVueElementConstructor
export const UvTravelPassportMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvTravelPassportMonitor) as unknown as UniversalVueElementConstructor
export const UvTravelPassportTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvTravelPassportTracker) as unknown as UniversalVueElementConstructor
export const UvTravelPassportAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvTravelPassportAlerts) as unknown as UniversalVueElementConstructor
export const UvTravelPassportActivityElement: UniversalVueElementConstructor = defineCustomElement(UvTravelPassportActivity) as unknown as UniversalVueElementConstructor
export const UvTravelPassportControlsElement: UniversalVueElementConstructor = defineCustomElement(UvTravelPassportControls) as unknown as UniversalVueElementConstructor
export const UvTravelDestinationSearchElement: UniversalVueElementConstructor = defineCustomElement(UvTravelDestinationSearch) as unknown as UniversalVueElementConstructor
export const UvTravelDestinationSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvTravelDestinationSelector) as unknown as UniversalVueElementConstructor
export const UvTravelDestinationPickerElement: UniversalVueElementConstructor = defineCustomElement(UvTravelDestinationPicker) as unknown as UniversalVueElementConstructor
export const UvTravelDestinationFormElement: UniversalVueElementConstructor = defineCustomElement(UvTravelDestinationForm) as unknown as UniversalVueElementConstructor
export const UvTravelDestinationPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvTravelDestinationPreview) as unknown as UniversalVueElementConstructor
export const UvTravelTravelerBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvTravelTravelerBadge) as unknown as UniversalVueElementConstructor
export const UvTravelTravelerIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvTravelTravelerIndicator) as unknown as UniversalVueElementConstructor
export const UvTravelTravelerProgressElement: UniversalVueElementConstructor = defineCustomElement(UvTravelTravelerProgress) as unknown as UniversalVueElementConstructor
export const UvTravelTravelerScoreElement: UniversalVueElementConstructor = defineCustomElement(UvTravelTravelerScore) as unknown as UniversalVueElementConstructor
export const UvTravelTravelerMeterElement: UniversalVueElementConstructor = defineCustomElement(UvTravelTravelerMeter) as unknown as UniversalVueElementConstructor
export const UvTravelBaggageMapElement: UniversalVueElementConstructor = defineCustomElement(UvTravelBaggageMap) as unknown as UniversalVueElementConstructor
export const UvTravelBaggageChartElement: UniversalVueElementConstructor = defineCustomElement(UvTravelBaggageChart) as unknown as UniversalVueElementConstructor
export const UvTravelBaggageDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvTravelBaggageDiagram) as unknown as UniversalVueElementConstructor
export const UvTravelBaggageBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvTravelBaggageBreakdown) as unknown as UniversalVueElementConstructor
export const UvTravelBaggageComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvTravelBaggageComparison) as unknown as UniversalVueElementConstructor
export const UvRealEstatePropertyOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstatePropertyOverview) as unknown as UniversalVueElementConstructor
export const UvRealEstatePropertyStatusElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstatePropertyStatus) as unknown as UniversalVueElementConstructor
export const UvRealEstatePropertyTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstatePropertyTimeline) as unknown as UniversalVueElementConstructor
export const UvRealEstatePropertyFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstatePropertyFilters) as unknown as UniversalVueElementConstructor
export const UvRealEstatePropertyActionsElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstatePropertyActions) as unknown as UniversalVueElementConstructor
export const UvRealEstateListingDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateListingDashboard) as unknown as UniversalVueElementConstructor
export const UvRealEstateListingSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateListingSummary) as unknown as UniversalVueElementConstructor
export const UvRealEstateListingListElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateListingList) as unknown as UniversalVueElementConstructor
export const UvRealEstateListingDetailElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateListingDetail) as unknown as UniversalVueElementConstructor
export const UvRealEstateListingToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateListingToolbar) as unknown as UniversalVueElementConstructor
export const UvRealEstateLeaseCardElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateLeaseCard) as unknown as UniversalVueElementConstructor
export const UvRealEstateLeaseTableElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateLeaseTable) as unknown as UniversalVueElementConstructor
export const UvRealEstateLeaseMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateLeaseMetrics) as unknown as UniversalVueElementConstructor
export const UvRealEstateLeaseInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateLeaseInsights) as unknown as UniversalVueElementConstructor
export const UvRealEstateLeaseMenuElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateLeaseMenu) as unknown as UniversalVueElementConstructor
export const UvRealEstateTenantExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateTenantExplorer) as unknown as UniversalVueElementConstructor
export const UvRealEstateTenantNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateTenantNavigator) as unknown as UniversalVueElementConstructor
export const UvRealEstateTenantViewerElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateTenantViewer) as unknown as UniversalVueElementConstructor
export const UvRealEstateTenantEditorElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateTenantEditor) as unknown as UniversalVueElementConstructor
export const UvRealEstateTenantSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateTenantSettings) as unknown as UniversalVueElementConstructor
export const UvRealEstateLandlordQueueElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateLandlordQueue) as unknown as UniversalVueElementConstructor
export const UvRealEstateLandlordBoardElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateLandlordBoard) as unknown as UniversalVueElementConstructor
export const UvRealEstateLandlordCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateLandlordCalendar) as unknown as UniversalVueElementConstructor
export const UvRealEstateLandlordHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateLandlordHistory) as unknown as UniversalVueElementConstructor
export const UvRealEstateLandlordReportsElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateLandlordReports) as unknown as UniversalVueElementConstructor
export const UvRealEstateInspectionHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateInspectionHeader) as unknown as UniversalVueElementConstructor
export const UvRealEstateInspectionSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateInspectionSidebar) as unknown as UniversalVueElementConstructor
export const UvRealEstateInspectionGridElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateInspectionGrid) as unknown as UniversalVueElementConstructor
export const UvRealEstateInspectionPanelElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateInspectionPanel) as unknown as UniversalVueElementConstructor
export const UvRealEstateInspectionFooterElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateInspectionFooter) as unknown as UniversalVueElementConstructor
export const UvRealEstateMortgageMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateMortgageMonitor) as unknown as UniversalVueElementConstructor
export const UvRealEstateMortgageTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateMortgageTracker) as unknown as UniversalVueElementConstructor
export const UvRealEstateMortgageAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateMortgageAlerts) as unknown as UniversalVueElementConstructor
export const UvRealEstateMortgageActivityElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateMortgageActivity) as unknown as UniversalVueElementConstructor
export const UvRealEstateMortgageControlsElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateMortgageControls) as unknown as UniversalVueElementConstructor
export const UvRealEstateValuationSearchElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateValuationSearch) as unknown as UniversalVueElementConstructor
export const UvRealEstateValuationSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateValuationSelector) as unknown as UniversalVueElementConstructor
export const UvRealEstateValuationPickerElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateValuationPicker) as unknown as UniversalVueElementConstructor
export const UvRealEstateValuationFormElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateValuationForm) as unknown as UniversalVueElementConstructor
export const UvRealEstateValuationPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateValuationPreview) as unknown as UniversalVueElementConstructor
export const UvRealEstateAgentBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateAgentBadge) as unknown as UniversalVueElementConstructor
export const UvRealEstateAgentIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateAgentIndicator) as unknown as UniversalVueElementConstructor
export const UvRealEstateAgentProgressElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateAgentProgress) as unknown as UniversalVueElementConstructor
export const UvRealEstateAgentScoreElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateAgentScore) as unknown as UniversalVueElementConstructor
export const UvRealEstateAgentMeterElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateAgentMeter) as unknown as UniversalVueElementConstructor
export const UvRealEstateOfferMapElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateOfferMap) as unknown as UniversalVueElementConstructor
export const UvRealEstateOfferChartElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateOfferChart) as unknown as UniversalVueElementConstructor
export const UvRealEstateOfferDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateOfferDiagram) as unknown as UniversalVueElementConstructor
export const UvRealEstateOfferBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateOfferBreakdown) as unknown as UniversalVueElementConstructor
export const UvRealEstateOfferComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvRealEstateOfferComparison) as unknown as UniversalVueElementConstructor
export const UvConstructionProjectOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionProjectOverview) as unknown as UniversalVueElementConstructor
export const UvConstructionProjectStatusElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionProjectStatus) as unknown as UniversalVueElementConstructor
export const UvConstructionProjectTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionProjectTimeline) as unknown as UniversalVueElementConstructor
export const UvConstructionProjectFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionProjectFilters) as unknown as UniversalVueElementConstructor
export const UvConstructionProjectActionsElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionProjectActions) as unknown as UniversalVueElementConstructor
export const UvConstructionSiteDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionSiteDashboard) as unknown as UniversalVueElementConstructor
export const UvConstructionSiteSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionSiteSummary) as unknown as UniversalVueElementConstructor
export const UvConstructionSiteListElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionSiteList) as unknown as UniversalVueElementConstructor
export const UvConstructionSiteDetailElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionSiteDetail) as unknown as UniversalVueElementConstructor
export const UvConstructionSiteToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionSiteToolbar) as unknown as UniversalVueElementConstructor
export const UvConstructionContractorCardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionContractorCard) as unknown as UniversalVueElementConstructor
export const UvConstructionContractorTableElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionContractorTable) as unknown as UniversalVueElementConstructor
export const UvConstructionContractorMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionContractorMetrics) as unknown as UniversalVueElementConstructor
export const UvConstructionContractorInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionContractorInsights) as unknown as UniversalVueElementConstructor
export const UvConstructionContractorMenuElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionContractorMenu) as unknown as UniversalVueElementConstructor
export const UvConstructionPermitExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionPermitExplorer) as unknown as UniversalVueElementConstructor
export const UvConstructionPermitNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionPermitNavigator) as unknown as UniversalVueElementConstructor
export const UvConstructionPermitViewerElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionPermitViewer) as unknown as UniversalVueElementConstructor
export const UvConstructionPermitEditorElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionPermitEditor) as unknown as UniversalVueElementConstructor
export const UvConstructionPermitSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionPermitSettings) as unknown as UniversalVueElementConstructor
export const UvConstructionBlueprintQueueElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionBlueprintQueue) as unknown as UniversalVueElementConstructor
export const UvConstructionBlueprintBoardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionBlueprintBoard) as unknown as UniversalVueElementConstructor
export const UvConstructionBlueprintCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionBlueprintCalendar) as unknown as UniversalVueElementConstructor
export const UvConstructionBlueprintHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionBlueprintHistory) as unknown as UniversalVueElementConstructor
export const UvConstructionBlueprintReportsElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionBlueprintReports) as unknown as UniversalVueElementConstructor
export const UvConstructionScheduleHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionScheduleHeader) as unknown as UniversalVueElementConstructor
export const UvConstructionScheduleSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionScheduleSidebar) as unknown as UniversalVueElementConstructor
export const UvConstructionScheduleGridElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionScheduleGrid) as unknown as UniversalVueElementConstructor
export const UvConstructionSchedulePanelElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionSchedulePanel) as unknown as UniversalVueElementConstructor
export const UvConstructionScheduleFooterElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionScheduleFooter) as unknown as UniversalVueElementConstructor
export const UvConstructionSafetyMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionSafetyMonitor) as unknown as UniversalVueElementConstructor
export const UvConstructionSafetyTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionSafetyTracker) as unknown as UniversalVueElementConstructor
export const UvConstructionSafetyAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionSafetyAlerts) as unknown as UniversalVueElementConstructor
export const UvConstructionSafetyActivityElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionSafetyActivity) as unknown as UniversalVueElementConstructor
export const UvConstructionSafetyControlsElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionSafetyControls) as unknown as UniversalVueElementConstructor
export const UvConstructionEquipmentSearchElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionEquipmentSearch) as unknown as UniversalVueElementConstructor
export const UvConstructionEquipmentSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionEquipmentSelector) as unknown as UniversalVueElementConstructor
export const UvConstructionEquipmentPickerElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionEquipmentPicker) as unknown as UniversalVueElementConstructor
export const UvConstructionEquipmentFormElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionEquipmentForm) as unknown as UniversalVueElementConstructor
export const UvConstructionEquipmentPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionEquipmentPreview) as unknown as UniversalVueElementConstructor
export const UvConstructionMaterialBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionMaterialBadge) as unknown as UniversalVueElementConstructor
export const UvConstructionMaterialIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionMaterialIndicator) as unknown as UniversalVueElementConstructor
export const UvConstructionMaterialProgressElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionMaterialProgress) as unknown as UniversalVueElementConstructor
export const UvConstructionMaterialScoreElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionMaterialScore) as unknown as UniversalVueElementConstructor
export const UvConstructionMaterialMeterElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionMaterialMeter) as unknown as UniversalVueElementConstructor
export const UvConstructionProgressMapElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionProgressMap) as unknown as UniversalVueElementConstructor
export const UvConstructionProgressChartElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionProgressChart) as unknown as UniversalVueElementConstructor
export const UvConstructionProgressDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionProgressDiagram) as unknown as UniversalVueElementConstructor
export const UvConstructionProgressBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionProgressBreakdown) as unknown as UniversalVueElementConstructor
export const UvConstructionProgressComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionProgressComparison) as unknown as UniversalVueElementConstructor
export const UvEnergyMeterOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyMeterOverview) as unknown as UniversalVueElementConstructor
export const UvEnergyMeterStatusElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyMeterStatus) as unknown as UniversalVueElementConstructor
export const UvEnergyMeterTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyMeterTimeline) as unknown as UniversalVueElementConstructor
export const UvEnergyMeterFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyMeterFilters) as unknown as UniversalVueElementConstructor
export const UvEnergyMeterActionsElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyMeterActions) as unknown as UniversalVueElementConstructor
export const UvEnergyUsageDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyUsageDashboard) as unknown as UniversalVueElementConstructor
export const UvEnergyUsageSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyUsageSummary) as unknown as UniversalVueElementConstructor
export const UvEnergyUsageListElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyUsageList) as unknown as UniversalVueElementConstructor
export const UvEnergyUsageDetailElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyUsageDetail) as unknown as UniversalVueElementConstructor
export const UvEnergyUsageToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyUsageToolbar) as unknown as UniversalVueElementConstructor
export const UvEnergyTariffCardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyTariffCard) as unknown as UniversalVueElementConstructor
export const UvEnergyTariffTableElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyTariffTable) as unknown as UniversalVueElementConstructor
export const UvEnergyTariffMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyTariffMetrics) as unknown as UniversalVueElementConstructor
export const UvEnergyTariffInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyTariffInsights) as unknown as UniversalVueElementConstructor
export const UvEnergyTariffMenuElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyTariffMenu) as unknown as UniversalVueElementConstructor
export const UvEnergyGridExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyGridExplorer) as unknown as UniversalVueElementConstructor
export const UvEnergyGridNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyGridNavigator) as unknown as UniversalVueElementConstructor
export const UvEnergyGridViewerElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyGridViewer) as unknown as UniversalVueElementConstructor
export const UvEnergyGridEditorElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyGridEditor) as unknown as UniversalVueElementConstructor
export const UvEnergyGridSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyGridSettings) as unknown as UniversalVueElementConstructor
export const UvEnergySolarQueueElement: UniversalVueElementConstructor = defineCustomElement(UvEnergySolarQueue) as unknown as UniversalVueElementConstructor
export const UvEnergySolarBoardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergySolarBoard) as unknown as UniversalVueElementConstructor
export const UvEnergySolarCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvEnergySolarCalendar) as unknown as UniversalVueElementConstructor
export const UvEnergySolarHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvEnergySolarHistory) as unknown as UniversalVueElementConstructor
export const UvEnergySolarReportsElement: UniversalVueElementConstructor = defineCustomElement(UvEnergySolarReports) as unknown as UniversalVueElementConstructor
export const UvEnergyWindHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyWindHeader) as unknown as UniversalVueElementConstructor
export const UvEnergyWindSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyWindSidebar) as unknown as UniversalVueElementConstructor
export const UvEnergyWindGridElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyWindGrid) as unknown as UniversalVueElementConstructor
export const UvEnergyWindPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyWindPanel) as unknown as UniversalVueElementConstructor
export const UvEnergyWindFooterElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyWindFooter) as unknown as UniversalVueElementConstructor
export const UvEnergyBatteryMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyBatteryMonitor) as unknown as UniversalVueElementConstructor
export const UvEnergyBatteryTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyBatteryTracker) as unknown as UniversalVueElementConstructor
export const UvEnergyBatteryAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyBatteryAlerts) as unknown as UniversalVueElementConstructor
export const UvEnergyBatteryActivityElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyBatteryActivity) as unknown as UniversalVueElementConstructor
export const UvEnergyBatteryControlsElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyBatteryControls) as unknown as UniversalVueElementConstructor
export const UvEnergyOutageSearchElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOutageSearch) as unknown as UniversalVueElementConstructor
export const UvEnergyOutageSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOutageSelector) as unknown as UniversalVueElementConstructor
export const UvEnergyOutagePickerElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOutagePicker) as unknown as UniversalVueElementConstructor
export const UvEnergyOutageFormElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOutageForm) as unknown as UniversalVueElementConstructor
export const UvEnergyOutagePreviewElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOutagePreview) as unknown as UniversalVueElementConstructor
export const UvEnergyDemandBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyDemandBadge) as unknown as UniversalVueElementConstructor
export const UvEnergyDemandIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyDemandIndicator) as unknown as UniversalVueElementConstructor
export const UvEnergyDemandProgressElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyDemandProgress) as unknown as UniversalVueElementConstructor
export const UvEnergyDemandScoreElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyDemandScore) as unknown as UniversalVueElementConstructor
export const UvEnergyDemandMeterElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyDemandMeter) as unknown as UniversalVueElementConstructor
export const UvEnergyEmissionMapElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyEmissionMap) as unknown as UniversalVueElementConstructor
export const UvEnergyEmissionChartElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyEmissionChart) as unknown as UniversalVueElementConstructor
export const UvEnergyEmissionDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyEmissionDiagram) as unknown as UniversalVueElementConstructor
export const UvEnergyEmissionBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyEmissionBreakdown) as unknown as UniversalVueElementConstructor
export const UvEnergyEmissionComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyEmissionComparison) as unknown as UniversalVueElementConstructor
export const UvTelecomSubscriberOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomSubscriberOverview) as unknown as UniversalVueElementConstructor
export const UvTelecomSubscriberStatusElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomSubscriberStatus) as unknown as UniversalVueElementConstructor
export const UvTelecomSubscriberTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomSubscriberTimeline) as unknown as UniversalVueElementConstructor
export const UvTelecomSubscriberFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomSubscriberFilters) as unknown as UniversalVueElementConstructor
export const UvTelecomSubscriberActionsElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomSubscriberActions) as unknown as UniversalVueElementConstructor
export const UvTelecomPlanDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomPlanDashboard) as unknown as UniversalVueElementConstructor
export const UvTelecomPlanSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomPlanSummary) as unknown as UniversalVueElementConstructor
export const UvTelecomPlanListElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomPlanList) as unknown as UniversalVueElementConstructor
export const UvTelecomPlanDetailElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomPlanDetail) as unknown as UniversalVueElementConstructor
export const UvTelecomPlanToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomPlanToolbar) as unknown as UniversalVueElementConstructor
export const UvTelecomDataUsageCardElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomDataUsageCard) as unknown as UniversalVueElementConstructor
export const UvTelecomDataUsageTableElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomDataUsageTable) as unknown as UniversalVueElementConstructor
export const UvTelecomDataUsageMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomDataUsageMetrics) as unknown as UniversalVueElementConstructor
export const UvTelecomDataUsageInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomDataUsageInsights) as unknown as UniversalVueElementConstructor
export const UvTelecomDataUsageMenuElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomDataUsageMenu) as unknown as UniversalVueElementConstructor
export const UvTelecomCallLogExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomCallLogExplorer) as unknown as UniversalVueElementConstructor
export const UvTelecomCallLogNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomCallLogNavigator) as unknown as UniversalVueElementConstructor
export const UvTelecomCallLogViewerElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomCallLogViewer) as unknown as UniversalVueElementConstructor
export const UvTelecomCallLogEditorElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomCallLogEditor) as unknown as UniversalVueElementConstructor
export const UvTelecomCallLogSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomCallLogSettings) as unknown as UniversalVueElementConstructor
export const UvTelecomMessageQueueElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomMessageQueue) as unknown as UniversalVueElementConstructor
export const UvTelecomMessageBoardElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomMessageBoard) as unknown as UniversalVueElementConstructor
export const UvTelecomMessageCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomMessageCalendar) as unknown as UniversalVueElementConstructor
export const UvTelecomMessageHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomMessageHistory) as unknown as UniversalVueElementConstructor
export const UvTelecomMessageReportsElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomMessageReports) as unknown as UniversalVueElementConstructor
export const UvTelecomRoamingHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomRoamingHeader) as unknown as UniversalVueElementConstructor
export const UvTelecomRoamingSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomRoamingSidebar) as unknown as UniversalVueElementConstructor
export const UvTelecomRoamingGridElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomRoamingGrid) as unknown as UniversalVueElementConstructor
export const UvTelecomRoamingPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomRoamingPanel) as unknown as UniversalVueElementConstructor
export const UvTelecomRoamingFooterElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomRoamingFooter) as unknown as UniversalVueElementConstructor
export const UvTelecomDeviceMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomDeviceMonitor) as unknown as UniversalVueElementConstructor
export const UvTelecomDeviceTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomDeviceTracker) as unknown as UniversalVueElementConstructor
export const UvTelecomDeviceAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomDeviceAlerts) as unknown as UniversalVueElementConstructor
export const UvTelecomDeviceActivityElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomDeviceActivity) as unknown as UniversalVueElementConstructor
export const UvTelecomDeviceControlsElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomDeviceControls) as unknown as UniversalVueElementConstructor
export const UvTelecomNetworkSearchElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomNetworkSearch) as unknown as UniversalVueElementConstructor
export const UvTelecomNetworkSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomNetworkSelector) as unknown as UniversalVueElementConstructor
export const UvTelecomNetworkPickerElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomNetworkPicker) as unknown as UniversalVueElementConstructor
export const UvTelecomNetworkFormElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomNetworkForm) as unknown as UniversalVueElementConstructor
export const UvTelecomNetworkPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomNetworkPreview) as unknown as UniversalVueElementConstructor
export const UvTelecomTowerBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomTowerBadge) as unknown as UniversalVueElementConstructor
export const UvTelecomTowerIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomTowerIndicator) as unknown as UniversalVueElementConstructor
export const UvTelecomTowerProgressElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomTowerProgress) as unknown as UniversalVueElementConstructor
export const UvTelecomTowerScoreElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomTowerScore) as unknown as UniversalVueElementConstructor
export const UvTelecomTowerMeterElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomTowerMeter) as unknown as UniversalVueElementConstructor
export const UvTelecomCoverageMapElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomCoverageMap) as unknown as UniversalVueElementConstructor
export const UvTelecomCoverageChartElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomCoverageChart) as unknown as UniversalVueElementConstructor
export const UvTelecomCoverageDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomCoverageDiagram) as unknown as UniversalVueElementConstructor
export const UvTelecomCoverageBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomCoverageBreakdown) as unknown as UniversalVueElementConstructor
export const UvTelecomCoverageComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvTelecomCoverageComparison) as unknown as UniversalVueElementConstructor
export const UvMediaArticleOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvMediaArticleOverview) as unknown as UniversalVueElementConstructor
export const UvMediaArticleStatusElement: UniversalVueElementConstructor = defineCustomElement(UvMediaArticleStatus) as unknown as UniversalVueElementConstructor
export const UvMediaArticleTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvMediaArticleTimeline) as unknown as UniversalVueElementConstructor
export const UvMediaArticleFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvMediaArticleFilters) as unknown as UniversalVueElementConstructor
export const UvMediaArticleActionsElement: UniversalVueElementConstructor = defineCustomElement(UvMediaArticleActions) as unknown as UniversalVueElementConstructor
export const UvMediaPublicationDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaPublicationDashboard) as unknown as UniversalVueElementConstructor
export const UvMediaPublicationSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvMediaPublicationSummary) as unknown as UniversalVueElementConstructor
export const UvMediaPublicationListElement: UniversalVueElementConstructor = defineCustomElement(UvMediaPublicationList) as unknown as UniversalVueElementConstructor
export const UvMediaPublicationDetailElement: UniversalVueElementConstructor = defineCustomElement(UvMediaPublicationDetail) as unknown as UniversalVueElementConstructor
export const UvMediaPublicationToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvMediaPublicationToolbar) as unknown as UniversalVueElementConstructor
export const UvMediaEpisodeCardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaEpisodeCard) as unknown as UniversalVueElementConstructor
export const UvMediaEpisodeTableElement: UniversalVueElementConstructor = defineCustomElement(UvMediaEpisodeTable) as unknown as UniversalVueElementConstructor
export const UvMediaEpisodeMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvMediaEpisodeMetrics) as unknown as UniversalVueElementConstructor
export const UvMediaEpisodeInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvMediaEpisodeInsights) as unknown as UniversalVueElementConstructor
export const UvMediaEpisodeMenuElement: UniversalVueElementConstructor = defineCustomElement(UvMediaEpisodeMenu) as unknown as UniversalVueElementConstructor
export const UvMediaPlaylistExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvMediaPlaylistExplorer) as unknown as UniversalVueElementConstructor
export const UvMediaPlaylistNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvMediaPlaylistNavigator) as unknown as UniversalVueElementConstructor
export const UvMediaPlaylistViewerElement: UniversalVueElementConstructor = defineCustomElement(UvMediaPlaylistViewer) as unknown as UniversalVueElementConstructor
export const UvMediaPlaylistEditorElement: UniversalVueElementConstructor = defineCustomElement(UvMediaPlaylistEditor) as unknown as UniversalVueElementConstructor
export const UvMediaPlaylistSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvMediaPlaylistSettings) as unknown as UniversalVueElementConstructor
export const UvMediaChannelQueueElement: UniversalVueElementConstructor = defineCustomElement(UvMediaChannelQueue) as unknown as UniversalVueElementConstructor
export const UvMediaChannelBoardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaChannelBoard) as unknown as UniversalVueElementConstructor
export const UvMediaChannelCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvMediaChannelCalendar) as unknown as UniversalVueElementConstructor
export const UvMediaChannelHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvMediaChannelHistory) as unknown as UniversalVueElementConstructor
export const UvMediaChannelReportsElement: UniversalVueElementConstructor = defineCustomElement(UvMediaChannelReports) as unknown as UniversalVueElementConstructor
export const UvMediaCreatorHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvMediaCreatorHeader) as unknown as UniversalVueElementConstructor
export const UvMediaCreatorSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvMediaCreatorSidebar) as unknown as UniversalVueElementConstructor
export const UvMediaCreatorGridElement: UniversalVueElementConstructor = defineCustomElement(UvMediaCreatorGrid) as unknown as UniversalVueElementConstructor
export const UvMediaCreatorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMediaCreatorPanel) as unknown as UniversalVueElementConstructor
export const UvMediaCreatorFooterElement: UniversalVueElementConstructor = defineCustomElement(UvMediaCreatorFooter) as unknown as UniversalVueElementConstructor
export const UvMediaAudienceMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvMediaAudienceMonitor) as unknown as UniversalVueElementConstructor
export const UvMediaAudienceTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvMediaAudienceTracker) as unknown as UniversalVueElementConstructor
export const UvMediaAudienceAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvMediaAudienceAlerts) as unknown as UniversalVueElementConstructor
export const UvMediaAudienceActivityElement: UniversalVueElementConstructor = defineCustomElement(UvMediaAudienceActivity) as unknown as UniversalVueElementConstructor
export const UvMediaAudienceControlsElement: UniversalVueElementConstructor = defineCustomElement(UvMediaAudienceControls) as unknown as UniversalVueElementConstructor
export const UvMediaCampaignSearchElement: UniversalVueElementConstructor = defineCustomElement(UvMediaCampaignSearch) as unknown as UniversalVueElementConstructor
export const UvMediaCampaignSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvMediaCampaignSelector) as unknown as UniversalVueElementConstructor
export const UvMediaCampaignPickerElement: UniversalVueElementConstructor = defineCustomElement(UvMediaCampaignPicker) as unknown as UniversalVueElementConstructor
export const UvMediaCampaignFormElement: UniversalVueElementConstructor = defineCustomElement(UvMediaCampaignForm) as unknown as UniversalVueElementConstructor
export const UvMediaCampaignPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvMediaCampaignPreview) as unknown as UniversalVueElementConstructor
export const UvMediaAssetBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvMediaAssetBadge) as unknown as UniversalVueElementConstructor
export const UvMediaAssetIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvMediaAssetIndicator) as unknown as UniversalVueElementConstructor
export const UvMediaAssetProgressElement: UniversalVueElementConstructor = defineCustomElement(UvMediaAssetProgress) as unknown as UniversalVueElementConstructor
export const UvMediaAssetScoreElement: UniversalVueElementConstructor = defineCustomElement(UvMediaAssetScore) as unknown as UniversalVueElementConstructor
export const UvMediaAssetMeterElement: UniversalVueElementConstructor = defineCustomElement(UvMediaAssetMeter) as unknown as UniversalVueElementConstructor
export const UvMediaRightsMapElement: UniversalVueElementConstructor = defineCustomElement(UvMediaRightsMap) as unknown as UniversalVueElementConstructor
export const UvMediaRightsChartElement: UniversalVueElementConstructor = defineCustomElement(UvMediaRightsChart) as unknown as UniversalVueElementConstructor
export const UvMediaRightsDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvMediaRightsDiagram) as unknown as UniversalVueElementConstructor
export const UvMediaRightsBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvMediaRightsBreakdown) as unknown as UniversalVueElementConstructor
export const UvMediaRightsComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvMediaRightsComparison) as unknown as UniversalVueElementConstructor
export const UvMarketingLeadOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingLeadOverview) as unknown as UniversalVueElementConstructor
export const UvMarketingLeadStatusElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingLeadStatus) as unknown as UniversalVueElementConstructor
export const UvMarketingLeadTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingLeadTimeline) as unknown as UniversalVueElementConstructor
export const UvMarketingLeadFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingLeadFilters) as unknown as UniversalVueElementConstructor
export const UvMarketingLeadActionsElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingLeadActions) as unknown as UniversalVueElementConstructor
export const UvMarketingFunnelDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingFunnelDashboard) as unknown as UniversalVueElementConstructor
export const UvMarketingFunnelSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingFunnelSummary) as unknown as UniversalVueElementConstructor
export const UvMarketingFunnelListElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingFunnelList) as unknown as UniversalVueElementConstructor
export const UvMarketingFunnelDetailElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingFunnelDetail) as unknown as UniversalVueElementConstructor
export const UvMarketingFunnelToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingFunnelToolbar) as unknown as UniversalVueElementConstructor
export const UvMarketingCampaignCardElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingCampaignCard) as unknown as UniversalVueElementConstructor
export const UvMarketingCampaignTableElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingCampaignTable) as unknown as UniversalVueElementConstructor
export const UvMarketingCampaignMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingCampaignMetrics) as unknown as UniversalVueElementConstructor
export const UvMarketingCampaignInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingCampaignInsights) as unknown as UniversalVueElementConstructor
export const UvMarketingCampaignMenuElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingCampaignMenu) as unknown as UniversalVueElementConstructor
export const UvMarketingSegmentExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingSegmentExplorer) as unknown as UniversalVueElementConstructor
export const UvMarketingSegmentNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingSegmentNavigator) as unknown as UniversalVueElementConstructor
export const UvMarketingSegmentViewerElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingSegmentViewer) as unknown as UniversalVueElementConstructor
export const UvMarketingSegmentEditorElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingSegmentEditor) as unknown as UniversalVueElementConstructor
export const UvMarketingSegmentSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingSegmentSettings) as unknown as UniversalVueElementConstructor
export const UvMarketingPersonaQueueElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingPersonaQueue) as unknown as UniversalVueElementConstructor
export const UvMarketingPersonaBoardElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingPersonaBoard) as unknown as UniversalVueElementConstructor
export const UvMarketingPersonaCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingPersonaCalendar) as unknown as UniversalVueElementConstructor
export const UvMarketingPersonaHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingPersonaHistory) as unknown as UniversalVueElementConstructor
export const UvMarketingPersonaReportsElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingPersonaReports) as unknown as UniversalVueElementConstructor
export const UvMarketingAttributionHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingAttributionHeader) as unknown as UniversalVueElementConstructor
export const UvMarketingAttributionSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingAttributionSidebar) as unknown as UniversalVueElementConstructor
export const UvMarketingAttributionGridElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingAttributionGrid) as unknown as UniversalVueElementConstructor
export const UvMarketingAttributionPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingAttributionPanel) as unknown as UniversalVueElementConstructor
export const UvMarketingAttributionFooterElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingAttributionFooter) as unknown as UniversalVueElementConstructor
export const UvMarketingExperimentMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingExperimentMonitor) as unknown as UniversalVueElementConstructor
export const UvMarketingExperimentTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingExperimentTracker) as unknown as UniversalVueElementConstructor
export const UvMarketingExperimentAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingExperimentAlerts) as unknown as UniversalVueElementConstructor
export const UvMarketingExperimentActivityElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingExperimentActivity) as unknown as UniversalVueElementConstructor
export const UvMarketingExperimentControlsElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingExperimentControls) as unknown as UniversalVueElementConstructor
export const UvMarketingContentSearchElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingContentSearch) as unknown as UniversalVueElementConstructor
export const UvMarketingContentSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingContentSelector) as unknown as UniversalVueElementConstructor
export const UvMarketingContentPickerElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingContentPicker) as unknown as UniversalVueElementConstructor
export const UvMarketingContentFormElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingContentForm) as unknown as UniversalVueElementConstructor
export const UvMarketingContentPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingContentPreview) as unknown as UniversalVueElementConstructor
export const UvMarketingKeywordBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingKeywordBadge) as unknown as UniversalVueElementConstructor
export const UvMarketingKeywordIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingKeywordIndicator) as unknown as UniversalVueElementConstructor
export const UvMarketingKeywordProgressElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingKeywordProgress) as unknown as UniversalVueElementConstructor
export const UvMarketingKeywordScoreElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingKeywordScore) as unknown as UniversalVueElementConstructor
export const UvMarketingKeywordMeterElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingKeywordMeter) as unknown as UniversalVueElementConstructor
export const UvMarketingConversionMapElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingConversionMap) as unknown as UniversalVueElementConstructor
export const UvMarketingConversionChartElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingConversionChart) as unknown as UniversalVueElementConstructor
export const UvMarketingConversionDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingConversionDiagram) as unknown as UniversalVueElementConstructor
export const UvMarketingConversionBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingConversionBreakdown) as unknown as UniversalVueElementConstructor
export const UvMarketingConversionComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvMarketingConversionComparison) as unknown as UniversalVueElementConstructor
export const UvSalesOpportunityOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvSalesOpportunityOverview) as unknown as UniversalVueElementConstructor
export const UvSalesOpportunityStatusElement: UniversalVueElementConstructor = defineCustomElement(UvSalesOpportunityStatus) as unknown as UniversalVueElementConstructor
export const UvSalesOpportunityTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvSalesOpportunityTimeline) as unknown as UniversalVueElementConstructor
export const UvSalesOpportunityFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvSalesOpportunityFilters) as unknown as UniversalVueElementConstructor
export const UvSalesOpportunityActionsElement: UniversalVueElementConstructor = defineCustomElement(UvSalesOpportunityActions) as unknown as UniversalVueElementConstructor
export const UvSalesQuoteDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvSalesQuoteDashboard) as unknown as UniversalVueElementConstructor
export const UvSalesQuoteSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvSalesQuoteSummary) as unknown as UniversalVueElementConstructor
export const UvSalesQuoteListElement: UniversalVueElementConstructor = defineCustomElement(UvSalesQuoteList) as unknown as UniversalVueElementConstructor
export const UvSalesQuoteDetailElement: UniversalVueElementConstructor = defineCustomElement(UvSalesQuoteDetail) as unknown as UniversalVueElementConstructor
export const UvSalesQuoteToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvSalesQuoteToolbar) as unknown as UniversalVueElementConstructor
export const UvSalesProposalCardElement: UniversalVueElementConstructor = defineCustomElement(UvSalesProposalCard) as unknown as UniversalVueElementConstructor
export const UvSalesProposalTableElement: UniversalVueElementConstructor = defineCustomElement(UvSalesProposalTable) as unknown as UniversalVueElementConstructor
export const UvSalesProposalMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvSalesProposalMetrics) as unknown as UniversalVueElementConstructor
export const UvSalesProposalInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvSalesProposalInsights) as unknown as UniversalVueElementConstructor
export const UvSalesProposalMenuElement: UniversalVueElementConstructor = defineCustomElement(UvSalesProposalMenu) as unknown as UniversalVueElementConstructor
export const UvSalesContractExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvSalesContractExplorer) as unknown as UniversalVueElementConstructor
export const UvSalesContractNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvSalesContractNavigator) as unknown as UniversalVueElementConstructor
export const UvSalesContractViewerElement: UniversalVueElementConstructor = defineCustomElement(UvSalesContractViewer) as unknown as UniversalVueElementConstructor
export const UvSalesContractEditorElement: UniversalVueElementConstructor = defineCustomElement(UvSalesContractEditor) as unknown as UniversalVueElementConstructor
export const UvSalesContractSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvSalesContractSettings) as unknown as UniversalVueElementConstructor
export const UvSalesPipelineQueueElement: UniversalVueElementConstructor = defineCustomElement(UvSalesPipelineQueue) as unknown as UniversalVueElementConstructor
export const UvSalesPipelineBoardElement: UniversalVueElementConstructor = defineCustomElement(UvSalesPipelineBoard) as unknown as UniversalVueElementConstructor
export const UvSalesPipelineCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvSalesPipelineCalendar) as unknown as UniversalVueElementConstructor
export const UvSalesPipelineHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvSalesPipelineHistory) as unknown as UniversalVueElementConstructor
export const UvSalesPipelineReportsElement: UniversalVueElementConstructor = defineCustomElement(UvSalesPipelineReports) as unknown as UniversalVueElementConstructor
export const UvSalesTerritoryHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvSalesTerritoryHeader) as unknown as UniversalVueElementConstructor
export const UvSalesTerritorySidebarElement: UniversalVueElementConstructor = defineCustomElement(UvSalesTerritorySidebar) as unknown as UniversalVueElementConstructor
export const UvSalesTerritoryGridElement: UniversalVueElementConstructor = defineCustomElement(UvSalesTerritoryGrid) as unknown as UniversalVueElementConstructor
export const UvSalesTerritoryPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSalesTerritoryPanel) as unknown as UniversalVueElementConstructor
export const UvSalesTerritoryFooterElement: UniversalVueElementConstructor = defineCustomElement(UvSalesTerritoryFooter) as unknown as UniversalVueElementConstructor
export const UvSalesCommissionMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvSalesCommissionMonitor) as unknown as UniversalVueElementConstructor
export const UvSalesCommissionTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvSalesCommissionTracker) as unknown as UniversalVueElementConstructor
export const UvSalesCommissionAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvSalesCommissionAlerts) as unknown as UniversalVueElementConstructor
export const UvSalesCommissionActivityElement: UniversalVueElementConstructor = defineCustomElement(UvSalesCommissionActivity) as unknown as UniversalVueElementConstructor
export const UvSalesCommissionControlsElement: UniversalVueElementConstructor = defineCustomElement(UvSalesCommissionControls) as unknown as UniversalVueElementConstructor
export const UvSalesForecastSearchElement: UniversalVueElementConstructor = defineCustomElement(UvSalesForecastSearch) as unknown as UniversalVueElementConstructor
export const UvSalesForecastSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvSalesForecastSelector) as unknown as UniversalVueElementConstructor
export const UvSalesForecastPickerElement: UniversalVueElementConstructor = defineCustomElement(UvSalesForecastPicker) as unknown as UniversalVueElementConstructor
export const UvSalesForecastFormElement: UniversalVueElementConstructor = defineCustomElement(UvSalesForecastForm) as unknown as UniversalVueElementConstructor
export const UvSalesForecastPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvSalesForecastPreview) as unknown as UniversalVueElementConstructor
export const UvSalesAccountBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvSalesAccountBadge) as unknown as UniversalVueElementConstructor
export const UvSalesAccountIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvSalesAccountIndicator) as unknown as UniversalVueElementConstructor
export const UvSalesAccountProgressElement: UniversalVueElementConstructor = defineCustomElement(UvSalesAccountProgress) as unknown as UniversalVueElementConstructor
export const UvSalesAccountScoreElement: UniversalVueElementConstructor = defineCustomElement(UvSalesAccountScore) as unknown as UniversalVueElementConstructor
export const UvSalesAccountMeterElement: UniversalVueElementConstructor = defineCustomElement(UvSalesAccountMeter) as unknown as UniversalVueElementConstructor
export const UvSalesContactMapElement: UniversalVueElementConstructor = defineCustomElement(UvSalesContactMap) as unknown as UniversalVueElementConstructor
export const UvSalesContactChartElement: UniversalVueElementConstructor = defineCustomElement(UvSalesContactChart) as unknown as UniversalVueElementConstructor
export const UvSalesContactDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvSalesContactDiagram) as unknown as UniversalVueElementConstructor
export const UvSalesContactBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvSalesContactBreakdown) as unknown as UniversalVueElementConstructor
export const UvSalesContactComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvSalesContactComparison) as unknown as UniversalVueElementConstructor
export const UvCrmContactOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvCrmContactOverview) as unknown as UniversalVueElementConstructor
export const UvCrmContactStatusElement: UniversalVueElementConstructor = defineCustomElement(UvCrmContactStatus) as unknown as UniversalVueElementConstructor
export const UvCrmContactTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvCrmContactTimeline) as unknown as UniversalVueElementConstructor
export const UvCrmContactFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvCrmContactFilters) as unknown as UniversalVueElementConstructor
export const UvCrmContactActionsElement: UniversalVueElementConstructor = defineCustomElement(UvCrmContactActions) as unknown as UniversalVueElementConstructor
export const UvCrmAccountDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvCrmAccountDashboard) as unknown as UniversalVueElementConstructor
export const UvCrmAccountSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvCrmAccountSummary) as unknown as UniversalVueElementConstructor
export const UvCrmAccountListElement: UniversalVueElementConstructor = defineCustomElement(UvCrmAccountList) as unknown as UniversalVueElementConstructor
export const UvCrmAccountDetailElement: UniversalVueElementConstructor = defineCustomElement(UvCrmAccountDetail) as unknown as UniversalVueElementConstructor
export const UvCrmAccountToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvCrmAccountToolbar) as unknown as UniversalVueElementConstructor
export const UvCrmActivityCardElement: UniversalVueElementConstructor = defineCustomElement(UvCrmActivityCard) as unknown as UniversalVueElementConstructor
export const UvCrmActivityTableElement: UniversalVueElementConstructor = defineCustomElement(UvCrmActivityTable) as unknown as UniversalVueElementConstructor
export const UvCrmActivityMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvCrmActivityMetrics) as unknown as UniversalVueElementConstructor
export const UvCrmActivityInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvCrmActivityInsights) as unknown as UniversalVueElementConstructor
export const UvCrmActivityMenuElement: UniversalVueElementConstructor = defineCustomElement(UvCrmActivityMenu) as unknown as UniversalVueElementConstructor
export const UvCrmNoteExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvCrmNoteExplorer) as unknown as UniversalVueElementConstructor
export const UvCrmNoteNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvCrmNoteNavigator) as unknown as UniversalVueElementConstructor
export const UvCrmNoteViewerElement: UniversalVueElementConstructor = defineCustomElement(UvCrmNoteViewer) as unknown as UniversalVueElementConstructor
export const UvCrmNoteEditorElement: UniversalVueElementConstructor = defineCustomElement(UvCrmNoteEditor) as unknown as UniversalVueElementConstructor
export const UvCrmNoteSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvCrmNoteSettings) as unknown as UniversalVueElementConstructor
export const UvCrmTaskQueueElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTaskQueue) as unknown as UniversalVueElementConstructor
export const UvCrmTaskBoardElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTaskBoard) as unknown as UniversalVueElementConstructor
export const UvCrmTaskCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTaskCalendar) as unknown as UniversalVueElementConstructor
export const UvCrmTaskHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTaskHistory) as unknown as UniversalVueElementConstructor
export const UvCrmTaskReportsElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTaskReports) as unknown as UniversalVueElementConstructor
export const UvCrmDealHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvCrmDealHeader) as unknown as UniversalVueElementConstructor
export const UvCrmDealSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvCrmDealSidebar) as unknown as UniversalVueElementConstructor
export const UvCrmDealGridElement: UniversalVueElementConstructor = defineCustomElement(UvCrmDealGrid) as unknown as UniversalVueElementConstructor
export const UvCrmDealPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCrmDealPanel) as unknown as UniversalVueElementConstructor
export const UvCrmDealFooterElement: UniversalVueElementConstructor = defineCustomElement(UvCrmDealFooter) as unknown as UniversalVueElementConstructor
export const UvCrmStageMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvCrmStageMonitor) as unknown as UniversalVueElementConstructor
export const UvCrmStageTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvCrmStageTracker) as unknown as UniversalVueElementConstructor
export const UvCrmStageAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvCrmStageAlerts) as unknown as UniversalVueElementConstructor
export const UvCrmStageActivityElement: UniversalVueElementConstructor = defineCustomElement(UvCrmStageActivity) as unknown as UniversalVueElementConstructor
export const UvCrmStageControlsElement: UniversalVueElementConstructor = defineCustomElement(UvCrmStageControls) as unknown as UniversalVueElementConstructor
export const UvCrmTeamSearchElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTeamSearch) as unknown as UniversalVueElementConstructor
export const UvCrmTeamSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTeamSelector) as unknown as UniversalVueElementConstructor
export const UvCrmTeamPickerElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTeamPicker) as unknown as UniversalVueElementConstructor
export const UvCrmTeamFormElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTeamForm) as unknown as UniversalVueElementConstructor
export const UvCrmTeamPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTeamPreview) as unknown as UniversalVueElementConstructor
export const UvCrmTerritoryBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTerritoryBadge) as unknown as UniversalVueElementConstructor
export const UvCrmTerritoryIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTerritoryIndicator) as unknown as UniversalVueElementConstructor
export const UvCrmTerritoryProgressElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTerritoryProgress) as unknown as UniversalVueElementConstructor
export const UvCrmTerritoryScoreElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTerritoryScore) as unknown as UniversalVueElementConstructor
export const UvCrmTerritoryMeterElement: UniversalVueElementConstructor = defineCustomElement(UvCrmTerritoryMeter) as unknown as UniversalVueElementConstructor
export const UvCrmImportMapElement: UniversalVueElementConstructor = defineCustomElement(UvCrmImportMap) as unknown as UniversalVueElementConstructor
export const UvCrmImportChartElement: UniversalVueElementConstructor = defineCustomElement(UvCrmImportChart) as unknown as UniversalVueElementConstructor
export const UvCrmImportDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvCrmImportDiagram) as unknown as UniversalVueElementConstructor
export const UvCrmImportBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvCrmImportBreakdown) as unknown as UniversalVueElementConstructor
export const UvCrmImportComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvCrmImportComparison) as unknown as UniversalVueElementConstructor
export const UvSupportTicketOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvSupportTicketOverview) as unknown as UniversalVueElementConstructor
export const UvSupportTicketStatusElement: UniversalVueElementConstructor = defineCustomElement(UvSupportTicketStatus) as unknown as UniversalVueElementConstructor
export const UvSupportTicketTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvSupportTicketTimeline) as unknown as UniversalVueElementConstructor
export const UvSupportTicketFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvSupportTicketFilters) as unknown as UniversalVueElementConstructor
export const UvSupportTicketActionsElement: UniversalVueElementConstructor = defineCustomElement(UvSupportTicketActions) as unknown as UniversalVueElementConstructor
export const UvSupportConversationDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvSupportConversationDashboard) as unknown as UniversalVueElementConstructor
export const UvSupportConversationSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvSupportConversationSummary) as unknown as UniversalVueElementConstructor
export const UvSupportConversationListElement: UniversalVueElementConstructor = defineCustomElement(UvSupportConversationList) as unknown as UniversalVueElementConstructor
export const UvSupportConversationDetailElement: UniversalVueElementConstructor = defineCustomElement(UvSupportConversationDetail) as unknown as UniversalVueElementConstructor
export const UvSupportConversationToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvSupportConversationToolbar) as unknown as UniversalVueElementConstructor
export const UvSupportQueueCardElement: UniversalVueElementConstructor = defineCustomElement(UvSupportQueueCard) as unknown as UniversalVueElementConstructor
export const UvSupportQueueTableElement: UniversalVueElementConstructor = defineCustomElement(UvSupportQueueTable) as unknown as UniversalVueElementConstructor
export const UvSupportQueueMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvSupportQueueMetrics) as unknown as UniversalVueElementConstructor
export const UvSupportQueueInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvSupportQueueInsights) as unknown as UniversalVueElementConstructor
export const UvSupportQueueMenuElement: UniversalVueElementConstructor = defineCustomElement(UvSupportQueueMenu) as unknown as UniversalVueElementConstructor
export const UvSupportSlaExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvSupportSlaExplorer) as unknown as UniversalVueElementConstructor
export const UvSupportSlaNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvSupportSlaNavigator) as unknown as UniversalVueElementConstructor
export const UvSupportSlaViewerElement: UniversalVueElementConstructor = defineCustomElement(UvSupportSlaViewer) as unknown as UniversalVueElementConstructor
export const UvSupportSlaEditorElement: UniversalVueElementConstructor = defineCustomElement(UvSupportSlaEditor) as unknown as UniversalVueElementConstructor
export const UvSupportSlaSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvSupportSlaSettings) as unknown as UniversalVueElementConstructor
export const UvSupportAgentQueueElement: UniversalVueElementConstructor = defineCustomElement(UvSupportAgentQueue) as unknown as UniversalVueElementConstructor
export const UvSupportAgentBoardElement: UniversalVueElementConstructor = defineCustomElement(UvSupportAgentBoard) as unknown as UniversalVueElementConstructor
export const UvSupportAgentCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvSupportAgentCalendar) as unknown as UniversalVueElementConstructor
export const UvSupportAgentHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvSupportAgentHistory) as unknown as UniversalVueElementConstructor
export const UvSupportAgentReportsElement: UniversalVueElementConstructor = defineCustomElement(UvSupportAgentReports) as unknown as UniversalVueElementConstructor
export const UvSupportCustomerHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvSupportCustomerHeader) as unknown as UniversalVueElementConstructor
export const UvSupportCustomerSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvSupportCustomerSidebar) as unknown as UniversalVueElementConstructor
export const UvSupportCustomerGridElement: UniversalVueElementConstructor = defineCustomElement(UvSupportCustomerGrid) as unknown as UniversalVueElementConstructor
export const UvSupportCustomerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSupportCustomerPanel) as unknown as UniversalVueElementConstructor
export const UvSupportCustomerFooterElement: UniversalVueElementConstructor = defineCustomElement(UvSupportCustomerFooter) as unknown as UniversalVueElementConstructor
export const UvSupportKnowledgeMonitorElement: UniversalVueElementConstructor = defineCustomElement(UvSupportKnowledgeMonitor) as unknown as UniversalVueElementConstructor
export const UvSupportKnowledgeTrackerElement: UniversalVueElementConstructor = defineCustomElement(UvSupportKnowledgeTracker) as unknown as UniversalVueElementConstructor
export const UvSupportKnowledgeAlertsElement: UniversalVueElementConstructor = defineCustomElement(UvSupportKnowledgeAlerts) as unknown as UniversalVueElementConstructor
export const UvSupportKnowledgeActivityElement: UniversalVueElementConstructor = defineCustomElement(UvSupportKnowledgeActivity) as unknown as UniversalVueElementConstructor
export const UvSupportKnowledgeControlsElement: UniversalVueElementConstructor = defineCustomElement(UvSupportKnowledgeControls) as unknown as UniversalVueElementConstructor
export const UvSupportEscalationSearchElement: UniversalVueElementConstructor = defineCustomElement(UvSupportEscalationSearch) as unknown as UniversalVueElementConstructor
export const UvSupportEscalationSelectorElement: UniversalVueElementConstructor = defineCustomElement(UvSupportEscalationSelector) as unknown as UniversalVueElementConstructor
export const UvSupportEscalationPickerElement: UniversalVueElementConstructor = defineCustomElement(UvSupportEscalationPicker) as unknown as UniversalVueElementConstructor
export const UvSupportEscalationFormElement: UniversalVueElementConstructor = defineCustomElement(UvSupportEscalationForm) as unknown as UniversalVueElementConstructor
export const UvSupportEscalationPreviewElement: UniversalVueElementConstructor = defineCustomElement(UvSupportEscalationPreview) as unknown as UniversalVueElementConstructor
export const UvSupportSatisfactionBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvSupportSatisfactionBadge) as unknown as UniversalVueElementConstructor
export const UvSupportSatisfactionIndicatorElement: UniversalVueElementConstructor = defineCustomElement(UvSupportSatisfactionIndicator) as unknown as UniversalVueElementConstructor
export const UvSupportSatisfactionProgressElement: UniversalVueElementConstructor = defineCustomElement(UvSupportSatisfactionProgress) as unknown as UniversalVueElementConstructor
export const UvSupportSatisfactionScoreElement: UniversalVueElementConstructor = defineCustomElement(UvSupportSatisfactionScore) as unknown as UniversalVueElementConstructor
export const UvSupportSatisfactionMeterElement: UniversalVueElementConstructor = defineCustomElement(UvSupportSatisfactionMeter) as unknown as UniversalVueElementConstructor
export const UvSupportIncidentMapElement: UniversalVueElementConstructor = defineCustomElement(UvSupportIncidentMap) as unknown as UniversalVueElementConstructor
export const UvSupportIncidentChartElement: UniversalVueElementConstructor = defineCustomElement(UvSupportIncidentChart) as unknown as UniversalVueElementConstructor
export const UvSupportIncidentDiagramElement: UniversalVueElementConstructor = defineCustomElement(UvSupportIncidentDiagram) as unknown as UniversalVueElementConstructor
export const UvSupportIncidentBreakdownElement: UniversalVueElementConstructor = defineCustomElement(UvSupportIncidentBreakdown) as unknown as UniversalVueElementConstructor
export const UvSupportIncidentComparisonElement: UniversalVueElementConstructor = defineCustomElement(UvSupportIncidentComparison) as unknown as UniversalVueElementConstructor
export const UvHrEmployeeOverviewElement: UniversalVueElementConstructor = defineCustomElement(UvHrEmployeeOverview) as unknown as UniversalVueElementConstructor
export const UvHrEmployeeStatusElement: UniversalVueElementConstructor = defineCustomElement(UvHrEmployeeStatus) as unknown as UniversalVueElementConstructor
export const UvHrEmployeeTimelineElement: UniversalVueElementConstructor = defineCustomElement(UvHrEmployeeTimeline) as unknown as UniversalVueElementConstructor
export const UvHrEmployeeFiltersElement: UniversalVueElementConstructor = defineCustomElement(UvHrEmployeeFilters) as unknown as UniversalVueElementConstructor
export const UvHrEmployeeActionsElement: UniversalVueElementConstructor = defineCustomElement(UvHrEmployeeActions) as unknown as UniversalVueElementConstructor
export const UvHrCandidateDashboardElement: UniversalVueElementConstructor = defineCustomElement(UvHrCandidateDashboard) as unknown as UniversalVueElementConstructor
export const UvHrCandidateSummaryElement: UniversalVueElementConstructor = defineCustomElement(UvHrCandidateSummary) as unknown as UniversalVueElementConstructor
export const UvHrCandidateListElement: UniversalVueElementConstructor = defineCustomElement(UvHrCandidateList) as unknown as UniversalVueElementConstructor
export const UvHrCandidateDetailElement: UniversalVueElementConstructor = defineCustomElement(UvHrCandidateDetail) as unknown as UniversalVueElementConstructor
export const UvHrCandidateToolbarElement: UniversalVueElementConstructor = defineCustomElement(UvHrCandidateToolbar) as unknown as UniversalVueElementConstructor
export const UvHrInterviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvHrInterviewCard) as unknown as UniversalVueElementConstructor
export const UvHrInterviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvHrInterviewTable) as unknown as UniversalVueElementConstructor
export const UvHrInterviewMetricsElement: UniversalVueElementConstructor = defineCustomElement(UvHrInterviewMetrics) as unknown as UniversalVueElementConstructor
export const UvHrInterviewInsightsElement: UniversalVueElementConstructor = defineCustomElement(UvHrInterviewInsights) as unknown as UniversalVueElementConstructor
export const UvHrInterviewMenuElement: UniversalVueElementConstructor = defineCustomElement(UvHrInterviewMenu) as unknown as UniversalVueElementConstructor
export const UvHrOfferExplorerElement: UniversalVueElementConstructor = defineCustomElement(UvHrOfferExplorer) as unknown as UniversalVueElementConstructor
export const UvHrOfferNavigatorElement: UniversalVueElementConstructor = defineCustomElement(UvHrOfferNavigator) as unknown as UniversalVueElementConstructor
export const UvHrOfferViewerElement: UniversalVueElementConstructor = defineCustomElement(UvHrOfferViewer) as unknown as UniversalVueElementConstructor
export const UvHrOfferEditorElement: UniversalVueElementConstructor = defineCustomElement(UvHrOfferEditor) as unknown as UniversalVueElementConstructor
export const UvHrOfferSettingsElement: UniversalVueElementConstructor = defineCustomElement(UvHrOfferSettings) as unknown as UniversalVueElementConstructor
export const UvHrOnboardingQueueElement: UniversalVueElementConstructor = defineCustomElement(UvHrOnboardingQueue) as unknown as UniversalVueElementConstructor
export const UvHrOnboardingBoardElement: UniversalVueElementConstructor = defineCustomElement(UvHrOnboardingBoard) as unknown as UniversalVueElementConstructor
export const UvHrOnboardingCalendarElement: UniversalVueElementConstructor = defineCustomElement(UvHrOnboardingCalendar) as unknown as UniversalVueElementConstructor
export const UvHrOnboardingHistoryElement: UniversalVueElementConstructor = defineCustomElement(UvHrOnboardingHistory) as unknown as UniversalVueElementConstructor
export const UvHrOnboardingReportsElement: UniversalVueElementConstructor = defineCustomElement(UvHrOnboardingReports) as unknown as UniversalVueElementConstructor
export const UvHrLeaveHeaderElement: UniversalVueElementConstructor = defineCustomElement(UvHrLeaveHeader) as unknown as UniversalVueElementConstructor
export const UvHrLeaveSidebarElement: UniversalVueElementConstructor = defineCustomElement(UvHrLeaveSidebar) as unknown as UniversalVueElementConstructor
export const UvHrLeaveGridElement: UniversalVueElementConstructor = defineCustomElement(UvHrLeaveGrid) as unknown as UniversalVueElementConstructor
export const UvHrLeavePanelElement: UniversalVueElementConstructor = defineCustomElement(UvHrLeavePanel) as unknown as UniversalVueElementConstructor
export const UvHrLeaveFooterElement: UniversalVueElementConstructor = defineCustomElement(UvHrLeaveFooter) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvLaboratoryOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLaboratoryOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvTelehealthOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTelehealthOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvWellnessOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWellnessOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvLearningOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvLearningOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvLearningOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvLearningOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvLearningOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvLearningOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvLearningOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvLearningOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvLearningOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvLearningOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvLearningOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvLearningOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvLearningOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvLearningOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvLearningOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvLearningOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvLearningOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvLearningOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvLearningOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvLearningOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvLearningOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvLearningOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvLearningOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvLearningOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvLearningOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvLearningOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvLearningOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvLearningOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvLearningOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvLearningOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvLearningOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvLearningOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvLearningOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvLearningOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvLearningOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvLearningOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvLearningOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvLearningOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvLearningOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvLearningOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvLearningOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvLearningOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvLearningOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvLearningOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvLearningOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvLearningOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvLearningOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvLearningOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvLearningOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvLearningOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLearningOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvCampusOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvCampusOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvCampusOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvCampusOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvCampusOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvCampusOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvCampusOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvCampusOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvCampusOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvCampusOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvCampusOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvCampusOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvCampusOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvCampusOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvCampusOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvCampusOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvCampusOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvCampusOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvCampusOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvCampusOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvCampusOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvCampusOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvCampusOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvCampusOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvCampusOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvCampusOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvCampusOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvCampusOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvCampusOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvCampusOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvCampusOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvCampusOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvCampusOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvCampusOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvCampusOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvCampusOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvCampusOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvCampusOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvCampusOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvCampusOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvCampusOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvCampusOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvCampusOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvCampusOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvCampusOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvCampusOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvCampusOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvCampusOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvCampusOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvCampusOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCampusOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvResearchOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvResearchOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvResearchOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvResearchOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvResearchOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvResearchOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvResearchOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvResearchOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvResearchOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvResearchOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvResearchOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvResearchOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvResearchOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvResearchOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvResearchOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvResearchOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvResearchOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvResearchOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvResearchOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvResearchOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvResearchOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvResearchOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvResearchOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvResearchOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvResearchOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvResearchOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvResearchOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvResearchOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvResearchOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvResearchOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvResearchOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvResearchOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvResearchOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvResearchOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvResearchOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvResearchOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvResearchOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvResearchOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvResearchOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvResearchOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvResearchOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvResearchOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvResearchOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvResearchOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvResearchOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvResearchOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvLibraryOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLibraryOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvTrainingOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTrainingOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvFleetOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvFleetOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvFleetOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvFleetOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvFleetOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvFleetOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvFleetOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvFleetOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvFleetOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvFleetOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvFleetOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvFleetOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvFleetOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvFleetOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvFleetOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvFleetOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvFleetOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvFleetOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvFleetOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvFleetOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvFleetOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvFleetOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvFleetOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvFleetOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvFleetOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvFleetOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvFleetOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvFleetOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvFleetOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvFleetOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvFleetOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvFleetOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvFleetOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvFleetOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvFleetOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvFleetOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvFleetOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvFleetOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvFleetOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvFleetOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvFleetOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvFleetOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvFleetOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvFleetOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvFleetOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvFleetOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvFleetOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvFleetOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvFleetOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvFleetOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFleetOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvTransitOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvTransitOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvTransitOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvTransitOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvTransitOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvTransitOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvTransitOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvTransitOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvTransitOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvTransitOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvTransitOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvTransitOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvTransitOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvTransitOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvTransitOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvTransitOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvTransitOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvTransitOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvTransitOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvTransitOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvTransitOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvTransitOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvTransitOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvTransitOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvTransitOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvTransitOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvTransitOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvTransitOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvTransitOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvTransitOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvTransitOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvTransitOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvTransitOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvTransitOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvTransitOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvTransitOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvTransitOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvTransitOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvTransitOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvTransitOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvTransitOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvTransitOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvTransitOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvTransitOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvTransitOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvTransitOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvTransitOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvTransitOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvTransitOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvTransitOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTransitOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvAviationOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvAviationOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvAviationOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvAviationOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvAviationOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvAviationOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvAviationOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvAviationOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvAviationOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvAviationOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvAviationOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvAviationOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvAviationOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvAviationOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvAviationOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvAviationOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvAviationOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvAviationOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvAviationOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvAviationOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvAviationOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvAviationOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvAviationOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvAviationOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvAviationOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvAviationOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvAviationOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvAviationOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvAviationOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvAviationOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvAviationOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvAviationOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvAviationOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvAviationOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvAviationOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvAviationOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvAviationOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvAviationOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvAviationOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvAviationOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvAviationOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvAviationOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvAviationOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvAviationOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvAviationOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvAviationOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvAviationOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvAviationOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvAviationOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvAviationOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAviationOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvMaritimeOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaritimeOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvWarehouseOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvWarehouseOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvFactoryOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvFactoryOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvMaintenanceOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMaintenanceOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvEnergyOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEnergyOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvUtilitiesOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvUtilitiesOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvConstructionOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvConstructionOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvPropertyOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPropertyOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvHospitalityOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvHospitalityOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvTravelOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvTravelOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvTravelOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvTravelOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvTravelOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvTravelOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvTravelOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvTravelOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvTravelOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvTravelOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvTravelOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvTravelOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvTravelOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvTravelOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvTravelOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvTravelOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvTravelOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvTravelOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvTravelOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvTravelOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvTravelOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvTravelOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvTravelOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvTravelOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvTravelOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvTravelOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvTravelOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvTravelOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvTravelOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvTravelOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvTravelOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvTravelOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvTravelOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvTravelOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvTravelOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvTravelOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvTravelOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvTravelOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvTravelOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvTravelOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvTravelOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvTravelOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvTravelOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvTravelOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvTravelOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvTravelOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvTravelOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvTravelOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvTravelOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvTravelOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvTravelOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvEventOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvEventOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvEventOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvEventOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvEventOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvEventOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvEventOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvEventOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvEventOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvEventOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvEventOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvEventOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvEventOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvEventOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvEventOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvEventOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvEventOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvEventOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvEventOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvEventOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvEventOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvEventOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvEventOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvEventOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvEventOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvEventOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvEventOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvEventOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvEventOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvEventOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvEventOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvEventOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvEventOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvEventOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvEventOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvEventOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvEventOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvEventOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvEventOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvEventOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvEventOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvEventOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvEventOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvEventOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvEventOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvEventOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvEventOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvEventOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvEventOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvEventOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEventOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvMediaOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvMediaOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvMediaOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvMediaOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvMediaOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvMediaOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvMediaOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvMediaOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvMediaOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvMediaOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvMediaOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvMediaOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvMediaOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvMediaOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvMediaOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvMediaOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvMediaOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvMediaOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvMediaOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvMediaOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvMediaOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvMediaOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvMediaOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvMediaOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvMediaOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvMediaOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvMediaOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvMediaOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvMediaOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvMediaOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvMediaOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvMediaOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvMediaOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvMediaOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvMediaOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvMediaOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvMediaOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvMediaOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvMediaOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvMediaOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvMediaOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvMediaOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvMediaOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvMediaOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvMediaOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvMediaOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvMediaOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvMediaOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvMediaOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvMediaOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvMediaOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvPublishingOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvPublishingOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvGamingOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvGamingOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvGamingOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvGamingOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvGamingOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvGamingOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvGamingOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvGamingOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvGamingOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvGamingOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvGamingOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvGamingOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvGamingOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvGamingOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvGamingOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvGamingOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvGamingOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvGamingOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvGamingOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvGamingOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvGamingOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvGamingOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvGamingOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvGamingOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvGamingOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvGamingOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvGamingOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvGamingOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvGamingOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvGamingOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvGamingOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvGamingOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvGamingOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvGamingOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvGamingOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvGamingOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvGamingOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvGamingOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvGamingOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvGamingOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvGamingOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvGamingOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvGamingOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvGamingOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvGamingOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvGamingOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvGamingOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvGamingOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvGamingOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvGamingOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGamingOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvSportsOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvSportsOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvSportsOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvSportsOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvSportsOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvSportsOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvSportsOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvSportsOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvSportsOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvSportsOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvSportsOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvSportsOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvSportsOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvSportsOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvSportsOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvSportsOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvSportsOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvSportsOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvSportsOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvSportsOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvSportsOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvSportsOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvSportsOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvSportsOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvSportsOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvSportsOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvSportsOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvSportsOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvSportsOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvSportsOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvSportsOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvSportsOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvSportsOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvSportsOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvSportsOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvSportsOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvSportsOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvSportsOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvSportsOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvSportsOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvSportsOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvSportsOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvSportsOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvSportsOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvSportsOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvSportsOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvSportsOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvSportsOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvSportsOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvSportsOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSportsOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvCommunityOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvCommunityOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvGovernmentOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvGovernmentOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvLegalOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvLegalOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvLegalOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvLegalOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvLegalOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvLegalOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvLegalOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvLegalOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvLegalOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvLegalOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvLegalOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvLegalOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvLegalOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvLegalOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvLegalOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvLegalOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvLegalOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvLegalOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvLegalOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvLegalOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvLegalOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvLegalOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvLegalOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvLegalOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvLegalOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvLegalOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvLegalOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvLegalOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvLegalOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvLegalOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvLegalOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvLegalOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvLegalOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvLegalOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvLegalOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvLegalOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvLegalOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvLegalOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvLegalOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvLegalOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvLegalOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvLegalOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvLegalOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvLegalOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvLegalOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvLegalOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvLegalOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvLegalOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvLegalOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvLegalOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvLegalOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvComplianceOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvComplianceOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvSecurityOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSecurityOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvDevOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvDevOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvDevOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvDevOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvDevOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvDevOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvDevOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvDevOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvDevOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvDevOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvDevOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvDevOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvDevOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvDevOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvDevOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvDevOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvDevOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvDevOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvDevOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvDevOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvDevOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvDevOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvDevOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvDevOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvDevOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvDevOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvDevOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvDevOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvDevOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvDevOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvDevOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvDevOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvDevOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvDevOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvDevOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvDevOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvDevOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvDevOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvDevOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvDevOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvDevOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvDevOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvDevOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvDevOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvDevOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvDevOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvDevOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvDevOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvDevOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvDevOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDevOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvDataOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvDataOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvDataOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvDataOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvDataOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvDataOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvDataOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvDataOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvDataOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvDataOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvDataOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvDataOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvDataOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvDataOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvDataOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvDataOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvDataOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvDataOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvDataOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvDataOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvDataOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvDataOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvDataOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvDataOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvDataOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvDataOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvDataOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvDataOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvDataOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvDataOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvDataOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvDataOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvDataOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvDataOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvDataOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvDataOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvDataOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvDataOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvDataOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvDataOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvDataOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvDataOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvDataOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvDataOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvDataOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvDataOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvDataOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvDataOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvDataOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvDataOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvDataOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvAiOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvAiOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvAiOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvAiOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvAiOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvAiOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvAiOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvAiOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvAiOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvAiOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvAiOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvAiOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvAiOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvAiOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvAiOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvAiOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvAiOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvAiOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvAiOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvAiOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvAiOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvAiOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvAiOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvAiOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvAiOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvAiOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvAiOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvAiOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvAiOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvAiOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvAiOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvAiOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvAiOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvAiOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvAiOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvAiOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvAiOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvAiOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvAiOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvAiOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvAiOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvAiOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvAiOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvAiOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvAiOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvAiOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvAiOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvAiOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvAiOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvAiOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvAiOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvRoboticsOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvRoboticsOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvIoTOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvIoTOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvIoTOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvIoTOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvIoTOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvIoTOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvIoTOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvIoTOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvIoTOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvIoTOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvIoTOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvIoTOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvIoTOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvIoTOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvIoTOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvIoTOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvIoTOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvIoTOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvIoTOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvIoTOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvIoTOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvIoTOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvIoTOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvIoTOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvIoTOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvIoTOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvIoTOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvIoTOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvIoTOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvIoTOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvIoTOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvIoTOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvIoTOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvIoTOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvIoTOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvIoTOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvIoTOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvIoTOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvIoTOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvIoTOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvIoTOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvIoTOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvIoTOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvIoTOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvIoTOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvIoTOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvIoTOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvIoTOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvIoTOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvIoTOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvIoTOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvSustainabilityOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvSustainabilityOpsAutomationWidget) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsOverviewPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsOverviewPanel) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsOverviewCardElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsOverviewCard) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsOverviewTableElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsOverviewTable) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsOverviewFormElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsOverviewForm) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsOverviewWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsOverviewWidget) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsWorkspacePanelElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsWorkspacePanel) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsWorkspaceCardElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsWorkspaceCard) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsWorkspaceTableElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsWorkspaceTable) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsWorkspaceFormElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsWorkspaceForm) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsWorkspaceWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsWorkspaceWidget) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsPlannerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsPlannerPanel) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsPlannerCardElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsPlannerCard) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsPlannerTableElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsPlannerTable) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsPlannerFormElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsPlannerForm) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsPlannerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsPlannerWidget) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsMonitorPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsMonitorPanel) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsMonitorCardElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsMonitorCard) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsMonitorTableElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsMonitorTable) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsMonitorFormElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsMonitorForm) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsMonitorWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsMonitorWidget) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsExplorerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsExplorerPanel) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsExplorerCardElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsExplorerCard) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsExplorerTableElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsExplorerTable) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsExplorerFormElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsExplorerForm) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsExplorerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsExplorerWidget) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsManagerPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsManagerPanel) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsManagerCardElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsManagerCard) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsManagerTableElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsManagerTable) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsManagerFormElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsManagerForm) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsManagerWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsManagerWidget) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsConsolePanelElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsConsolePanel) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsConsoleCardElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsConsoleCard) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsConsoleTableElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsConsoleTable) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsConsoleFormElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsConsoleForm) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsConsoleWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsConsoleWidget) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsInsightsPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsInsightsPanel) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsInsightsCardElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsInsightsCard) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsInsightsTableElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsInsightsTable) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsInsightsFormElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsInsightsForm) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsInsightsWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsInsightsWidget) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsWorkflowPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsWorkflowPanel) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsWorkflowCardElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsWorkflowCard) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsWorkflowTableElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsWorkflowTable) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsWorkflowFormElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsWorkflowForm) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsWorkflowWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsWorkflowWidget) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsAutomationPanelElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsAutomationPanel) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsAutomationCardElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsAutomationCard) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsAutomationTableElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsAutomationTable) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsAutomationFormElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsAutomationForm) as unknown as UniversalVueElementConstructor
export const UvEmergencyOpsAutomationWidgetElement: UniversalVueElementConstructor = defineCustomElement(UvEmergencyOpsAutomationWidget) as unknown as UniversalVueElementConstructor

export const elementDefinitions: Readonly<Record<string, UniversalVueElementConstructor>> = {
  'uv-button': UvButtonElement,
  'uv-icon-button': UvIconButtonElement,
  'uv-input': UvInputElement,
  'uv-textarea': UvTextareaElement,
  'uv-checkbox': UvCheckboxElement,
  'uv-radio': UvRadioElement,
  'uv-switch': UvSwitchElement,
  'uv-badge': UvBadgeElement,
  'uv-alert': UvAlertElement,
  'uv-spinner': UvSpinnerElement,
  'uv-select': UvSelectElement,
  'uv-card': UvCardElement,
  'uv-progress': UvProgressElement,
  'uv-avatar': UvAvatarElement,
  'uv-accordion': UvAccordionElement,
  'uv-tabs': UvTabsElement,
  'uv-breadcrumb': UvBreadcrumbElement,
  'uv-pagination': UvPaginationElement,
  'uv-dialog': UvDialogElement,
  'uv-tooltip': UvTooltipElement,
  'uv-divider': UvDividerElement,
  'uv-skeleton': UvSkeletonElement,
  'uv-slider': UvSliderElement,
  'uv-popover': UvPopoverElement,
  'uv-dropdown-menu': UvDropdownMenuElement,
  'uv-toast': UvToastElement,
  'uv-drawer': UvDrawerElement,
  'uv-combobox': UvComboboxElement,
  'uv-file-upload': UvFileUploadElement,
  'uv-table': UvTableElement,
  'uv-calendar': UvCalendarElement,
  'uv-date-picker': UvDatePickerElement,
  'uv-number-input': UvNumberInputElement,
  'uv-rating': UvRatingElement,
  'uv-tag-input': UvTagInputElement,
  'uv-form-field': UvFormFieldElement,
  'uv-fieldset': UvFieldsetElement,
  'uv-stepper': UvStepperElement,
  'uv-command-palette': UvCommandPaletteElement,
  'uv-timeline': UvTimelineElement,
  'uv-empty-state': UvEmptyStateElement,
  'uv-toolbar': UvToolbarElement,
  'uv-sidebar': UvSidebarElement,
  'uv-tree-view': UvTreeViewElement,
  'uv-carousel': UvCarouselElement,
  'uv-search-input': UvSearchInputElement,
  'uv-password-input': UvPasswordInputElement,
  'uv-otp-input': UvOtpInputElement,
  'uv-color-picker': UvColorPickerElement,
  'uv-range-slider': UvRangeSliderElement,
  'uv-toggle': UvToggleElement,
  'uv-toggle-group': UvToggleGroupElement,
  'uv-segmented-control': UvSegmentedControlElement,
  'uv-button-group': UvButtonGroupElement,
  'uv-split-button': UvSplitButtonElement,
  'uv-link': UvLinkElement,
  'uv-skip-link': UvSkipLinkElement,
  'uv-navigation-menu': UvNavigationMenuElement,
  'uv-menubar': UvMenubarElement,
  'uv-bottom-navigation': UvBottomNavigationElement,
  'uv-alert-dialog': UvAlertDialogElement,
  'uv-hover-card': UvHoverCardElement,
  'uv-collapsible': UvCollapsibleElement,
  'uv-scroll-area': UvScrollAreaElement,
  'uv-aspect-ratio': UvAspectRatioElement,
  'uv-description-list': UvDescriptionListElement,
  'uv-stat': UvStatElement,
  'uv-code-block': UvCodeBlockElement,
  'uv-listbox': UvListboxElement,
  'uv-transfer-list': UvTransferListElement,
  'uv-meter': UvMeterElement,
  'uv-kbd': UvKbdElement,
  'uv-blockquote': UvBlockquoteElement,
  'uv-figure': UvFigureElement,
  'uv-visually-hidden': UvVisuallyHiddenElement,
  'uv-image': UvImageElement,
  'uv-video': UvVideoElement,
  'uv-audio': UvAudioElement,
  'uv-icon': UvIconElement,
  'uv-placeholder': UvPlaceholderElement,
  'uv-container': UvContainerElement,
  'uv-stack': UvStackElement,
  'uv-cluster': UvClusterElement,
  'uv-grid': UvGridElement,
  'uv-center': UvCenterElement,
  'uv-box': UvBoxElement,
  'uv-flex': UvFlexElement,
  'uv-spacer': UvSpacerElement,
  'uv-surface': UvSurfaceElement,
  'uv-section': UvSectionElement,
  'uv-heading': UvHeadingElement,
  'uv-text': UvTextElement,
  'uv-label': UvLabelElement,
  'uv-prose': UvProseElement,
  'uv-truncate': UvTruncateElement,
  'uv-chip': UvChipElement,
  'uv-chip-group': UvChipGroupElement,
  'uv-status-dot': UvStatusDotElement,
  'uv-counter': UvCounterElement,
  'uv-key-value': UvKeyValueElement,
  'uv-banner': UvBannerElement,
  'uv-callout': UvCalloutElement,
  'uv-notice': UvNoticeElement,
  'uv-result': UvResultElement,
  'uv-loading-overlay': UvLoadingOverlayElement,
  'uv-sheet': UvSheetElement,
  'uv-backdrop': UvBackdropElement,
  'uv-portal': UvPortalElement,
  'uv-focus-trap': UvFocusTrapElement,
  'uv-focus-scope': UvFocusScopeElement,
  'uv-context-menu': UvContextMenuElement,
  'uv-menu-button': UvMenuButtonElement,
  'uv-action-menu': UvActionMenuElement,
  'uv-speed-dial': UvSpeedDialElement,
  'uv-floating-action-button': UvFloatingActionButtonElement,
  'uv-disclosure': UvDisclosureElement,
  'uv-details': UvDetailsElement,
  'uv-expandable-text': UvExpandableTextElement,
  'uv-read-more': UvReadMoreElement,
  'uv-show-hide': UvShowHideElement,
  'uv-time-picker': UvTimePickerElement,
  'uv-date-range-picker': UvDateRangePickerElement,
  'uv-month-picker': UvMonthPickerElement,
  'uv-week-picker': UvWeekPickerElement,
  'uv-year-picker': UvYearPickerElement,
  'uv-time-input': UvTimeInputElement,
  'uv-duration-input': UvDurationInputElement,
  'uv-currency-input': UvCurrencyInputElement,
  'uv-percentage-input': UvPercentageInputElement,
  'uv-masked-input': UvMaskedInputElement,
  'uv-phone-input': UvPhoneInputElement,
  'uv-email-input': UvEmailInputElement,
  'uv-url-input': UvUrlInputElement,
  'uv-pin-input': UvPinInputElement,
  'uv-search-select': UvSearchSelectElement,
  'uv-multi-select': UvMultiSelectElement,
  'uv-cascader': UvCascaderElement,
  'uv-autocomplete': UvAutocompleteElement,
  'uv-mention-input': UvMentionInputElement,
  'uv-token-field': UvTokenFieldElement,
  'uv-form': UvFormElement,
  'uv-form-section': UvFormSectionElement,
  'uv-form-actions': UvFormActionsElement,
  'uv-error-summary': UvErrorSummaryElement,
  'uv-character-counter': UvCharacterCounterElement,
  'uv-data-grid': UvDataGridElement,
  'uv-virtual-list': UvVirtualListElement,
  'uv-infinite-scroll': UvInfiniteScrollElement,
  'uv-masonry': UvMasonryElement,
  'uv-resizable-panel': UvResizablePanelElement,
  'uv-kanban': UvKanbanElement,
  'uv-sortable-list': UvSortableListElement,
  'uv-drag-handle': UvDragHandleElement,
  'uv-drop-zone': UvDropZoneElement,
  'uv-reorder-group': UvReorderGroupElement,
  'uv-sparkline': UvSparklineElement,
  'uv-bar-chart': UvBarChartElement,
  'uv-line-chart': UvLineChartElement,
  'uv-pie-chart': UvPieChartElement,
  'uv-gauge': UvGaugeElement,
  'uv-heatmap': UvHeatmapElement,
  'uv-ring-chart': UvRingChartElement,
  'uv-funnel-chart': UvFunnelChartElement,
  'uv-chart-legend': UvChartLegendElement,
  'uv-data-marker': UvDataMarkerElement,
  'uv-editor': UvEditorElement,
  'uv-markdown': UvMarkdownElement,
  'uv-rich-text': UvRichTextElement,
  'uv-code-editor': UvCodeEditorElement,
  'uv-diff-viewer': UvDiffViewerElement,
  'uv-file-list': UvFileListElement,
  'uv-file-preview': UvFilePreviewElement,
  'uv-image-cropper': UvImageCropperElement,
  'uv-image-gallery': UvImageGalleryElement,
  'uv-lightbox': UvLightboxElement,
  'uv-upload-queue': UvUploadQueueElement,
  'uv-drop-upload': UvDropUploadElement,
  'uv-attachment': UvAttachmentElement,
  'uv-avatar-group': UvAvatarGroupElement,
  'uv-presence': UvPresenceElement,
  'uv-user-card': UvUserCardElement,
  'uv-profile-card': UvProfileCardElement,
  'uv-contact-card': UvContactCardElement,
  'uv-product-card': UvProductCardElement,
  'uv-pricing-card': UvPricingCardElement,
  'uv-review': UvReviewElement,
  'uv-testimonial': UvTestimonialElement,
  'uv-comment': UvCommentElement,
  'uv-comment-thread': UvCommentThreadElement,
  'uv-activity-feed': UvActivityFeedElement,
  'uv-chat-bubble': UvChatBubbleElement,
  'uv-chat-composer': UvChatComposerElement,
  'uv-message-list': UvMessageListElement,
  'uv-typing-indicator': UvTypingIndicatorElement,
  'uv-conversation-header': UvConversationHeaderElement,
  'uv-notification': UvNotificationElement,
  'uv-notification-center': UvNotificationCenterElement,
  'uv-inbox-item': UvInboxItemElement,
  'uv-mail-preview': UvMailPreviewElement,
  'uv-announcement': UvAnnouncementElement,
  'uv-search-results': UvSearchResultsElement,
  'uv-filter-bar': UvFilterBarElement,
  'uv-filter-chip': UvFilterChipElement,
  'uv-sort-control': UvSortControlElement,
  'uv-view-switcher': UvViewSwitcherElement,
  'uv-pagination-info': UvPaginationInfoElement,
  'uv-page-size-select': UvPageSizeSelectElement,
  'uv-load-more': UvLoadMoreElement,
  'uv-breadcrumb-item': UvBreadcrumbItemElement,
  'uv-back-to-top': UvBackToTopElement,
  'uv-app-shell': UvAppShellElement,
  'uv-header': UvHeaderElement,
  'uv-footer': UvFooterElement,
  'uv-main': UvMainElement,
  'uv-navigation-rail': UvNavigationRailElement,
  'uv-top-bar': UvTopBarElement,
  'uv-page-header': UvPageHeaderElement,
  'uv-page-layout': UvPageLayoutElement,
  'uv-split-layout': UvSplitLayoutElement,
  'uv-dashboard-grid': UvDashboardGridElement,
  'uv-panel': UvPanelElement,
  'uv-panel-header': UvPanelHeaderElement,
  'uv-widget': UvWidgetElement,
  'uv-widget-grid': UvWidgetGridElement,
  'uv-dock': UvDockElement,
  'uv-tour': UvTourElement,
  'uv-spotlight': UvSpotlightElement,
  'uv-coachmark': UvCoachmarkElement,
  'uv-hotspot': UvHotspotElement,
  'uv-onboarding-step': UvOnboardingStepElement,
  'uv-skeleton-text': UvSkeletonTextElement,
  'uv-skeleton-avatar': UvSkeletonAvatarElement,
  'uv-skeleton-card': UvSkeletonCardElement,
  'uv-skeleton-table': UvSkeletonTableElement,
  'uv-shimmer': UvShimmerElement,
  'uv-agenda': UvAgendaElement,
  'uv-schedule': UvScheduleElement,
  'uv-event-card': UvEventCardElement,
  'uv-event-list': UvEventListElement,
  'uv-timezone-select': UvTimezoneSelectElement,
  'uv-stepper-form': UvStepperFormElement,
  'uv-progress-steps': UvProgressStepsElement,
  'uv-milestone': UvMilestoneElement,
  'uv-roadmap': UvRoadmapElement,
  'uv-process-flow': UvProcessFlowElement,
  'uv-metric': UvMetricElement,
  'uv-kpi-card': UvKpiCardElement,
  'uv-comparison': UvComparisonElement,
  'uv-trend': UvTrendElement,
  'uv-score': UvScoreElement,
  'uv-command-bar': UvCommandBarElement,
  'uv-shortcut': UvShortcutElement,
  'uv-shortcut-list': UvShortcutListElement,
  'uv-key-sequence': UvKeySequenceElement,
  'uv-command-item': UvCommandItemElement,
  'uv-clipboard': UvClipboardElement,
  'uv-copy-button': UvCopyButtonElement,
  'uv-share-button': UvShareButtonElement,
  'uv-print-button': UvPrintButtonElement,
  'uv-download-button': UvDownloadButtonElement,
  'uv-qr-code': UvQrCodeElement,
  'uv-barcode': UvBarcodeElement,
  'uv-color-swatch': UvColorSwatchElement,
  'uv-gradient-preview': UvGradientPreviewElement,
  'uv-pattern-preview': UvPatternPreviewElement,
  'uv-theme-provider': UvThemeProviderElement,
  'uv-theme-toggle': UvThemeToggleElement,
  'uv-locale-provider': UvLocaleProviderElement,
  'uv-direction-provider': UvDirectionProviderElement,
  'uv-reduced-motion': UvReducedMotionElement,
  'uv-live-region': UvLiveRegionElement,
  'uv-announcer': UvAnnouncerElement,
  'uv-focus-ring': UvFocusRingElement,
  'uv-roving-focus-group': UvRovingFocusGroupElement,
  'uv-accessibility-panel': UvAccessibilityPanelElement,
  'uv-mega-menu': UvMegaMenuElement,
  'uv-mobile-menu': UvMobileMenuElement,
  'uv-anchor-nav': UvAnchorNavElement,
  'uv-step-nav': UvStepNavElement,
  'uv-subnav': UvSubnavElement,
  'uv-close-button': UvCloseButtonElement,
  'uv-back-button': UvBackButtonElement,
  'uv-forward-button': UvForwardButtonElement,
  'uv-submit-button': UvSubmitButtonElement,
  'uv-reset-button': UvResetButtonElement,
  'uv-input-group': UvInputGroupElement,
  'uv-input-addon': UvInputAddonElement,
  'uv-input-prefix': UvInputPrefixElement,
  'uv-input-suffix': UvInputSuffixElement,
  'uv-clear-button': UvClearButtonElement,
  'uv-decimal-input': UvDecimalInputElement,
  'uv-integer-input': UvIntegerInputElement,
  'uv-scientific-input': UvScientificInputElement,
  'uv-unit-input': UvUnitInputElement,
  'uv-coordinate-input': UvCoordinateInputElement,
  'uv-country-select': UvCountrySelectElement,
  'uv-language-select': UvLanguageSelectElement,
  'uv-region-select': UvRegionSelectElement,
  'uv-city-select': UvCitySelectElement,
  'uv-postal-code-input': UvPostalCodeInputElement,
  'uv-address-form': UvAddressFormElement,
  'uv-name-field': UvNameFieldElement,
  'uv-username-input': UvUsernameInputElement,
  'uv-password-strength': UvPasswordStrengthElement,
  'uv-consent-checkbox': UvConsentCheckboxElement,
  'uv-date-time-picker': UvDateTimePickerElement,
  'uv-date-time-range-picker': UvDateTimeRangePickerElement,
  'uv-business-hours': UvBusinessHoursElement,
  'uv-recurring-schedule': UvRecurringScheduleElement,
  'uv-utc-offset-select': UvUtcOffsetSelectElement,
  'uv-calendar-header': UvCalendarHeaderElement,
  'uv-calendar-grid': UvCalendarGridElement,
  'uv-calendar-day': UvCalendarDayElement,
  'uv-calendar-event': UvCalendarEventElement,
  'uv-mini-calendar': UvMiniCalendarElement,
  'uv-scheduler': UvSchedulerElement,
  'uv-resource-calendar': UvResourceCalendarElement,
  'uv-availability-grid': UvAvailabilityGridElement,
  'uv-booking-slot': UvBookingSlotElement,
  'uv-appointment-card': UvAppointmentCardElement,
  'uv-data-table': UvDataTableElement,
  'uv-table-toolbar': UvTableToolbarElement,
  'uv-table-column-picker': UvTableColumnPickerElement,
  'uv-table-filter': UvTableFilterElement,
  'uv-table-summary': UvTableSummaryElement,
  'uv-tree-table': UvTreeTableElement,
  'uv-pivot-table': UvPivotTableElement,
  'uv-cross-tab': UvCrossTabElement,
  'uv-matrix': UvMatrixElement,
  'uv-spreadsheet': UvSpreadsheetElement,
  'uv-record-list': UvRecordListElement,
  'uv-record-card': UvRecordCardElement,
  'uv-record-detail': UvRecordDetailElement,
  'uv-record-field': UvRecordFieldElement,
  'uv-record-actions': UvRecordActionsElement,
  'uv-definition-list': UvDefinitionListElement,
  'uv-property-list': UvPropertyListElement,
  'uv-metadata-list': UvMetadataListElement,
  'uv-attribute-list': UvAttributeListElement,
  'uv-spec-table': UvSpecTableElement,
  'uv-donut-chart': UvDonutChartElement,
  'uv-area-chart': UvAreaChartElement,
  'uv-radar-chart': UvRadarChartElement,
  'uv-scatter-plot': UvScatterPlotElement,
  'uv-bubble-chart': UvBubbleChartElement,
  'uv-candlestick-chart': UvCandlestickChartElement,
  'uv-waterfall-chart': UvWaterfallChartElement,
  'uv-stacked-bar-chart': UvStackedBarChartElement,
  'uv-histogram': UvHistogramElement,
  'uv-box-plot': UvBoxPlotElement,
  'uv-timeline-chart': UvTimelineChartElement,
  'uv-gantt-chart': UvGanttChartElement,
  'uv-sankey-diagram': UvSankeyDiagramElement,
  'uv-treemap': UvTreemapElement,
  'uv-sunburst': UvSunburstElement,
  'uv-map': UvMapElement,
  'uv-map-marker': UvMapMarkerElement,
  'uv-map-popup': UvMapPopupElement,
  'uv-map-legend': UvMapLegendElement,
  'uv-map-controls': UvMapControlsElement,
  'uv-floor-plan': UvFloorPlanElement,
  'uv-seat-map': UvSeatMapElement,
  'uv-route-map': UvRouteMapElement,
  'uv-geo-picker': UvGeoPickerElement,
  'uv-coordinate-display': UvCoordinateDisplayElement,
  'uv-document-viewer': UvDocumentViewerElement,
  'uv-pdf-viewer': UvPdfViewerElement,
  'uv-text-viewer': UvTextViewerElement,
  'uv-csv-viewer': UvCsvViewerElement,
  'uv-json-viewer': UvJsonViewerElement,
  'uv-document-outline': UvDocumentOutlineElement,
  'uv-table-of-contents': UvTableOfContentsElement,
  'uv-footnote': UvFootnoteElement,
  'uv-citation': UvCitationElement,
  'uv-reference-list': UvReferenceListElement,
  'uv-file-manager': UvFileManagerElement,
  'uv-folder-tree': UvFolderTreeElement,
  'uv-file-card': UvFileCardElement,
  'uv-folder-card': UvFolderCardElement,
  'uv-storage-meter': UvStorageMeterElement,
  'uv-file-rename': UvFileRenameElement,
  'uv-file-move': UvFileMoveElement,
  'uv-file-share': UvFileShareElement,
  'uv-file-version': UvFileVersionElement,
  'uv-file-activity': UvFileActivityElement,
  'uv-media-player': UvMediaPlayerElement,
  'uv-video-player': UvVideoPlayerElement,
  'uv-audio-player': UvAudioPlayerElement,
  'uv-media-controls': UvMediaControlsElement,
  'uv-media-timeline': UvMediaTimelineElement,
  'uv-playlist': UvPlaylistElement,
  'uv-playlist-item': UvPlaylistItemElement,
  'uv-transcript': UvTranscriptElement,
  'uv-caption-track': UvCaptionTrackElement,
  'uv-volume-control': UvVolumeControlElement,
  'uv-camera-preview': UvCameraPreviewElement,
  'uv-microphone-meter': UvMicrophoneMeterElement,
  'uv-screen-share-preview': UvScreenSharePreviewElement,
  'uv-recording-indicator': UvRecordingIndicatorElement,
  'uv-device-picker': UvDevicePickerElement,
  'uv-product-grid': UvProductGridElement,
  'uv-product-list': UvProductListElement,
  'uv-product-gallery': UvProductGalleryElement,
  'uv-product-variant': UvProductVariantElement,
  'uv-product-options': UvProductOptionsElement,
  'uv-cart': UvCartElement,
  'uv-cart-item': UvCartItemElement,
  'uv-cart-summary': UvCartSummaryElement,
  'uv-quantity-selector': UvQuantitySelectorElement,
  'uv-promo-code-input': UvPromoCodeInputElement,
  'uv-checkout-summary': UvCheckoutSummaryElement,
  'uv-payment-method': UvPaymentMethodElement,
  'uv-payment-card': UvPaymentCardElement,
  'uv-billing-address': UvBillingAddressElement,
  'uv-order-confirmation': UvOrderConfirmationElement,
  'uv-order-list': UvOrderListElement,
  'uv-order-card': UvOrderCardElement,
  'uv-order-status': UvOrderStatusElement,
  'uv-shipment-tracker': UvShipmentTrackerElement,
  'uv-delivery-estimate': UvDeliveryEstimateElement,
  'uv-price': UvPriceElement,
  'uv-discount-badge': UvDiscountBadgeElement,
  'uv-tax-summary': UvTaxSummaryElement,
  'uv-currency-display': UvCurrencyDisplayElement,
  'uv-installment-plan': UvInstallmentPlanElement,
  'uv-social-share': UvSocialShareElement,
  'uv-reaction-bar': UvReactionBarElement,
  'uv-reaction-picker': UvReactionPickerElement,
  'uv-like-button': UvLikeButtonElement,
  'uv-follow-button': UvFollowButtonElement,
  'uv-user-list': UvUserListElement,
  'uv-user-menu': UvUserMenuElement,
  'uv-user-picker': UvUserPickerElement,
  'uv-assignee-picker': UvAssigneePickerElement,
  'uv-team-card': UvTeamCardElement,
  'uv-team-list': UvTeamListElement,
  'uv-member-card': UvMemberCardElement,
  'uv-role-badge': UvRoleBadgeElement,
  'uv-permission-matrix': UvPermissionMatrixElement,
  'uv-invite-form': UvInviteFormElement,
  'uv-profile-header': UvProfileHeaderElement,
  'uv-profile-stats': UvProfileStatsElement,
  'uv-bio': UvBioElement,
  'uv-social-links': UvSocialLinksElement,
  'uv-contact-actions': UvContactActionsElement,
  'uv-forum-post': UvForumPostElement,
  'uv-forum-thread': UvForumThreadElement,
  'uv-reply-composer': UvReplyComposerElement,
  'uv-vote-control': UvVoteControlElement,
  'uv-moderation-badge': UvModerationBadgeElement,
  'uv-task-card': UvTaskCardElement,
  'uv-task-list': UvTaskListElement,
  'uv-task-board': UvTaskBoardElement,
  'uv-task-status': UvTaskStatusElement,
  'uv-task-priority': UvTaskPriorityElement,
  'uv-project-card': UvProjectCardElement,
  'uv-project-list': UvProjectListElement,
  'uv-project-overview': UvProjectOverviewElement,
  'uv-project-health': UvProjectHealthElement,
  'uv-project-timeline': UvProjectTimelineElement,
  'uv-issue-card': UvIssueCardElement,
  'uv-issue-list': UvIssueListElement,
  'uv-issue-detail': UvIssueDetailElement,
  'uv-issue-label': UvIssueLabelElement,
  'uv-issue-status': UvIssueStatusElement,
  'uv-pull-request-card': UvPullRequestCardElement,
  'uv-commit-list': UvCommitListElement,
  'uv-commit-card': UvCommitCardElement,
  'uv-branch-selector': UvBranchSelectorElement,
  'uv-diff-summary': UvDiffSummaryElement,
  'uv-log-viewer': UvLogViewerElement,
  'uv-console': UvConsoleElement,
  'uv-terminal': UvTerminalElement,
  'uv-command-output': UvCommandOutputElement,
  'uv-error-trace': UvErrorTraceElement,
  'uv-api-request': UvApiRequestElement,
  'uv-api-response': UvApiResponseElement,
  'uv-http-status': UvHttpStatusElement,
  'uv-endpoint-card': UvEndpointCardElement,
  'uv-schema-viewer': UvSchemaViewerElement,
  'uv-database-table': UvDatabaseTableElement,
  'uv-database-column': UvDatabaseColumnElement,
  'uv-query-editor': UvQueryEditorElement,
  'uv-query-result': UvQueryResultElement,
  'uv-connection-status': UvConnectionStatusElement,
  'uv-metric-group': UvMetricGroupElement,
  'uv-threshold': UvThresholdElement,
  'uv-health-indicator': UvHealthIndicatorElement,
  'uv-status-overview': UvStatusOverviewElement,
  'uv-service-level': UvServiceLevelElement,
  'uv-alert-rule': UvAlertRuleElement,
  'uv-incident-card': UvIncidentCardElement,
  'uv-incident-timeline': UvIncidentTimelineElement,
  'uv-service-status': UvServiceStatusElement,
  'uv-uptime-chart': UvUptimeChartElement,
  'uv-security-badge': UvSecurityBadgeElement,
  'uv-risk-score': UvRiskScoreElement,
  'uv-audit-log': UvAuditLogElement,
  'uv-access-review': UvAccessReviewElement,
  'uv-session-list': UvSessionListElement,
  'uv-login-form': UvLoginFormElement,
  'uv-signup-form': UvSignupFormElement,
  'uv-forgot-password-form': UvForgotPasswordFormElement,
  'uv-two-factor-form': UvTwoFactorFormElement,
  'uv-passkey-prompt': UvPasskeyPromptElement,
  'uv-notification-settings': UvNotificationSettingsElement,
  'uv-privacy-settings': UvPrivacySettingsElement,
  'uv-preference-panel': UvPreferencePanelElement,
  'uv-account-switcher': UvAccountSwitcherElement,
  'uv-session-card': UvSessionCardElement,
  'uv-ai-prompt': UvAiPromptElement,
  'uv-ai-response': UvAiResponseElement,
  'uv-ai-composer': UvAiComposerElement,
  'uv-model-selector': UvModelSelectorElement,
  'uv-token-usage': UvTokenUsageElement,
  'uv-feature-flag': UvFeatureFlagElement,
  'uv-experiment-card': UvExperimentCardElement,
  'uv-variant-picker': UvVariantPickerElement,
  'uv-release-channel': UvReleaseChannelElement,
  'uv-version-badge': UvVersionBadgeElement,
  'uv-skip-target': UvSkipTargetElement,
  'uv-focus-return': UvFocusReturnElement,
  'uv-keyboard-hint': UvKeyboardHintElement,
  'uv-screen-reader-only': UvScreenReaderOnlyElement,
  'uv-high-contrast-toggle': UvHighContrastToggleElement,
  'uv-breadcrumb-overflow': UvBreadcrumbOverflowElement,
  'uv-nav-drawer': UvNavDrawerElement,
  'uv-nav-tabs': UvNavTabsElement,
  'uv-section-nav': UvSectionNavElement,
  'uv-pagination-cursor': UvPaginationCursorElement,
  'uv-command-nav': UvCommandNavElement,
  'uv-workspace-switcher': UvWorkspaceSwitcherElement,
  'uv-organization-switcher': UvOrganizationSwitcherElement,
  'uv-project-switcher': UvProjectSwitcherElement,
  'uv-environment-switcher': UvEnvironmentSwitcherElement,
  'uv-confirm-button': UvConfirmButtonElement,
  'uv-async-button': UvAsyncButtonElement,
  'uv-destructive-button': UvDestructiveButtonElement,
  'uv-undo-button': UvUndoButtonElement,
  'uv-redo-button': UvRedoButtonElement,
  'uv-favorite-button': UvFavoriteButtonElement,
  'uv-bookmark-button': UvBookmarkButtonElement,
  'uv-pin-button': UvPinButtonElement,
  'uv-archive-button': UvArchiveButtonElement,
  'uv-restore-button': UvRestoreButtonElement,
  'uv-search-field': UvSearchFieldElement,
  'uv-filter-input': UvFilterInputElement,
  'uv-slug-input': UvSlugInputElement,
  'uv-handle-input': UvHandleInputElement,
  'uv-domain-input': UvDomainInputElement,
  'uv-secret-input': UvSecretInputElement,
  'uv-api-key-input': UvApiKeyInputElement,
  'uv-recovery-code-input': UvRecoveryCodeInputElement,
  'uv-security-question': UvSecurityQuestionElement,
  'uv-captcha-field': UvCaptchaFieldElement,
  'uv-first-name-input': UvFirstNameInputElement,
  'uv-last-name-input': UvLastNameInputElement,
  'uv-middle-name-input': UvMiddleNameInputElement,
  'uv-pronoun-select': UvPronounSelectElement,
  'uv-birthdate-input': UvBirthdateInputElement,
  'uv-contact-method-select': UvContactMethodSelectElement,
  'uv-telephone-input': UvTelephoneInputElement,
  'uv-fax-input': UvFaxInputElement,
  'uv-website-input': UvWebsiteInputElement,
  'uv-social-handle-input': UvSocialHandleInputElement,
  'uv-street-address-input': UvStreetAddressInputElement,
  'uv-apartment-input': UvApartmentInputElement,
  'uv-province-select': UvProvinceSelectElement,
  'uv-state-select': UvStateSelectElement,
  'uv-zip-code-input': UvZipCodeInputElement,
  'uv-bank-account-input': UvBankAccountInputElement,
  'uv-routing-number-input': UvRoutingNumberInputElement,
  'uv-iban-input': UvIbanInputElement,
  'uv-swift-input': UvSwiftInputElement,
  'uv-card-number-input': UvCardNumberInputElement,
  'uv-expiry-input': UvExpiryInputElement,
  'uv-cvc-input': UvCvcInputElement,
  'uv-amount-input': UvAmountInputElement,
  'uv-exchange-rate-input': UvExchangeRateInputElement,
  'uv-budget-input': UvBudgetInputElement,
  'uv-length-input': UvLengthInputElement,
  'uv-weight-input': UvWeightInputElement,
  'uv-temperature-input': UvTemperatureInputElement,
  'uv-speed-input': UvSpeedInputElement,
  'uv-volume-input': UvVolumeInputElement,
  'uv-area-input': UvAreaInputElement,
  'uv-pressure-input': UvPressureInputElement,
  'uv-energy-input': UvEnergyInputElement,
  'uv-power-input': UvPowerInputElement,
  'uv-frequency-input': UvFrequencyInputElement,
  'uv-validation-message': UvValidationMessageElement,
  'uv-validation-summary': UvValidationSummaryElement,
  'uv-field-error': UvFieldErrorElement,
  'uv-field-success': UvFieldSuccessElement,
  'uv-required-indicator': UvRequiredIndicatorElement,
  'uv-option-card': UvOptionCardElement,
  'uv-option-grid': UvOptionGridElement,
  'uv-choice-chip': UvChoiceChipElement,
  'uv-choice-list': UvChoiceListElement,
  'uv-ranked-choice': UvRankedChoiceElement,
  'uv-image-upload': UvImageUploadElement,
  'uv-video-upload': UvVideoUploadElement,
  'uv-audio-upload': UvAudioUploadElement,
  'uv-document-upload': UvDocumentUploadElement,
  'uv-avatar-upload': UvAvatarUploadElement,
  'uv-quarter-picker': UvQuarterPickerElement,
  'uv-fiscal-year-picker': UvFiscalYearPickerElement,
  'uv-time-range-picker': UvTimeRangePickerElement,
  'uv-timezone-picker': UvTimezonePickerElement,
  'uv-cron-input': UvCronInputElement,
  'uv-countdown': UvCountdownElement,
  'uv-stopwatch': UvStopwatchElement,
  'uv-timer': UvTimerElement,
  'uv-world-clock': UvWorldClockElement,
  'uv-relative-time': UvRelativeTimeElement,
  'uv-date-badge': UvDateBadgeElement,
  'uv-time-badge': UvTimeBadgeElement,
  'uv-duration-badge': UvDurationBadgeElement,
  'uv-schedule-badge': UvScheduleBadgeElement,
  'uv-availability-badge': UvAvailabilityBadgeElement,
  'uv-data-card': UvDataCardElement,
  'uv-data-list': UvDataListElement,
  'uv-data-detail': UvDataDetailElement,
  'uv-data-field': UvDataFieldElement,
  'uv-data-actions': UvDataActionsElement,
  'uv-summary-card': UvSummaryCardElement,
  'uv-summary-list': UvSummaryListElement,
  'uv-summary-row': UvSummaryRowElement,
  'uv-summary-group': UvSummaryGroupElement,
  'uv-summary-footer': UvSummaryFooterElement,
  'uv-entity-card': UvEntityCardElement,
  'uv-entity-list': UvEntityListElement,
  'uv-entity-header': UvEntityHeaderElement,
  'uv-entity-metadata': UvEntityMetadataElement,
  'uv-entity-actions': UvEntityActionsElement,
  'uv-timeline-list': UvTimelineListElement,
  'uv-audit-trail': UvAuditTrailElement,
  'uv-change-log': UvChangeLogElement,
  'uv-revision-list': UvRevisionListElement,
  'uv-history-panel': UvHistoryPanelElement,
  'uv-editable-table': UvEditableTableElement,
  'uv-responsive-table': UvResponsiveTableElement,
  'uv-compact-table': UvCompactTableElement,
  'uv-comparison-table': UvComparisonTableElement,
  'uv-ranking-table': UvRankingTableElement,
  'uv-grouped-table': UvGroupedTableElement,
  'uv-nested-table': UvNestedTableElement,
  'uv-sticky-table': UvStickyTableElement,
  'uv-selectable-table': UvSelectableTableElement,
  'uv-expandable-table': UvExpandableTableElement,
  'uv-check-list': UvCheckListElement,
  'uv-numbered-list': UvNumberedListElement,
  'uv-icon-list': UvIconListElement,
  'uv-link-list': UvLinkListElement,
  'uv-action-list': UvActionListElement,
  'uv-grouped-list': UvGroupedListElement,
  'uv-sectioned-list': UvSectionedListElement,
  'uv-dense-list': UvDenseListElement,
  'uv-content-list': UvContentListElement,
  'uv-description-grid': UvDescriptionGridElement,
  'uv-column-chart': UvColumnChartElement,
  'uv-combo-chart': UvComboChartElement,
  'uv-step-chart': UvStepChartElement,
  'uv-range-chart': UvRangeChartElement,
  'uv-bullet-chart': UvBulletChartElement,
  'uv-polar-chart': UvPolarChartElement,
  'uv-chord-diagram': UvChordDiagramElement,
  'uv-network-graph': UvNetworkGraphElement,
  'uv-flow-chart': UvFlowChartElement,
  'uv-dependency-graph': UvDependencyGraphElement,
  'uv-calendar-heatmap': UvCalendarHeatmapElement,
  'uv-cohort-chart': UvCohortChartElement,
  'uv-retention-chart': UvRetentionChartElement,
  'uv-conversion-chart': UvConversionChartElement,
  'uv-growth-chart': UvGrowthChartElement,
  'uv-forecast-chart': UvForecastChartElement,
  'uv-anomaly-chart': UvAnomalyChartElement,
  'uv-baseline-chart': UvBaselineChartElement,
  'uv-variance-chart': UvVarianceChartElement,
  'uv-target-chart': UvTargetChartElement,
  'uv-metric-card': UvMetricCardElement,
  'uv-metric-table': UvMetricTableElement,
  'uv-metric-chart': UvMetricChartElement,
  'uv-metric-trend': UvMetricTrendElement,
  'uv-metric-delta': UvMetricDeltaElement,
  'uv-dashboard-header': UvDashboardHeaderElement,
  'uv-dashboard-section': UvDashboardSectionElement,
  'uv-dashboard-toolbar': UvDashboardToolbarElement,
  'uv-dashboard-filter': UvDashboardFilterElement,
  'uv-dashboard-empty-state': UvDashboardEmptyStateElement,
  'uv-map-search': UvMapSearchElement,
  'uv-map-layer-control': UvMapLayerControlElement,
  'uv-map-scale': UvMapScaleElement,
  'uv-map-attribution': UvMapAttributionElement,
  'uv-map-tooltip': UvMapTooltipElement,
  'uv-map-cluster': UvMapClusterElement,
  'uv-map-polygon': UvMapPolygonElement,
  'uv-map-polyline': UvMapPolylineElement,
  'uv-map-circle': UvMapCircleElement,
  'uv-map-heat-layer': UvMapHeatLayerElement,
  'uv-latitude-input': UvLatitudeInputElement,
  'uv-longitude-input': UvLongitudeInputElement,
  'uv-altitude-input': UvAltitudeInputElement,
  'uv-geo-fence': UvGeoFenceElement,
  'uv-geo-bounds': UvGeoBoundsElement,
  'uv-doc-header': UvDocHeaderElement,
  'uv-doc-footer': UvDocFooterElement,
  'uv-doc-section': UvDocSectionElement,
  'uv-doc-page': UvDocPageElement,
  'uv-doc-metadata': UvDocMetadataElement,
  'uv-page-navigator': UvPageNavigatorElement,
  'uv-page-thumbnail': UvPageThumbnailElement,
  'uv-page-count': UvPageCountElement,
  'uv-zoom-control': UvZoomControlElement,
  'uv-rotation-control': UvRotationControlElement,
  'uv-annotation-toolbar': UvAnnotationToolbarElement,
  'uv-annotation-list': UvAnnotationListElement,
  'uv-annotation-card': UvAnnotationCardElement,
  'uv-highlight-tool': UvHighlightToolElement,
  'uv-comment-tool': UvCommentToolElement,
  'uv-file-breadcrumb': UvFileBreadcrumbElement,
  'uv-file-toolbar': UvFileToolbarElement,
  'uv-file-grid': UvFileGridElement,
  'uv-file-details': UvFileDetailsElement,
  'uv-file-permissions': UvFilePermissionsElement,
  'uv-folder-picker': UvFolderPickerElement,
  'uv-file-picker': UvFilePickerElement,
  'uv-path-input': UvPathInputElement,
  'uv-file-type-badge': UvFileTypeBadgeElement,
  'uv-file-size': UvFileSizeElement,
  'uv-download-queue': UvDownloadQueueElement,
  'uv-transfer-progress': UvTransferProgressElement,
  'uv-sync-status': UvSyncStatusElement,
  'uv-conflict-resolver': UvConflictResolverElement,
  'uv-offline-file': UvOfflineFileElement,
  'uv-media-card': UvMediaCardElement,
  'uv-media-grid': UvMediaGridElement,
  'uv-media-list': UvMediaListElement,
  'uv-media-metadata': UvMediaMetadataElement,
  'uv-media-info': UvMediaInfoElement,
  'uv-playback-rate': UvPlaybackRateElement,
  'uv-quality-selector': UvQualitySelectorElement,
  'uv-subtitle-selector': UvSubtitleSelectorElement,
  'uv-audio-track-selector': UvAudioTrackSelectorElement,
  'uv-picture-in-picture-button': UvPictureInPictureButtonElement,
  'uv-waveform': UvWaveformElement,
  'uv-audio-spectrum': UvAudioSpectrumElement,
  'uv-video-thumbnail': UvVideoThumbnailElement,
  'uv-frame-strip': UvFrameStripElement,
  'uv-chapter-list': UvChapterListElement,
  'uv-image-compare': UvImageCompareElement,
  'uv-image-zoom': UvImageZoomElement,
  'uv-image-pan': UvImagePanElement,
  'uv-image-rotate': UvImageRotateElement,
  'uv-image-annotate': UvImageAnnotateElement,
  'uv-photo-grid': UvPhotoGridElement,
  'uv-photo-card': UvPhotoCardElement,
  'uv-photo-metadata': UvPhotoMetadataElement,
  'uv-photo-exif': UvPhotoExifElement,
  'uv-photo-map': UvPhotoMapElement,
  'uv-category-card': UvCategoryCardElement,
  'uv-category-grid': UvCategoryGridElement,
  'uv-brand-card': UvBrandCardElement,
  'uv-brand-list': UvBrandListElement,
  'uv-collection-card': UvCollectionCardElement,
  'uv-product-badge': UvProductBadgeElement,
  'uv-product-meta': UvProductMetaElement,
  'uv-product-specs': UvProductSpecsElement,
  'uv-product-comparison': UvProductComparisonElement,
  'uv-product-recommendations': UvProductRecommendationsElement,
  'uv-mini-cart': UvMiniCartElement,
  'uv-cart-drawer': UvCartDrawerElement,
  'uv-cart-badge': UvCartBadgeElement,
  'uv-cart-empty-state': UvCartEmptyStateElement,
  'uv-cart-coupon': UvCartCouponElement,
  'uv-checkout-steps': UvCheckoutStepsElement,
  'uv-shipping-method': UvShippingMethodElement,
  'uv-delivery-slot': UvDeliverySlotElement,
  'uv-gift-options': UvGiftOptionsElement,
  'uv-order-notes': UvOrderNotesElement,
  'uv-card-form': UvCardFormElement,
  'uv-wallet-button': UvWalletButtonElement,
  'uv-bank-transfer': UvBankTransferElement,
  'uv-payment-status': UvPaymentStatusElement,
  'uv-receipt': UvReceiptElement,
  'uv-order-details': UvOrderDetailsElement,
  'uv-order-items': UvOrderItemsElement,
  'uv-order-totals': UvOrderTotalsElement,
  'uv-return-status': UvReturnStatusElement,
  'uv-refund-status': UvRefundStatusElement,
  'uv-plan-card': UvPlanCardElement,
  'uv-plan-selector': UvPlanSelectorElement,
  'uv-subscription-card': UvSubscriptionCardElement,
  'uv-billing-cycle': UvBillingCycleElement,
  'uv-usage-meter': UvUsageMeterElement,
  'uv-share-menu': UvShareMenuElement,
  'uv-share-preview': UvSharePreviewElement,
  'uv-mention-list': UvMentionListElement,
  'uv-hashtag': UvHashtagElement,
  'uv-social-card': UvSocialCardElement,
  'uv-post-card': UvPostCardElement,
  'uv-post-composer': UvPostComposerElement,
  'uv-post-actions': UvPostActionsElement,
  'uv-post-metrics': UvPostMetricsElement,
  'uv-post-media': UvPostMediaElement,
  'uv-chat-header': UvChatHeaderElement,
  'uv-chat-list': UvChatListElement,
  'uv-chat-item': UvChatItemElement,
  'uv-chat-message': UvChatMessageElement,
  'uv-chat-attachment': UvChatAttachmentElement,
  'uv-message-composer': UvMessageComposerElement,
  'uv-message-actions': UvMessageActionsElement,
  'uv-message-status': UvMessageStatusElement,
  'uv-read-receipt': UvReadReceiptElement,
  'uv-voice-message': UvVoiceMessageElement,
  'uv-notification-badge': UvNotificationBadgeElement,
  'uv-notification-list': UvNotificationListElement,
  'uv-notification-item': UvNotificationItemElement,
  'uv-notification-preferences': UvNotificationPreferencesElement,
  'uv-notification-digest': UvNotificationDigestElement,
  'uv-person-card': UvPersonCardElement,
  'uv-person-list': UvPersonListElement,
  'uv-person-picker': UvPersonPickerElement,
  'uv-person-avatar': UvPersonAvatarElement,
  'uv-person-details': UvPersonDetailsElement,
  'uv-team-header': UvTeamHeaderElement,
  'uv-team-members': UvTeamMembersElement,
  'uv-team-picker': UvTeamPickerElement,
  'uv-team-switcher': UvTeamSwitcherElement,
  'uv-team-settings': UvTeamSettingsElement,
  'uv-organization-card': UvOrganizationCardElement,
  'uv-organization-list': UvOrganizationListElement,
  'uv-organization-header': UvOrganizationHeaderElement,
  'uv-organization-chart': UvOrganizationChartElement,
  'uv-organization-settings': UvOrganizationSettingsElement,
  'uv-lead-card': UvLeadCardElement,
  'uv-lead-list': UvLeadListElement,
  'uv-lead-score': UvLeadScoreElement,
  'uv-lead-status': UvLeadStatusElement,
  'uv-lead-pipeline': UvLeadPipelineElement,
  'uv-contact-list': UvContactListElement,
  'uv-contact-detail': UvContactDetailElement,
  'uv-deal-card': UvDealCardElement,
  'uv-deal-pipeline': UvDealPipelineElement,
  'uv-deal-stage': UvDealStageElement,
  'uv-account-card': UvAccountCardElement,
  'uv-account-list': UvAccountListElement,
  'uv-opportunity-card': UvOpportunityCardElement,
  'uv-opportunity-list': UvOpportunityListElement,
  'uv-sales-forecast': UvSalesForecastElement,
  'uv-project-header': UvProjectHeaderElement,
  'uv-project-nav': UvProjectNavElement,
  'uv-project-members': UvProjectMembersElement,
  'uv-project-settings': UvProjectSettingsElement,
  'uv-project-activity': UvProjectActivityElement,
  'uv-task-header': UvTaskHeaderElement,
  'uv-task-detail': UvTaskDetailElement,
  'uv-task-assignee': UvTaskAssigneeElement,
  'uv-task-due-date': UvTaskDueDateElement,
  'uv-task-checklist': UvTaskChecklistElement,
  'uv-subtask-list': UvSubtaskListElement,
  'uv-task-dependencies': UvTaskDependenciesElement,
  'uv-task-estimate': UvTaskEstimateElement,
  'uv-task-progress': UvTaskProgressElement,
  'uv-task-comments': UvTaskCommentsElement,
  'uv-sprint-card': UvSprintCardElement,
  'uv-sprint-list': UvSprintListElement,
  'uv-sprint-board': UvSprintBoardElement,
  'uv-sprint-burndown': UvSprintBurndownElement,
  'uv-backlog': UvBacklogElement,
  'uv-epic-card': UvEpicCardElement,
  'uv-epic-list': UvEpicListElement,
  'uv-story-card': UvStoryCardElement,
  'uv-story-points': UvStoryPointsElement,
  'uv-velocity-chart': UvVelocityChartElement,
  'uv-repository-card': UvRepositoryCardElement,
  'uv-repository-list': UvRepositoryListElement,
  'uv-repository-header': UvRepositoryHeaderElement,
  'uv-repository-stats': UvRepositoryStatsElement,
  'uv-repository-languages': UvRepositoryLanguagesElement,
  'uv-code-review': UvCodeReviewElement,
  'uv-review-comment': UvReviewCommentElement,
  'uv-review-thread': UvReviewThreadElement,
  'uv-merge-status': UvMergeStatusElement,
  'uv-pipeline-status': UvPipelineStatusElement,
  'uv-build-card': UvBuildCardElement,
  'uv-build-list': UvBuildListElement,
  'uv-build-log': UvBuildLogElement,
  'uv-build-status': UvBuildStatusElement,
  'uv-build-artifacts': UvBuildArtifactsElement,
  'uv-deployment-card': UvDeploymentCardElement,
  'uv-deployment-list': UvDeploymentListElement,
  'uv-deployment-status': UvDeploymentStatusElement,
  'uv-environment-card': UvEnvironmentCardElement,
  'uv-environment-list': UvEnvironmentListElement,
  'uv-api-explorer': UvApiExplorerElement,
  'uv-api-method': UvApiMethodElement,
  'uv-api-headers': UvApiHeadersElement,
  'uv-api-parameters': UvApiParametersElement,
  'uv-api-body': UvApiBodyElement,
  'uv-api-history': UvApiHistoryElement,
  'uv-api-collection': UvApiCollectionElement,
  'uv-api-environment': UvApiEnvironmentElement,
  'uv-api-auth': UvApiAuthElement,
  'uv-api-cookies': UvApiCookiesElement,
  'uv-database-browser': UvDatabaseBrowserElement,
  'uv-database-schema': UvDatabaseSchemaElement,
  'uv-database-index': UvDatabaseIndexElement,
  'uv-database-relation': UvDatabaseRelationElement,
  'uv-database-query-plan': UvDatabaseQueryPlanElement,
  'uv-data-source-card': UvDataSourceCardElement,
  'uv-data-source-list': UvDataSourceListElement,
  'uv-connection-form': UvConnectionFormElement,
  'uv-connection-list': UvConnectionListElement,
  'uv-connection-card': UvConnectionCardElement,
  'uv-monitor-card': UvMonitorCardElement,
  'uv-monitor-list': UvMonitorListElement,
  'uv-monitor-status': UvMonitorStatusElement,
  'uv-monitor-chart': UvMonitorChartElement,
  'uv-monitor-settings': UvMonitorSettingsElement,
  'uv-log-stream': UvLogStreamElement,
  'uv-log-filter': UvLogFilterElement,
  'uv-log-entry': UvLogEntryElement,
  'uv-log-level': UvLogLevelElement,
  'uv-log-stats': UvLogStatsElement,
  'uv-trace-list': UvTraceListElement,
  'uv-trace-detail': UvTraceDetailElement,
  'uv-span-tree': UvSpanTreeElement,
  'uv-span-detail': UvSpanDetailElement,
  'uv-trace-waterfall': UvTraceWaterfallElement,
  'uv-alert-card': UvAlertCardElement,
  'uv-alert-list': UvAlertListElement,
  'uv-alert-history': UvAlertHistoryElement,
  'uv-alert-severity': UvAlertSeverityElement,
  'uv-alert-channel': UvAlertChannelElement,
  'uv-security-overview': UvSecurityOverviewElement,
  'uv-security-event': UvSecurityEventElement,
  'uv-security-finding': UvSecurityFindingElement,
  'uv-security-control': UvSecurityControlElement,
  'uv-security-policy': UvSecurityPolicyElement,
  'uv-vulnerability-card': UvVulnerabilityCardElement,
  'uv-vulnerability-list': UvVulnerabilityListElement,
  'uv-vulnerability-severity': UvVulnerabilitySeverityElement,
  'uv-patch-status': UvPatchStatusElement,
  'uv-compliance-status': UvComplianceStatusElement,
  'uv-mfa-setup': UvMfaSetupElement,
  'uv-mfa-challenge': UvMfaChallengeElement,
  'uv-passkey-list': UvPasskeyListElement,
  'uv-device-session': UvDeviceSessionElement,
  'uv-login-history': UvLoginHistoryElement,
  'uv-access-token': UvAccessTokenElement,
  'uv-access-token-list': UvAccessTokenListElement,
  'uv-oauth-consent': UvOauthConsentElement,
  'uv-sso-button': UvSsoButtonElement,
  'uv-identity-provider': UvIdentityProviderElement,
  'uv-settings-header': UvSettingsHeaderElement,
  'uv-settings-nav': UvSettingsNavElement,
  'uv-settings-section': UvSettingsSectionElement,
  'uv-settings-group': UvSettingsGroupElement,
  'uv-settings-row': UvSettingsRowElement,
  'uv-theme-settings': UvThemeSettingsElement,
  'uv-language-settings': UvLanguageSettingsElement,
  'uv-accessibility-settings': UvAccessibilitySettingsElement,
  'uv-data-settings': UvDataSettingsElement,
  'uv-security-settings': UvSecuritySettingsElement,
  'uv-prompt-library': UvPromptLibraryElement,
  'uv-prompt-card': UvPromptCardElement,
  'uv-prompt-history': UvPromptHistoryElement,
  'uv-prompt-variables': UvPromptVariablesElement,
  'uv-prompt-template': UvPromptTemplateElement,
  'uv-agent-card': UvAgentCardElement,
  'uv-agent-list': UvAgentListElement,
  'uv-agent-status': UvAgentStatusElement,
  'uv-agent-tool': UvAgentToolElement,
  'uv-agent-memory': UvAgentMemoryElement,
  'uv-ai-conversation': UvAiConversationElement,
  'uv-ai-message': UvAiMessageElement,
  'uv-ai-thinking': UvAiThinkingElement,
  'uv-ai-citation': UvAiCitationElement,
  'uv-ai-feedback': UvAiFeedbackElement,
  'uv-model-card': UvModelCardElement,
  'uv-model-list': UvModelListElement,
  'uv-model-parameters': UvModelParametersElement,
  'uv-model-benchmark': UvModelBenchmarkElement,
  'uv-model-pricing': UvModelPricingElement,
  'uv-workflow-card': UvWorkflowCardElement,
  'uv-workflow-list': UvWorkflowListElement,
  'uv-workflow-builder': UvWorkflowBuilderElement,
  'uv-workflow-node': UvWorkflowNodeElement,
  'uv-workflow-edge': UvWorkflowEdgeElement,
  'uv-automation-card': UvAutomationCardElement,
  'uv-automation-list': UvAutomationListElement,
  'uv-automation-trigger': UvAutomationTriggerElement,
  'uv-automation-action': UvAutomationActionElement,
  'uv-automation-run': UvAutomationRunElement,
  'uv-integration-card': UvIntegrationCardElement,
  'uv-integration-list': UvIntegrationListElement,
  'uv-integration-setup': UvIntegrationSetupElement,
  'uv-integration-status': UvIntegrationStatusElement,
  'uv-webhook-card': UvWebhookCardElement,
  'uv-webhook-list': UvWebhookListElement,
  'uv-webhook-event': UvWebhookEventElement,
  'uv-webhook-delivery': UvWebhookDeliveryElement,
  'uv-webhook-log': UvWebhookLogElement,
  'uv-api-credential': UvApiCredentialElement,
  'uv-release-card': UvReleaseCardElement,
  'uv-release-list': UvReleaseListElement,
  'uv-release-notes': UvReleaseNotesElement,
  'uv-release-timeline': UvReleaseTimelineElement,
  'uv-release-status': UvReleaseStatusElement,
  'uv-experiment-list': UvExperimentListElement,
  'uv-experiment-results': UvExperimentResultsElement,
  'uv-experiment-metric': UvExperimentMetricElement,
  'uv-experiment-audience': UvExperimentAudienceElement,
  'uv-experiment-status': UvExperimentStatusElement,
  'uv-admin-shell': UvAdminShellElement,
  'uv-admin-header': UvAdminHeaderElement,
  'uv-admin-sidebar': UvAdminSidebarElement,
  'uv-admin-toolbar': UvAdminToolbarElement,
  'uv-admin-dashboard': UvAdminDashboardElement,
  'uv-commerce-order-overview': UvCommerceOrderOverviewElement,
  'uv-commerce-order-status': UvCommerceOrderStatusElement,
  'uv-commerce-order-timeline': UvCommerceOrderTimelineElement,
  'uv-commerce-order-filters': UvCommerceOrderFiltersElement,
  'uv-commerce-order-actions': UvCommerceOrderActionsElement,
  'uv-commerce-cart-dashboard': UvCommerceCartDashboardElement,
  'uv-commerce-cart-summary': UvCommerceCartSummaryElement,
  'uv-commerce-cart-list': UvCommerceCartListElement,
  'uv-commerce-cart-detail': UvCommerceCartDetailElement,
  'uv-commerce-cart-toolbar': UvCommerceCartToolbarElement,
  'uv-commerce-checkout-card': UvCommerceCheckoutCardElement,
  'uv-commerce-checkout-table': UvCommerceCheckoutTableElement,
  'uv-commerce-checkout-metrics': UvCommerceCheckoutMetricsElement,
  'uv-commerce-checkout-insights': UvCommerceCheckoutInsightsElement,
  'uv-commerce-checkout-menu': UvCommerceCheckoutMenuElement,
  'uv-commerce-catalog-explorer': UvCommerceCatalogExplorerElement,
  'uv-commerce-catalog-navigator': UvCommerceCatalogNavigatorElement,
  'uv-commerce-catalog-viewer': UvCommerceCatalogViewerElement,
  'uv-commerce-catalog-editor': UvCommerceCatalogEditorElement,
  'uv-commerce-catalog-settings': UvCommerceCatalogSettingsElement,
  'uv-commerce-product-queue': UvCommerceProductQueueElement,
  'uv-commerce-product-board': UvCommerceProductBoardElement,
  'uv-commerce-product-calendar': UvCommerceProductCalendarElement,
  'uv-commerce-product-history': UvCommerceProductHistoryElement,
  'uv-commerce-product-reports': UvCommerceProductReportsElement,
  'uv-commerce-pricing-header': UvCommercePricingHeaderElement,
  'uv-commerce-pricing-sidebar': UvCommercePricingSidebarElement,
  'uv-commerce-pricing-grid': UvCommercePricingGridElement,
  'uv-commerce-pricing-panel': UvCommercePricingPanelElement,
  'uv-commerce-pricing-footer': UvCommercePricingFooterElement,
  'uv-commerce-discount-monitor': UvCommerceDiscountMonitorElement,
  'uv-commerce-discount-tracker': UvCommerceDiscountTrackerElement,
  'uv-commerce-discount-alerts': UvCommerceDiscountAlertsElement,
  'uv-commerce-discount-activity': UvCommerceDiscountActivityElement,
  'uv-commerce-discount-controls': UvCommerceDiscountControlsElement,
  'uv-commerce-tax-search': UvCommerceTaxSearchElement,
  'uv-commerce-tax-selector': UvCommerceTaxSelectorElement,
  'uv-commerce-tax-picker': UvCommerceTaxPickerElement,
  'uv-commerce-tax-form': UvCommerceTaxFormElement,
  'uv-commerce-tax-preview': UvCommerceTaxPreviewElement,
  'uv-commerce-refund-badge': UvCommerceRefundBadgeElement,
  'uv-commerce-refund-indicator': UvCommerceRefundIndicatorElement,
  'uv-commerce-refund-progress': UvCommerceRefundProgressElement,
  'uv-commerce-refund-score': UvCommerceRefundScoreElement,
  'uv-commerce-refund-meter': UvCommerceRefundMeterElement,
  'uv-commerce-subscription-map': UvCommerceSubscriptionMapElement,
  'uv-commerce-subscription-chart': UvCommerceSubscriptionChartElement,
  'uv-commerce-subscription-diagram': UvCommerceSubscriptionDiagramElement,
  'uv-commerce-subscription-breakdown': UvCommerceSubscriptionBreakdownElement,
  'uv-commerce-subscription-comparison': UvCommerceSubscriptionComparisonElement,
  'uv-finance-ledger-overview': UvFinanceLedgerOverviewElement,
  'uv-finance-ledger-status': UvFinanceLedgerStatusElement,
  'uv-finance-ledger-timeline': UvFinanceLedgerTimelineElement,
  'uv-finance-ledger-filters': UvFinanceLedgerFiltersElement,
  'uv-finance-ledger-actions': UvFinanceLedgerActionsElement,
  'uv-finance-invoice-dashboard': UvFinanceInvoiceDashboardElement,
  'uv-finance-invoice-summary': UvFinanceInvoiceSummaryElement,
  'uv-finance-invoice-list': UvFinanceInvoiceListElement,
  'uv-finance-invoice-detail': UvFinanceInvoiceDetailElement,
  'uv-finance-invoice-toolbar': UvFinanceInvoiceToolbarElement,
  'uv-finance-payment-card': UvFinancePaymentCardElement,
  'uv-finance-payment-table': UvFinancePaymentTableElement,
  'uv-finance-payment-metrics': UvFinancePaymentMetricsElement,
  'uv-finance-payment-insights': UvFinancePaymentInsightsElement,
  'uv-finance-payment-menu': UvFinancePaymentMenuElement,
  'uv-finance-payout-explorer': UvFinancePayoutExplorerElement,
  'uv-finance-payout-navigator': UvFinancePayoutNavigatorElement,
  'uv-finance-payout-viewer': UvFinancePayoutViewerElement,
  'uv-finance-payout-editor': UvFinancePayoutEditorElement,
  'uv-finance-payout-settings': UvFinancePayoutSettingsElement,
  'uv-finance-expense-queue': UvFinanceExpenseQueueElement,
  'uv-finance-expense-board': UvFinanceExpenseBoardElement,
  'uv-finance-expense-calendar': UvFinanceExpenseCalendarElement,
  'uv-finance-expense-history': UvFinanceExpenseHistoryElement,
  'uv-finance-expense-reports': UvFinanceExpenseReportsElement,
  'uv-finance-budget-header': UvFinanceBudgetHeaderElement,
  'uv-finance-budget-sidebar': UvFinanceBudgetSidebarElement,
  'uv-finance-budget-grid': UvFinanceBudgetGridElement,
  'uv-finance-budget-panel': UvFinanceBudgetPanelElement,
  'uv-finance-budget-footer': UvFinanceBudgetFooterElement,
  'uv-finance-forecast-monitor': UvFinanceForecastMonitorElement,
  'uv-finance-forecast-tracker': UvFinanceForecastTrackerElement,
  'uv-finance-forecast-alerts': UvFinanceForecastAlertsElement,
  'uv-finance-forecast-activity': UvFinanceForecastActivityElement,
  'uv-finance-forecast-controls': UvFinanceForecastControlsElement,
  'uv-finance-treasury-search': UvFinanceTreasurySearchElement,
  'uv-finance-treasury-selector': UvFinanceTreasurySelectorElement,
  'uv-finance-treasury-picker': UvFinanceTreasuryPickerElement,
  'uv-finance-treasury-form': UvFinanceTreasuryFormElement,
  'uv-finance-treasury-preview': UvFinanceTreasuryPreviewElement,
  'uv-finance-reconciliation-badge': UvFinanceReconciliationBadgeElement,
  'uv-finance-reconciliation-indicator': UvFinanceReconciliationIndicatorElement,
  'uv-finance-reconciliation-progress': UvFinanceReconciliationProgressElement,
  'uv-finance-reconciliation-score': UvFinanceReconciliationScoreElement,
  'uv-finance-reconciliation-meter': UvFinanceReconciliationMeterElement,
  'uv-finance-audit-map': UvFinanceAuditMapElement,
  'uv-finance-audit-chart': UvFinanceAuditChartElement,
  'uv-finance-audit-diagram': UvFinanceAuditDiagramElement,
  'uv-finance-audit-breakdown': UvFinanceAuditBreakdownElement,
  'uv-finance-audit-comparison': UvFinanceAuditComparisonElement,
  'uv-banking-account-overview': UvBankingAccountOverviewElement,
  'uv-banking-account-status': UvBankingAccountStatusElement,
  'uv-banking-account-timeline': UvBankingAccountTimelineElement,
  'uv-banking-account-filters': UvBankingAccountFiltersElement,
  'uv-banking-account-actions': UvBankingAccountActionsElement,
  'uv-banking-transaction-dashboard': UvBankingTransactionDashboardElement,
  'uv-banking-transaction-summary': UvBankingTransactionSummaryElement,
  'uv-banking-transaction-list': UvBankingTransactionListElement,
  'uv-banking-transaction-detail': UvBankingTransactionDetailElement,
  'uv-banking-transaction-toolbar': UvBankingTransactionToolbarElement,
  'uv-banking-transfer-card': UvBankingTransferCardElement,
  'uv-banking-transfer-table': UvBankingTransferTableElement,
  'uv-banking-transfer-metrics': UvBankingTransferMetricsElement,
  'uv-banking-transfer-insights': UvBankingTransferInsightsElement,
  'uv-banking-transfer-menu': UvBankingTransferMenuElement,
  'uv-banking-deposit-explorer': UvBankingDepositExplorerElement,
  'uv-banking-deposit-navigator': UvBankingDepositNavigatorElement,
  'uv-banking-deposit-viewer': UvBankingDepositViewerElement,
  'uv-banking-deposit-editor': UvBankingDepositEditorElement,
  'uv-banking-deposit-settings': UvBankingDepositSettingsElement,
  'uv-banking-withdrawal-queue': UvBankingWithdrawalQueueElement,
  'uv-banking-withdrawal-board': UvBankingWithdrawalBoardElement,
  'uv-banking-withdrawal-calendar': UvBankingWithdrawalCalendarElement,
  'uv-banking-withdrawal-history': UvBankingWithdrawalHistoryElement,
  'uv-banking-withdrawal-reports': UvBankingWithdrawalReportsElement,
  'uv-banking-loan-header': UvBankingLoanHeaderElement,
  'uv-banking-loan-sidebar': UvBankingLoanSidebarElement,
  'uv-banking-loan-grid': UvBankingLoanGridElement,
  'uv-banking-loan-panel': UvBankingLoanPanelElement,
  'uv-banking-loan-footer': UvBankingLoanFooterElement,
  'uv-banking-credit-monitor': UvBankingCreditMonitorElement,
  'uv-banking-credit-tracker': UvBankingCreditTrackerElement,
  'uv-banking-credit-alerts': UvBankingCreditAlertsElement,
  'uv-banking-credit-activity': UvBankingCreditActivityElement,
  'uv-banking-credit-controls': UvBankingCreditControlsElement,
  'uv-banking-debit-search': UvBankingDebitSearchElement,
  'uv-banking-debit-selector': UvBankingDebitSelectorElement,
  'uv-banking-debit-picker': UvBankingDebitPickerElement,
  'uv-banking-debit-form': UvBankingDebitFormElement,
  'uv-banking-debit-preview': UvBankingDebitPreviewElement,
  'uv-banking-statement-badge': UvBankingStatementBadgeElement,
  'uv-banking-statement-indicator': UvBankingStatementIndicatorElement,
  'uv-banking-statement-progress': UvBankingStatementProgressElement,
  'uv-banking-statement-score': UvBankingStatementScoreElement,
  'uv-banking-statement-meter': UvBankingStatementMeterElement,
  'uv-banking-beneficiary-map': UvBankingBeneficiaryMapElement,
  'uv-banking-beneficiary-chart': UvBankingBeneficiaryChartElement,
  'uv-banking-beneficiary-diagram': UvBankingBeneficiaryDiagramElement,
  'uv-banking-beneficiary-breakdown': UvBankingBeneficiaryBreakdownElement,
  'uv-banking-beneficiary-comparison': UvBankingBeneficiaryComparisonElement,
  'uv-health-patient-overview': UvHealthPatientOverviewElement,
  'uv-health-patient-status': UvHealthPatientStatusElement,
  'uv-health-patient-timeline': UvHealthPatientTimelineElement,
  'uv-health-patient-filters': UvHealthPatientFiltersElement,
  'uv-health-patient-actions': UvHealthPatientActionsElement,
  'uv-health-appointment-dashboard': UvHealthAppointmentDashboardElement,
  'uv-health-appointment-summary': UvHealthAppointmentSummaryElement,
  'uv-health-appointment-list': UvHealthAppointmentListElement,
  'uv-health-appointment-detail': UvHealthAppointmentDetailElement,
  'uv-health-appointment-toolbar': UvHealthAppointmentToolbarElement,
  'uv-health-encounter-card': UvHealthEncounterCardElement,
  'uv-health-encounter-table': UvHealthEncounterTableElement,
  'uv-health-encounter-metrics': UvHealthEncounterMetricsElement,
  'uv-health-encounter-insights': UvHealthEncounterInsightsElement,
  'uv-health-encounter-menu': UvHealthEncounterMenuElement,
  'uv-health-prescription-explorer': UvHealthPrescriptionExplorerElement,
  'uv-health-prescription-navigator': UvHealthPrescriptionNavigatorElement,
  'uv-health-prescription-viewer': UvHealthPrescriptionViewerElement,
  'uv-health-prescription-editor': UvHealthPrescriptionEditorElement,
  'uv-health-prescription-settings': UvHealthPrescriptionSettingsElement,
  'uv-health-laboratory-queue': UvHealthLaboratoryQueueElement,
  'uv-health-laboratory-board': UvHealthLaboratoryBoardElement,
  'uv-health-laboratory-calendar': UvHealthLaboratoryCalendarElement,
  'uv-health-laboratory-history': UvHealthLaboratoryHistoryElement,
  'uv-health-laboratory-reports': UvHealthLaboratoryReportsElement,
  'uv-health-imaging-header': UvHealthImagingHeaderElement,
  'uv-health-imaging-sidebar': UvHealthImagingSidebarElement,
  'uv-health-imaging-grid': UvHealthImagingGridElement,
  'uv-health-imaging-panel': UvHealthImagingPanelElement,
  'uv-health-imaging-footer': UvHealthImagingFooterElement,
  'uv-health-insurance-monitor': UvHealthInsuranceMonitorElement,
  'uv-health-insurance-tracker': UvHealthInsuranceTrackerElement,
  'uv-health-insurance-alerts': UvHealthInsuranceAlertsElement,
  'uv-health-insurance-activity': UvHealthInsuranceActivityElement,
  'uv-health-insurance-controls': UvHealthInsuranceControlsElement,
  'uv-health-claim-search': UvHealthClaimSearchElement,
  'uv-health-claim-selector': UvHealthClaimSelectorElement,
  'uv-health-claim-picker': UvHealthClaimPickerElement,
  'uv-health-claim-form': UvHealthClaimFormElement,
  'uv-health-claim-preview': UvHealthClaimPreviewElement,
  'uv-health-care-plan-badge': UvHealthCarePlanBadgeElement,
  'uv-health-care-plan-indicator': UvHealthCarePlanIndicatorElement,
  'uv-health-care-plan-progress': UvHealthCarePlanProgressElement,
  'uv-health-care-plan-score': UvHealthCarePlanScoreElement,
  'uv-health-care-plan-meter': UvHealthCarePlanMeterElement,
  'uv-health-triage-map': UvHealthTriageMapElement,
  'uv-health-triage-chart': UvHealthTriageChartElement,
  'uv-health-triage-diagram': UvHealthTriageDiagramElement,
  'uv-health-triage-breakdown': UvHealthTriageBreakdownElement,
  'uv-health-triage-comparison': UvHealthTriageComparisonElement,
  'uv-education-course-overview': UvEducationCourseOverviewElement,
  'uv-education-course-status': UvEducationCourseStatusElement,
  'uv-education-course-timeline': UvEducationCourseTimelineElement,
  'uv-education-course-filters': UvEducationCourseFiltersElement,
  'uv-education-course-actions': UvEducationCourseActionsElement,
  'uv-education-lesson-dashboard': UvEducationLessonDashboardElement,
  'uv-education-lesson-summary': UvEducationLessonSummaryElement,
  'uv-education-lesson-list': UvEducationLessonListElement,
  'uv-education-lesson-detail': UvEducationLessonDetailElement,
  'uv-education-lesson-toolbar': UvEducationLessonToolbarElement,
  'uv-education-student-card': UvEducationStudentCardElement,
  'uv-education-student-table': UvEducationStudentTableElement,
  'uv-education-student-metrics': UvEducationStudentMetricsElement,
  'uv-education-student-insights': UvEducationStudentInsightsElement,
  'uv-education-student-menu': UvEducationStudentMenuElement,
  'uv-education-teacher-explorer': UvEducationTeacherExplorerElement,
  'uv-education-teacher-navigator': UvEducationTeacherNavigatorElement,
  'uv-education-teacher-viewer': UvEducationTeacherViewerElement,
  'uv-education-teacher-editor': UvEducationTeacherEditorElement,
  'uv-education-teacher-settings': UvEducationTeacherSettingsElement,
  'uv-education-grade-queue': UvEducationGradeQueueElement,
  'uv-education-grade-board': UvEducationGradeBoardElement,
  'uv-education-grade-calendar': UvEducationGradeCalendarElement,
  'uv-education-grade-history': UvEducationGradeHistoryElement,
  'uv-education-grade-reports': UvEducationGradeReportsElement,
  'uv-education-assignment-header': UvEducationAssignmentHeaderElement,
  'uv-education-assignment-sidebar': UvEducationAssignmentSidebarElement,
  'uv-education-assignment-grid': UvEducationAssignmentGridElement,
  'uv-education-assignment-panel': UvEducationAssignmentPanelElement,
  'uv-education-assignment-footer': UvEducationAssignmentFooterElement,
  'uv-education-exam-monitor': UvEducationExamMonitorElement,
  'uv-education-exam-tracker': UvEducationExamTrackerElement,
  'uv-education-exam-alerts': UvEducationExamAlertsElement,
  'uv-education-exam-activity': UvEducationExamActivityElement,
  'uv-education-exam-controls': UvEducationExamControlsElement,
  'uv-education-enrollment-search': UvEducationEnrollmentSearchElement,
  'uv-education-enrollment-selector': UvEducationEnrollmentSelectorElement,
  'uv-education-enrollment-picker': UvEducationEnrollmentPickerElement,
  'uv-education-enrollment-form': UvEducationEnrollmentFormElement,
  'uv-education-enrollment-preview': UvEducationEnrollmentPreviewElement,
  'uv-education-curriculum-badge': UvEducationCurriculumBadgeElement,
  'uv-education-curriculum-indicator': UvEducationCurriculumIndicatorElement,
  'uv-education-curriculum-progress': UvEducationCurriculumProgressElement,
  'uv-education-curriculum-score': UvEducationCurriculumScoreElement,
  'uv-education-curriculum-meter': UvEducationCurriculumMeterElement,
  'uv-education-attendance-map': UvEducationAttendanceMapElement,
  'uv-education-attendance-chart': UvEducationAttendanceChartElement,
  'uv-education-attendance-diagram': UvEducationAttendanceDiagramElement,
  'uv-education-attendance-breakdown': UvEducationAttendanceBreakdownElement,
  'uv-education-attendance-comparison': UvEducationAttendanceComparisonElement,
  'uv-logistics-shipment-overview': UvLogisticsShipmentOverviewElement,
  'uv-logistics-shipment-status': UvLogisticsShipmentStatusElement,
  'uv-logistics-shipment-timeline': UvLogisticsShipmentTimelineElement,
  'uv-logistics-shipment-filters': UvLogisticsShipmentFiltersElement,
  'uv-logistics-shipment-actions': UvLogisticsShipmentActionsElement,
  'uv-logistics-delivery-dashboard': UvLogisticsDeliveryDashboardElement,
  'uv-logistics-delivery-summary': UvLogisticsDeliverySummaryElement,
  'uv-logistics-delivery-list': UvLogisticsDeliveryListElement,
  'uv-logistics-delivery-detail': UvLogisticsDeliveryDetailElement,
  'uv-logistics-delivery-toolbar': UvLogisticsDeliveryToolbarElement,
  'uv-logistics-route-card': UvLogisticsRouteCardElement,
  'uv-logistics-route-table': UvLogisticsRouteTableElement,
  'uv-logistics-route-metrics': UvLogisticsRouteMetricsElement,
  'uv-logistics-route-insights': UvLogisticsRouteInsightsElement,
  'uv-logistics-route-menu': UvLogisticsRouteMenuElement,
  'uv-logistics-fleet-explorer': UvLogisticsFleetExplorerElement,
  'uv-logistics-fleet-navigator': UvLogisticsFleetNavigatorElement,
  'uv-logistics-fleet-viewer': UvLogisticsFleetViewerElement,
  'uv-logistics-fleet-editor': UvLogisticsFleetEditorElement,
  'uv-logistics-fleet-settings': UvLogisticsFleetSettingsElement,
  'uv-logistics-warehouse-queue': UvLogisticsWarehouseQueueElement,
  'uv-logistics-warehouse-board': UvLogisticsWarehouseBoardElement,
  'uv-logistics-warehouse-calendar': UvLogisticsWarehouseCalendarElement,
  'uv-logistics-warehouse-history': UvLogisticsWarehouseHistoryElement,
  'uv-logistics-warehouse-reports': UvLogisticsWarehouseReportsElement,
  'uv-logistics-inventory-header': UvLogisticsInventoryHeaderElement,
  'uv-logistics-inventory-sidebar': UvLogisticsInventorySidebarElement,
  'uv-logistics-inventory-grid': UvLogisticsInventoryGridElement,
  'uv-logistics-inventory-panel': UvLogisticsInventoryPanelElement,
  'uv-logistics-inventory-footer': UvLogisticsInventoryFooterElement,
  'uv-logistics-package-monitor': UvLogisticsPackageMonitorElement,
  'uv-logistics-package-tracker': UvLogisticsPackageTrackerElement,
  'uv-logistics-package-alerts': UvLogisticsPackageAlertsElement,
  'uv-logistics-package-activity': UvLogisticsPackageActivityElement,
  'uv-logistics-package-controls': UvLogisticsPackageControlsElement,
  'uv-logistics-carrier-search': UvLogisticsCarrierSearchElement,
  'uv-logistics-carrier-selector': UvLogisticsCarrierSelectorElement,
  'uv-logistics-carrier-picker': UvLogisticsCarrierPickerElement,
  'uv-logistics-carrier-form': UvLogisticsCarrierFormElement,
  'uv-logistics-carrier-preview': UvLogisticsCarrierPreviewElement,
  'uv-logistics-dispatch-badge': UvLogisticsDispatchBadgeElement,
  'uv-logistics-dispatch-indicator': UvLogisticsDispatchIndicatorElement,
  'uv-logistics-dispatch-progress': UvLogisticsDispatchProgressElement,
  'uv-logistics-dispatch-score': UvLogisticsDispatchScoreElement,
  'uv-logistics-dispatch-meter': UvLogisticsDispatchMeterElement,
  'uv-logistics-tracking-map': UvLogisticsTrackingMapElement,
  'uv-logistics-tracking-chart': UvLogisticsTrackingChartElement,
  'uv-logistics-tracking-diagram': UvLogisticsTrackingDiagramElement,
  'uv-logistics-tracking-breakdown': UvLogisticsTrackingBreakdownElement,
  'uv-logistics-tracking-comparison': UvLogisticsTrackingComparisonElement,
  'uv-manufacturing-work-order-overview': UvManufacturingWorkOrderOverviewElement,
  'uv-manufacturing-work-order-status': UvManufacturingWorkOrderStatusElement,
  'uv-manufacturing-work-order-timeline': UvManufacturingWorkOrderTimelineElement,
  'uv-manufacturing-work-order-filters': UvManufacturingWorkOrderFiltersElement,
  'uv-manufacturing-work-order-actions': UvManufacturingWorkOrderActionsElement,
  'uv-manufacturing-production-dashboard': UvManufacturingProductionDashboardElement,
  'uv-manufacturing-production-summary': UvManufacturingProductionSummaryElement,
  'uv-manufacturing-production-list': UvManufacturingProductionListElement,
  'uv-manufacturing-production-detail': UvManufacturingProductionDetailElement,
  'uv-manufacturing-production-toolbar': UvManufacturingProductionToolbarElement,
  'uv-manufacturing-assembly-card': UvManufacturingAssemblyCardElement,
  'uv-manufacturing-assembly-table': UvManufacturingAssemblyTableElement,
  'uv-manufacturing-assembly-metrics': UvManufacturingAssemblyMetricsElement,
  'uv-manufacturing-assembly-insights': UvManufacturingAssemblyInsightsElement,
  'uv-manufacturing-assembly-menu': UvManufacturingAssemblyMenuElement,
  'uv-manufacturing-quality-explorer': UvManufacturingQualityExplorerElement,
  'uv-manufacturing-quality-navigator': UvManufacturingQualityNavigatorElement,
  'uv-manufacturing-quality-viewer': UvManufacturingQualityViewerElement,
  'uv-manufacturing-quality-editor': UvManufacturingQualityEditorElement,
  'uv-manufacturing-quality-settings': UvManufacturingQualitySettingsElement,
  'uv-manufacturing-maintenance-queue': UvManufacturingMaintenanceQueueElement,
  'uv-manufacturing-maintenance-board': UvManufacturingMaintenanceBoardElement,
  'uv-manufacturing-maintenance-calendar': UvManufacturingMaintenanceCalendarElement,
  'uv-manufacturing-maintenance-history': UvManufacturingMaintenanceHistoryElement,
  'uv-manufacturing-maintenance-reports': UvManufacturingMaintenanceReportsElement,
  'uv-manufacturing-downtime-header': UvManufacturingDowntimeHeaderElement,
  'uv-manufacturing-downtime-sidebar': UvManufacturingDowntimeSidebarElement,
  'uv-manufacturing-downtime-grid': UvManufacturingDowntimeGridElement,
  'uv-manufacturing-downtime-panel': UvManufacturingDowntimePanelElement,
  'uv-manufacturing-downtime-footer': UvManufacturingDowntimeFooterElement,
  'uv-manufacturing-material-monitor': UvManufacturingMaterialMonitorElement,
  'uv-manufacturing-material-tracker': UvManufacturingMaterialTrackerElement,
  'uv-manufacturing-material-alerts': UvManufacturingMaterialAlertsElement,
  'uv-manufacturing-material-activity': UvManufacturingMaterialActivityElement,
  'uv-manufacturing-material-controls': UvManufacturingMaterialControlsElement,
  'uv-manufacturing-machine-search': UvManufacturingMachineSearchElement,
  'uv-manufacturing-machine-selector': UvManufacturingMachineSelectorElement,
  'uv-manufacturing-machine-picker': UvManufacturingMachinePickerElement,
  'uv-manufacturing-machine-form': UvManufacturingMachineFormElement,
  'uv-manufacturing-machine-preview': UvManufacturingMachinePreviewElement,
  'uv-manufacturing-plant-badge': UvManufacturingPlantBadgeElement,
  'uv-manufacturing-plant-indicator': UvManufacturingPlantIndicatorElement,
  'uv-manufacturing-plant-progress': UvManufacturingPlantProgressElement,
  'uv-manufacturing-plant-score': UvManufacturingPlantScoreElement,
  'uv-manufacturing-plant-meter': UvManufacturingPlantMeterElement,
  'uv-manufacturing-batch-map': UvManufacturingBatchMapElement,
  'uv-manufacturing-batch-chart': UvManufacturingBatchChartElement,
  'uv-manufacturing-batch-diagram': UvManufacturingBatchDiagramElement,
  'uv-manufacturing-batch-breakdown': UvManufacturingBatchBreakdownElement,
  'uv-manufacturing-batch-comparison': UvManufacturingBatchComparisonElement,
  'uv-retail-store-overview': UvRetailStoreOverviewElement,
  'uv-retail-store-status': UvRetailStoreStatusElement,
  'uv-retail-store-timeline': UvRetailStoreTimelineElement,
  'uv-retail-store-filters': UvRetailStoreFiltersElement,
  'uv-retail-store-actions': UvRetailStoreActionsElement,
  'uv-retail-point-of-sale-dashboard': UvRetailPointOfSaleDashboardElement,
  'uv-retail-point-of-sale-summary': UvRetailPointOfSaleSummaryElement,
  'uv-retail-point-of-sale-list': UvRetailPointOfSaleListElement,
  'uv-retail-point-of-sale-detail': UvRetailPointOfSaleDetailElement,
  'uv-retail-point-of-sale-toolbar': UvRetailPointOfSaleToolbarElement,
  'uv-retail-receipt-card': UvRetailReceiptCardElement,
  'uv-retail-receipt-table': UvRetailReceiptTableElement,
  'uv-retail-receipt-metrics': UvRetailReceiptMetricsElement,
  'uv-retail-receipt-insights': UvRetailReceiptInsightsElement,
  'uv-retail-receipt-menu': UvRetailReceiptMenuElement,
  'uv-retail-loyalty-explorer': UvRetailLoyaltyExplorerElement,
  'uv-retail-loyalty-navigator': UvRetailLoyaltyNavigatorElement,
  'uv-retail-loyalty-viewer': UvRetailLoyaltyViewerElement,
  'uv-retail-loyalty-editor': UvRetailLoyaltyEditorElement,
  'uv-retail-loyalty-settings': UvRetailLoyaltySettingsElement,
  'uv-retail-promotion-queue': UvRetailPromotionQueueElement,
  'uv-retail-promotion-board': UvRetailPromotionBoardElement,
  'uv-retail-promotion-calendar': UvRetailPromotionCalendarElement,
  'uv-retail-promotion-history': UvRetailPromotionHistoryElement,
  'uv-retail-promotion-reports': UvRetailPromotionReportsElement,
  'uv-retail-merchandising-header': UvRetailMerchandisingHeaderElement,
  'uv-retail-merchandising-sidebar': UvRetailMerchandisingSidebarElement,
  'uv-retail-merchandising-grid': UvRetailMerchandisingGridElement,
  'uv-retail-merchandising-panel': UvRetailMerchandisingPanelElement,
  'uv-retail-merchandising-footer': UvRetailMerchandisingFooterElement,
  'uv-retail-stock-monitor': UvRetailStockMonitorElement,
  'uv-retail-stock-tracker': UvRetailStockTrackerElement,
  'uv-retail-stock-alerts': UvRetailStockAlertsElement,
  'uv-retail-stock-activity': UvRetailStockActivityElement,
  'uv-retail-stock-controls': UvRetailStockControlsElement,
  'uv-retail-return-search': UvRetailReturnSearchElement,
  'uv-retail-return-selector': UvRetailReturnSelectorElement,
  'uv-retail-return-picker': UvRetailReturnPickerElement,
  'uv-retail-return-form': UvRetailReturnFormElement,
  'uv-retail-return-preview': UvRetailReturnPreviewElement,
  'uv-retail-gift-card-badge': UvRetailGiftCardBadgeElement,
  'uv-retail-gift-card-indicator': UvRetailGiftCardIndicatorElement,
  'uv-retail-gift-card-progress': UvRetailGiftCardProgressElement,
  'uv-retail-gift-card-score': UvRetailGiftCardScoreElement,
  'uv-retail-gift-card-meter': UvRetailGiftCardMeterElement,
  'uv-retail-customer-map': UvRetailCustomerMapElement,
  'uv-retail-customer-chart': UvRetailCustomerChartElement,
  'uv-retail-customer-diagram': UvRetailCustomerDiagramElement,
  'uv-retail-customer-breakdown': UvRetailCustomerBreakdownElement,
  'uv-retail-customer-comparison': UvRetailCustomerComparisonElement,
  'uv-hospitality-booking-overview': UvHospitalityBookingOverviewElement,
  'uv-hospitality-booking-status': UvHospitalityBookingStatusElement,
  'uv-hospitality-booking-timeline': UvHospitalityBookingTimelineElement,
  'uv-hospitality-booking-filters': UvHospitalityBookingFiltersElement,
  'uv-hospitality-booking-actions': UvHospitalityBookingActionsElement,
  'uv-hospitality-room-dashboard': UvHospitalityRoomDashboardElement,
  'uv-hospitality-room-summary': UvHospitalityRoomSummaryElement,
  'uv-hospitality-room-list': UvHospitalityRoomListElement,
  'uv-hospitality-room-detail': UvHospitalityRoomDetailElement,
  'uv-hospitality-room-toolbar': UvHospitalityRoomToolbarElement,
  'uv-hospitality-guest-card': UvHospitalityGuestCardElement,
  'uv-hospitality-guest-table': UvHospitalityGuestTableElement,
  'uv-hospitality-guest-metrics': UvHospitalityGuestMetricsElement,
  'uv-hospitality-guest-insights': UvHospitalityGuestInsightsElement,
  'uv-hospitality-guest-menu': UvHospitalityGuestMenuElement,
  'uv-hospitality-reservation-explorer': UvHospitalityReservationExplorerElement,
  'uv-hospitality-reservation-navigator': UvHospitalityReservationNavigatorElement,
  'uv-hospitality-reservation-viewer': UvHospitalityReservationViewerElement,
  'uv-hospitality-reservation-editor': UvHospitalityReservationEditorElement,
  'uv-hospitality-reservation-settings': UvHospitalityReservationSettingsElement,
  'uv-hospitality-check-in-queue': UvHospitalityCheckInQueueElement,
  'uv-hospitality-check-in-board': UvHospitalityCheckInBoardElement,
  'uv-hospitality-check-in-calendar': UvHospitalityCheckInCalendarElement,
  'uv-hospitality-check-in-history': UvHospitalityCheckInHistoryElement,
  'uv-hospitality-check-in-reports': UvHospitalityCheckInReportsElement,
  'uv-hospitality-check-out-header': UvHospitalityCheckOutHeaderElement,
  'uv-hospitality-check-out-sidebar': UvHospitalityCheckOutSidebarElement,
  'uv-hospitality-check-out-grid': UvHospitalityCheckOutGridElement,
  'uv-hospitality-check-out-panel': UvHospitalityCheckOutPanelElement,
  'uv-hospitality-check-out-footer': UvHospitalityCheckOutFooterElement,
  'uv-hospitality-housekeeping-monitor': UvHospitalityHousekeepingMonitorElement,
  'uv-hospitality-housekeeping-tracker': UvHospitalityHousekeepingTrackerElement,
  'uv-hospitality-housekeeping-alerts': UvHospitalityHousekeepingAlertsElement,
  'uv-hospitality-housekeeping-activity': UvHospitalityHousekeepingActivityElement,
  'uv-hospitality-housekeeping-controls': UvHospitalityHousekeepingControlsElement,
  'uv-hospitality-amenity-search': UvHospitalityAmenitySearchElement,
  'uv-hospitality-amenity-selector': UvHospitalityAmenitySelectorElement,
  'uv-hospitality-amenity-picker': UvHospitalityAmenityPickerElement,
  'uv-hospitality-amenity-form': UvHospitalityAmenityFormElement,
  'uv-hospitality-amenity-preview': UvHospitalityAmenityPreviewElement,
  'uv-hospitality-rate-plan-badge': UvHospitalityRatePlanBadgeElement,
  'uv-hospitality-rate-plan-indicator': UvHospitalityRatePlanIndicatorElement,
  'uv-hospitality-rate-plan-progress': UvHospitalityRatePlanProgressElement,
  'uv-hospitality-rate-plan-score': UvHospitalityRatePlanScoreElement,
  'uv-hospitality-rate-plan-meter': UvHospitalityRatePlanMeterElement,
  'uv-hospitality-occupancy-map': UvHospitalityOccupancyMapElement,
  'uv-hospitality-occupancy-chart': UvHospitalityOccupancyChartElement,
  'uv-hospitality-occupancy-diagram': UvHospitalityOccupancyDiagramElement,
  'uv-hospitality-occupancy-breakdown': UvHospitalityOccupancyBreakdownElement,
  'uv-hospitality-occupancy-comparison': UvHospitalityOccupancyComparisonElement,
  'uv-travel-trip-overview': UvTravelTripOverviewElement,
  'uv-travel-trip-status': UvTravelTripStatusElement,
  'uv-travel-trip-timeline': UvTravelTripTimelineElement,
  'uv-travel-trip-filters': UvTravelTripFiltersElement,
  'uv-travel-trip-actions': UvTravelTripActionsElement,
  'uv-travel-itinerary-dashboard': UvTravelItineraryDashboardElement,
  'uv-travel-itinerary-summary': UvTravelItinerarySummaryElement,
  'uv-travel-itinerary-list': UvTravelItineraryListElement,
  'uv-travel-itinerary-detail': UvTravelItineraryDetailElement,
  'uv-travel-itinerary-toolbar': UvTravelItineraryToolbarElement,
  'uv-travel-flight-card': UvTravelFlightCardElement,
  'uv-travel-flight-table': UvTravelFlightTableElement,
  'uv-travel-flight-metrics': UvTravelFlightMetricsElement,
  'uv-travel-flight-insights': UvTravelFlightInsightsElement,
  'uv-travel-flight-menu': UvTravelFlightMenuElement,
  'uv-travel-hotel-explorer': UvTravelHotelExplorerElement,
  'uv-travel-hotel-navigator': UvTravelHotelNavigatorElement,
  'uv-travel-hotel-viewer': UvTravelHotelViewerElement,
  'uv-travel-hotel-editor': UvTravelHotelEditorElement,
  'uv-travel-hotel-settings': UvTravelHotelSettingsElement,
  'uv-travel-rental-car-queue': UvTravelRentalCarQueueElement,
  'uv-travel-rental-car-board': UvTravelRentalCarBoardElement,
  'uv-travel-rental-car-calendar': UvTravelRentalCarCalendarElement,
  'uv-travel-rental-car-history': UvTravelRentalCarHistoryElement,
  'uv-travel-rental-car-reports': UvTravelRentalCarReportsElement,
  'uv-travel-visa-header': UvTravelVisaHeaderElement,
  'uv-travel-visa-sidebar': UvTravelVisaSidebarElement,
  'uv-travel-visa-grid': UvTravelVisaGridElement,
  'uv-travel-visa-panel': UvTravelVisaPanelElement,
  'uv-travel-visa-footer': UvTravelVisaFooterElement,
  'uv-travel-passport-monitor': UvTravelPassportMonitorElement,
  'uv-travel-passport-tracker': UvTravelPassportTrackerElement,
  'uv-travel-passport-alerts': UvTravelPassportAlertsElement,
  'uv-travel-passport-activity': UvTravelPassportActivityElement,
  'uv-travel-passport-controls': UvTravelPassportControlsElement,
  'uv-travel-destination-search': UvTravelDestinationSearchElement,
  'uv-travel-destination-selector': UvTravelDestinationSelectorElement,
  'uv-travel-destination-picker': UvTravelDestinationPickerElement,
  'uv-travel-destination-form': UvTravelDestinationFormElement,
  'uv-travel-destination-preview': UvTravelDestinationPreviewElement,
  'uv-travel-traveler-badge': UvTravelTravelerBadgeElement,
  'uv-travel-traveler-indicator': UvTravelTravelerIndicatorElement,
  'uv-travel-traveler-progress': UvTravelTravelerProgressElement,
  'uv-travel-traveler-score': UvTravelTravelerScoreElement,
  'uv-travel-traveler-meter': UvTravelTravelerMeterElement,
  'uv-travel-baggage-map': UvTravelBaggageMapElement,
  'uv-travel-baggage-chart': UvTravelBaggageChartElement,
  'uv-travel-baggage-diagram': UvTravelBaggageDiagramElement,
  'uv-travel-baggage-breakdown': UvTravelBaggageBreakdownElement,
  'uv-travel-baggage-comparison': UvTravelBaggageComparisonElement,
  'uv-real-estate-property-overview': UvRealEstatePropertyOverviewElement,
  'uv-real-estate-property-status': UvRealEstatePropertyStatusElement,
  'uv-real-estate-property-timeline': UvRealEstatePropertyTimelineElement,
  'uv-real-estate-property-filters': UvRealEstatePropertyFiltersElement,
  'uv-real-estate-property-actions': UvRealEstatePropertyActionsElement,
  'uv-real-estate-listing-dashboard': UvRealEstateListingDashboardElement,
  'uv-real-estate-listing-summary': UvRealEstateListingSummaryElement,
  'uv-real-estate-listing-list': UvRealEstateListingListElement,
  'uv-real-estate-listing-detail': UvRealEstateListingDetailElement,
  'uv-real-estate-listing-toolbar': UvRealEstateListingToolbarElement,
  'uv-real-estate-lease-card': UvRealEstateLeaseCardElement,
  'uv-real-estate-lease-table': UvRealEstateLeaseTableElement,
  'uv-real-estate-lease-metrics': UvRealEstateLeaseMetricsElement,
  'uv-real-estate-lease-insights': UvRealEstateLeaseInsightsElement,
  'uv-real-estate-lease-menu': UvRealEstateLeaseMenuElement,
  'uv-real-estate-tenant-explorer': UvRealEstateTenantExplorerElement,
  'uv-real-estate-tenant-navigator': UvRealEstateTenantNavigatorElement,
  'uv-real-estate-tenant-viewer': UvRealEstateTenantViewerElement,
  'uv-real-estate-tenant-editor': UvRealEstateTenantEditorElement,
  'uv-real-estate-tenant-settings': UvRealEstateTenantSettingsElement,
  'uv-real-estate-landlord-queue': UvRealEstateLandlordQueueElement,
  'uv-real-estate-landlord-board': UvRealEstateLandlordBoardElement,
  'uv-real-estate-landlord-calendar': UvRealEstateLandlordCalendarElement,
  'uv-real-estate-landlord-history': UvRealEstateLandlordHistoryElement,
  'uv-real-estate-landlord-reports': UvRealEstateLandlordReportsElement,
  'uv-real-estate-inspection-header': UvRealEstateInspectionHeaderElement,
  'uv-real-estate-inspection-sidebar': UvRealEstateInspectionSidebarElement,
  'uv-real-estate-inspection-grid': UvRealEstateInspectionGridElement,
  'uv-real-estate-inspection-panel': UvRealEstateInspectionPanelElement,
  'uv-real-estate-inspection-footer': UvRealEstateInspectionFooterElement,
  'uv-real-estate-mortgage-monitor': UvRealEstateMortgageMonitorElement,
  'uv-real-estate-mortgage-tracker': UvRealEstateMortgageTrackerElement,
  'uv-real-estate-mortgage-alerts': UvRealEstateMortgageAlertsElement,
  'uv-real-estate-mortgage-activity': UvRealEstateMortgageActivityElement,
  'uv-real-estate-mortgage-controls': UvRealEstateMortgageControlsElement,
  'uv-real-estate-valuation-search': UvRealEstateValuationSearchElement,
  'uv-real-estate-valuation-selector': UvRealEstateValuationSelectorElement,
  'uv-real-estate-valuation-picker': UvRealEstateValuationPickerElement,
  'uv-real-estate-valuation-form': UvRealEstateValuationFormElement,
  'uv-real-estate-valuation-preview': UvRealEstateValuationPreviewElement,
  'uv-real-estate-agent-badge': UvRealEstateAgentBadgeElement,
  'uv-real-estate-agent-indicator': UvRealEstateAgentIndicatorElement,
  'uv-real-estate-agent-progress': UvRealEstateAgentProgressElement,
  'uv-real-estate-agent-score': UvRealEstateAgentScoreElement,
  'uv-real-estate-agent-meter': UvRealEstateAgentMeterElement,
  'uv-real-estate-offer-map': UvRealEstateOfferMapElement,
  'uv-real-estate-offer-chart': UvRealEstateOfferChartElement,
  'uv-real-estate-offer-diagram': UvRealEstateOfferDiagramElement,
  'uv-real-estate-offer-breakdown': UvRealEstateOfferBreakdownElement,
  'uv-real-estate-offer-comparison': UvRealEstateOfferComparisonElement,
  'uv-construction-project-overview': UvConstructionProjectOverviewElement,
  'uv-construction-project-status': UvConstructionProjectStatusElement,
  'uv-construction-project-timeline': UvConstructionProjectTimelineElement,
  'uv-construction-project-filters': UvConstructionProjectFiltersElement,
  'uv-construction-project-actions': UvConstructionProjectActionsElement,
  'uv-construction-site-dashboard': UvConstructionSiteDashboardElement,
  'uv-construction-site-summary': UvConstructionSiteSummaryElement,
  'uv-construction-site-list': UvConstructionSiteListElement,
  'uv-construction-site-detail': UvConstructionSiteDetailElement,
  'uv-construction-site-toolbar': UvConstructionSiteToolbarElement,
  'uv-construction-contractor-card': UvConstructionContractorCardElement,
  'uv-construction-contractor-table': UvConstructionContractorTableElement,
  'uv-construction-contractor-metrics': UvConstructionContractorMetricsElement,
  'uv-construction-contractor-insights': UvConstructionContractorInsightsElement,
  'uv-construction-contractor-menu': UvConstructionContractorMenuElement,
  'uv-construction-permit-explorer': UvConstructionPermitExplorerElement,
  'uv-construction-permit-navigator': UvConstructionPermitNavigatorElement,
  'uv-construction-permit-viewer': UvConstructionPermitViewerElement,
  'uv-construction-permit-editor': UvConstructionPermitEditorElement,
  'uv-construction-permit-settings': UvConstructionPermitSettingsElement,
  'uv-construction-blueprint-queue': UvConstructionBlueprintQueueElement,
  'uv-construction-blueprint-board': UvConstructionBlueprintBoardElement,
  'uv-construction-blueprint-calendar': UvConstructionBlueprintCalendarElement,
  'uv-construction-blueprint-history': UvConstructionBlueprintHistoryElement,
  'uv-construction-blueprint-reports': UvConstructionBlueprintReportsElement,
  'uv-construction-schedule-header': UvConstructionScheduleHeaderElement,
  'uv-construction-schedule-sidebar': UvConstructionScheduleSidebarElement,
  'uv-construction-schedule-grid': UvConstructionScheduleGridElement,
  'uv-construction-schedule-panel': UvConstructionSchedulePanelElement,
  'uv-construction-schedule-footer': UvConstructionScheduleFooterElement,
  'uv-construction-safety-monitor': UvConstructionSafetyMonitorElement,
  'uv-construction-safety-tracker': UvConstructionSafetyTrackerElement,
  'uv-construction-safety-alerts': UvConstructionSafetyAlertsElement,
  'uv-construction-safety-activity': UvConstructionSafetyActivityElement,
  'uv-construction-safety-controls': UvConstructionSafetyControlsElement,
  'uv-construction-equipment-search': UvConstructionEquipmentSearchElement,
  'uv-construction-equipment-selector': UvConstructionEquipmentSelectorElement,
  'uv-construction-equipment-picker': UvConstructionEquipmentPickerElement,
  'uv-construction-equipment-form': UvConstructionEquipmentFormElement,
  'uv-construction-equipment-preview': UvConstructionEquipmentPreviewElement,
  'uv-construction-material-badge': UvConstructionMaterialBadgeElement,
  'uv-construction-material-indicator': UvConstructionMaterialIndicatorElement,
  'uv-construction-material-progress': UvConstructionMaterialProgressElement,
  'uv-construction-material-score': UvConstructionMaterialScoreElement,
  'uv-construction-material-meter': UvConstructionMaterialMeterElement,
  'uv-construction-progress-map': UvConstructionProgressMapElement,
  'uv-construction-progress-chart': UvConstructionProgressChartElement,
  'uv-construction-progress-diagram': UvConstructionProgressDiagramElement,
  'uv-construction-progress-breakdown': UvConstructionProgressBreakdownElement,
  'uv-construction-progress-comparison': UvConstructionProgressComparisonElement,
  'uv-energy-meter-overview': UvEnergyMeterOverviewElement,
  'uv-energy-meter-status': UvEnergyMeterStatusElement,
  'uv-energy-meter-timeline': UvEnergyMeterTimelineElement,
  'uv-energy-meter-filters': UvEnergyMeterFiltersElement,
  'uv-energy-meter-actions': UvEnergyMeterActionsElement,
  'uv-energy-usage-dashboard': UvEnergyUsageDashboardElement,
  'uv-energy-usage-summary': UvEnergyUsageSummaryElement,
  'uv-energy-usage-list': UvEnergyUsageListElement,
  'uv-energy-usage-detail': UvEnergyUsageDetailElement,
  'uv-energy-usage-toolbar': UvEnergyUsageToolbarElement,
  'uv-energy-tariff-card': UvEnergyTariffCardElement,
  'uv-energy-tariff-table': UvEnergyTariffTableElement,
  'uv-energy-tariff-metrics': UvEnergyTariffMetricsElement,
  'uv-energy-tariff-insights': UvEnergyTariffInsightsElement,
  'uv-energy-tariff-menu': UvEnergyTariffMenuElement,
  'uv-energy-grid-explorer': UvEnergyGridExplorerElement,
  'uv-energy-grid-navigator': UvEnergyGridNavigatorElement,
  'uv-energy-grid-viewer': UvEnergyGridViewerElement,
  'uv-energy-grid-editor': UvEnergyGridEditorElement,
  'uv-energy-grid-settings': UvEnergyGridSettingsElement,
  'uv-energy-solar-queue': UvEnergySolarQueueElement,
  'uv-energy-solar-board': UvEnergySolarBoardElement,
  'uv-energy-solar-calendar': UvEnergySolarCalendarElement,
  'uv-energy-solar-history': UvEnergySolarHistoryElement,
  'uv-energy-solar-reports': UvEnergySolarReportsElement,
  'uv-energy-wind-header': UvEnergyWindHeaderElement,
  'uv-energy-wind-sidebar': UvEnergyWindSidebarElement,
  'uv-energy-wind-grid': UvEnergyWindGridElement,
  'uv-energy-wind-panel': UvEnergyWindPanelElement,
  'uv-energy-wind-footer': UvEnergyWindFooterElement,
  'uv-energy-battery-monitor': UvEnergyBatteryMonitorElement,
  'uv-energy-battery-tracker': UvEnergyBatteryTrackerElement,
  'uv-energy-battery-alerts': UvEnergyBatteryAlertsElement,
  'uv-energy-battery-activity': UvEnergyBatteryActivityElement,
  'uv-energy-battery-controls': UvEnergyBatteryControlsElement,
  'uv-energy-outage-search': UvEnergyOutageSearchElement,
  'uv-energy-outage-selector': UvEnergyOutageSelectorElement,
  'uv-energy-outage-picker': UvEnergyOutagePickerElement,
  'uv-energy-outage-form': UvEnergyOutageFormElement,
  'uv-energy-outage-preview': UvEnergyOutagePreviewElement,
  'uv-energy-demand-badge': UvEnergyDemandBadgeElement,
  'uv-energy-demand-indicator': UvEnergyDemandIndicatorElement,
  'uv-energy-demand-progress': UvEnergyDemandProgressElement,
  'uv-energy-demand-score': UvEnergyDemandScoreElement,
  'uv-energy-demand-meter': UvEnergyDemandMeterElement,
  'uv-energy-emission-map': UvEnergyEmissionMapElement,
  'uv-energy-emission-chart': UvEnergyEmissionChartElement,
  'uv-energy-emission-diagram': UvEnergyEmissionDiagramElement,
  'uv-energy-emission-breakdown': UvEnergyEmissionBreakdownElement,
  'uv-energy-emission-comparison': UvEnergyEmissionComparisonElement,
  'uv-telecom-subscriber-overview': UvTelecomSubscriberOverviewElement,
  'uv-telecom-subscriber-status': UvTelecomSubscriberStatusElement,
  'uv-telecom-subscriber-timeline': UvTelecomSubscriberTimelineElement,
  'uv-telecom-subscriber-filters': UvTelecomSubscriberFiltersElement,
  'uv-telecom-subscriber-actions': UvTelecomSubscriberActionsElement,
  'uv-telecom-plan-dashboard': UvTelecomPlanDashboardElement,
  'uv-telecom-plan-summary': UvTelecomPlanSummaryElement,
  'uv-telecom-plan-list': UvTelecomPlanListElement,
  'uv-telecom-plan-detail': UvTelecomPlanDetailElement,
  'uv-telecom-plan-toolbar': UvTelecomPlanToolbarElement,
  'uv-telecom-data-usage-card': UvTelecomDataUsageCardElement,
  'uv-telecom-data-usage-table': UvTelecomDataUsageTableElement,
  'uv-telecom-data-usage-metrics': UvTelecomDataUsageMetricsElement,
  'uv-telecom-data-usage-insights': UvTelecomDataUsageInsightsElement,
  'uv-telecom-data-usage-menu': UvTelecomDataUsageMenuElement,
  'uv-telecom-call-log-explorer': UvTelecomCallLogExplorerElement,
  'uv-telecom-call-log-navigator': UvTelecomCallLogNavigatorElement,
  'uv-telecom-call-log-viewer': UvTelecomCallLogViewerElement,
  'uv-telecom-call-log-editor': UvTelecomCallLogEditorElement,
  'uv-telecom-call-log-settings': UvTelecomCallLogSettingsElement,
  'uv-telecom-message-queue': UvTelecomMessageQueueElement,
  'uv-telecom-message-board': UvTelecomMessageBoardElement,
  'uv-telecom-message-calendar': UvTelecomMessageCalendarElement,
  'uv-telecom-message-history': UvTelecomMessageHistoryElement,
  'uv-telecom-message-reports': UvTelecomMessageReportsElement,
  'uv-telecom-roaming-header': UvTelecomRoamingHeaderElement,
  'uv-telecom-roaming-sidebar': UvTelecomRoamingSidebarElement,
  'uv-telecom-roaming-grid': UvTelecomRoamingGridElement,
  'uv-telecom-roaming-panel': UvTelecomRoamingPanelElement,
  'uv-telecom-roaming-footer': UvTelecomRoamingFooterElement,
  'uv-telecom-device-monitor': UvTelecomDeviceMonitorElement,
  'uv-telecom-device-tracker': UvTelecomDeviceTrackerElement,
  'uv-telecom-device-alerts': UvTelecomDeviceAlertsElement,
  'uv-telecom-device-activity': UvTelecomDeviceActivityElement,
  'uv-telecom-device-controls': UvTelecomDeviceControlsElement,
  'uv-telecom-network-search': UvTelecomNetworkSearchElement,
  'uv-telecom-network-selector': UvTelecomNetworkSelectorElement,
  'uv-telecom-network-picker': UvTelecomNetworkPickerElement,
  'uv-telecom-network-form': UvTelecomNetworkFormElement,
  'uv-telecom-network-preview': UvTelecomNetworkPreviewElement,
  'uv-telecom-tower-badge': UvTelecomTowerBadgeElement,
  'uv-telecom-tower-indicator': UvTelecomTowerIndicatorElement,
  'uv-telecom-tower-progress': UvTelecomTowerProgressElement,
  'uv-telecom-tower-score': UvTelecomTowerScoreElement,
  'uv-telecom-tower-meter': UvTelecomTowerMeterElement,
  'uv-telecom-coverage-map': UvTelecomCoverageMapElement,
  'uv-telecom-coverage-chart': UvTelecomCoverageChartElement,
  'uv-telecom-coverage-diagram': UvTelecomCoverageDiagramElement,
  'uv-telecom-coverage-breakdown': UvTelecomCoverageBreakdownElement,
  'uv-telecom-coverage-comparison': UvTelecomCoverageComparisonElement,
  'uv-media-article-overview': UvMediaArticleOverviewElement,
  'uv-media-article-status': UvMediaArticleStatusElement,
  'uv-media-article-timeline': UvMediaArticleTimelineElement,
  'uv-media-article-filters': UvMediaArticleFiltersElement,
  'uv-media-article-actions': UvMediaArticleActionsElement,
  'uv-media-publication-dashboard': UvMediaPublicationDashboardElement,
  'uv-media-publication-summary': UvMediaPublicationSummaryElement,
  'uv-media-publication-list': UvMediaPublicationListElement,
  'uv-media-publication-detail': UvMediaPublicationDetailElement,
  'uv-media-publication-toolbar': UvMediaPublicationToolbarElement,
  'uv-media-episode-card': UvMediaEpisodeCardElement,
  'uv-media-episode-table': UvMediaEpisodeTableElement,
  'uv-media-episode-metrics': UvMediaEpisodeMetricsElement,
  'uv-media-episode-insights': UvMediaEpisodeInsightsElement,
  'uv-media-episode-menu': UvMediaEpisodeMenuElement,
  'uv-media-playlist-explorer': UvMediaPlaylistExplorerElement,
  'uv-media-playlist-navigator': UvMediaPlaylistNavigatorElement,
  'uv-media-playlist-viewer': UvMediaPlaylistViewerElement,
  'uv-media-playlist-editor': UvMediaPlaylistEditorElement,
  'uv-media-playlist-settings': UvMediaPlaylistSettingsElement,
  'uv-media-channel-queue': UvMediaChannelQueueElement,
  'uv-media-channel-board': UvMediaChannelBoardElement,
  'uv-media-channel-calendar': UvMediaChannelCalendarElement,
  'uv-media-channel-history': UvMediaChannelHistoryElement,
  'uv-media-channel-reports': UvMediaChannelReportsElement,
  'uv-media-creator-header': UvMediaCreatorHeaderElement,
  'uv-media-creator-sidebar': UvMediaCreatorSidebarElement,
  'uv-media-creator-grid': UvMediaCreatorGridElement,
  'uv-media-creator-panel': UvMediaCreatorPanelElement,
  'uv-media-creator-footer': UvMediaCreatorFooterElement,
  'uv-media-audience-monitor': UvMediaAudienceMonitorElement,
  'uv-media-audience-tracker': UvMediaAudienceTrackerElement,
  'uv-media-audience-alerts': UvMediaAudienceAlertsElement,
  'uv-media-audience-activity': UvMediaAudienceActivityElement,
  'uv-media-audience-controls': UvMediaAudienceControlsElement,
  'uv-media-campaign-search': UvMediaCampaignSearchElement,
  'uv-media-campaign-selector': UvMediaCampaignSelectorElement,
  'uv-media-campaign-picker': UvMediaCampaignPickerElement,
  'uv-media-campaign-form': UvMediaCampaignFormElement,
  'uv-media-campaign-preview': UvMediaCampaignPreviewElement,
  'uv-media-asset-badge': UvMediaAssetBadgeElement,
  'uv-media-asset-indicator': UvMediaAssetIndicatorElement,
  'uv-media-asset-progress': UvMediaAssetProgressElement,
  'uv-media-asset-score': UvMediaAssetScoreElement,
  'uv-media-asset-meter': UvMediaAssetMeterElement,
  'uv-media-rights-map': UvMediaRightsMapElement,
  'uv-media-rights-chart': UvMediaRightsChartElement,
  'uv-media-rights-diagram': UvMediaRightsDiagramElement,
  'uv-media-rights-breakdown': UvMediaRightsBreakdownElement,
  'uv-media-rights-comparison': UvMediaRightsComparisonElement,
  'uv-marketing-lead-overview': UvMarketingLeadOverviewElement,
  'uv-marketing-lead-status': UvMarketingLeadStatusElement,
  'uv-marketing-lead-timeline': UvMarketingLeadTimelineElement,
  'uv-marketing-lead-filters': UvMarketingLeadFiltersElement,
  'uv-marketing-lead-actions': UvMarketingLeadActionsElement,
  'uv-marketing-funnel-dashboard': UvMarketingFunnelDashboardElement,
  'uv-marketing-funnel-summary': UvMarketingFunnelSummaryElement,
  'uv-marketing-funnel-list': UvMarketingFunnelListElement,
  'uv-marketing-funnel-detail': UvMarketingFunnelDetailElement,
  'uv-marketing-funnel-toolbar': UvMarketingFunnelToolbarElement,
  'uv-marketing-campaign-card': UvMarketingCampaignCardElement,
  'uv-marketing-campaign-table': UvMarketingCampaignTableElement,
  'uv-marketing-campaign-metrics': UvMarketingCampaignMetricsElement,
  'uv-marketing-campaign-insights': UvMarketingCampaignInsightsElement,
  'uv-marketing-campaign-menu': UvMarketingCampaignMenuElement,
  'uv-marketing-segment-explorer': UvMarketingSegmentExplorerElement,
  'uv-marketing-segment-navigator': UvMarketingSegmentNavigatorElement,
  'uv-marketing-segment-viewer': UvMarketingSegmentViewerElement,
  'uv-marketing-segment-editor': UvMarketingSegmentEditorElement,
  'uv-marketing-segment-settings': UvMarketingSegmentSettingsElement,
  'uv-marketing-persona-queue': UvMarketingPersonaQueueElement,
  'uv-marketing-persona-board': UvMarketingPersonaBoardElement,
  'uv-marketing-persona-calendar': UvMarketingPersonaCalendarElement,
  'uv-marketing-persona-history': UvMarketingPersonaHistoryElement,
  'uv-marketing-persona-reports': UvMarketingPersonaReportsElement,
  'uv-marketing-attribution-header': UvMarketingAttributionHeaderElement,
  'uv-marketing-attribution-sidebar': UvMarketingAttributionSidebarElement,
  'uv-marketing-attribution-grid': UvMarketingAttributionGridElement,
  'uv-marketing-attribution-panel': UvMarketingAttributionPanelElement,
  'uv-marketing-attribution-footer': UvMarketingAttributionFooterElement,
  'uv-marketing-experiment-monitor': UvMarketingExperimentMonitorElement,
  'uv-marketing-experiment-tracker': UvMarketingExperimentTrackerElement,
  'uv-marketing-experiment-alerts': UvMarketingExperimentAlertsElement,
  'uv-marketing-experiment-activity': UvMarketingExperimentActivityElement,
  'uv-marketing-experiment-controls': UvMarketingExperimentControlsElement,
  'uv-marketing-content-search': UvMarketingContentSearchElement,
  'uv-marketing-content-selector': UvMarketingContentSelectorElement,
  'uv-marketing-content-picker': UvMarketingContentPickerElement,
  'uv-marketing-content-form': UvMarketingContentFormElement,
  'uv-marketing-content-preview': UvMarketingContentPreviewElement,
  'uv-marketing-keyword-badge': UvMarketingKeywordBadgeElement,
  'uv-marketing-keyword-indicator': UvMarketingKeywordIndicatorElement,
  'uv-marketing-keyword-progress': UvMarketingKeywordProgressElement,
  'uv-marketing-keyword-score': UvMarketingKeywordScoreElement,
  'uv-marketing-keyword-meter': UvMarketingKeywordMeterElement,
  'uv-marketing-conversion-map': UvMarketingConversionMapElement,
  'uv-marketing-conversion-chart': UvMarketingConversionChartElement,
  'uv-marketing-conversion-diagram': UvMarketingConversionDiagramElement,
  'uv-marketing-conversion-breakdown': UvMarketingConversionBreakdownElement,
  'uv-marketing-conversion-comparison': UvMarketingConversionComparisonElement,
  'uv-sales-opportunity-overview': UvSalesOpportunityOverviewElement,
  'uv-sales-opportunity-status': UvSalesOpportunityStatusElement,
  'uv-sales-opportunity-timeline': UvSalesOpportunityTimelineElement,
  'uv-sales-opportunity-filters': UvSalesOpportunityFiltersElement,
  'uv-sales-opportunity-actions': UvSalesOpportunityActionsElement,
  'uv-sales-quote-dashboard': UvSalesQuoteDashboardElement,
  'uv-sales-quote-summary': UvSalesQuoteSummaryElement,
  'uv-sales-quote-list': UvSalesQuoteListElement,
  'uv-sales-quote-detail': UvSalesQuoteDetailElement,
  'uv-sales-quote-toolbar': UvSalesQuoteToolbarElement,
  'uv-sales-proposal-card': UvSalesProposalCardElement,
  'uv-sales-proposal-table': UvSalesProposalTableElement,
  'uv-sales-proposal-metrics': UvSalesProposalMetricsElement,
  'uv-sales-proposal-insights': UvSalesProposalInsightsElement,
  'uv-sales-proposal-menu': UvSalesProposalMenuElement,
  'uv-sales-contract-explorer': UvSalesContractExplorerElement,
  'uv-sales-contract-navigator': UvSalesContractNavigatorElement,
  'uv-sales-contract-viewer': UvSalesContractViewerElement,
  'uv-sales-contract-editor': UvSalesContractEditorElement,
  'uv-sales-contract-settings': UvSalesContractSettingsElement,
  'uv-sales-pipeline-queue': UvSalesPipelineQueueElement,
  'uv-sales-pipeline-board': UvSalesPipelineBoardElement,
  'uv-sales-pipeline-calendar': UvSalesPipelineCalendarElement,
  'uv-sales-pipeline-history': UvSalesPipelineHistoryElement,
  'uv-sales-pipeline-reports': UvSalesPipelineReportsElement,
  'uv-sales-territory-header': UvSalesTerritoryHeaderElement,
  'uv-sales-territory-sidebar': UvSalesTerritorySidebarElement,
  'uv-sales-territory-grid': UvSalesTerritoryGridElement,
  'uv-sales-territory-panel': UvSalesTerritoryPanelElement,
  'uv-sales-territory-footer': UvSalesTerritoryFooterElement,
  'uv-sales-commission-monitor': UvSalesCommissionMonitorElement,
  'uv-sales-commission-tracker': UvSalesCommissionTrackerElement,
  'uv-sales-commission-alerts': UvSalesCommissionAlertsElement,
  'uv-sales-commission-activity': UvSalesCommissionActivityElement,
  'uv-sales-commission-controls': UvSalesCommissionControlsElement,
  'uv-sales-forecast-search': UvSalesForecastSearchElement,
  'uv-sales-forecast-selector': UvSalesForecastSelectorElement,
  'uv-sales-forecast-picker': UvSalesForecastPickerElement,
  'uv-sales-forecast-form': UvSalesForecastFormElement,
  'uv-sales-forecast-preview': UvSalesForecastPreviewElement,
  'uv-sales-account-badge': UvSalesAccountBadgeElement,
  'uv-sales-account-indicator': UvSalesAccountIndicatorElement,
  'uv-sales-account-progress': UvSalesAccountProgressElement,
  'uv-sales-account-score': UvSalesAccountScoreElement,
  'uv-sales-account-meter': UvSalesAccountMeterElement,
  'uv-sales-contact-map': UvSalesContactMapElement,
  'uv-sales-contact-chart': UvSalesContactChartElement,
  'uv-sales-contact-diagram': UvSalesContactDiagramElement,
  'uv-sales-contact-breakdown': UvSalesContactBreakdownElement,
  'uv-sales-contact-comparison': UvSalesContactComparisonElement,
  'uv-crm-contact-overview': UvCrmContactOverviewElement,
  'uv-crm-contact-status': UvCrmContactStatusElement,
  'uv-crm-contact-timeline': UvCrmContactTimelineElement,
  'uv-crm-contact-filters': UvCrmContactFiltersElement,
  'uv-crm-contact-actions': UvCrmContactActionsElement,
  'uv-crm-account-dashboard': UvCrmAccountDashboardElement,
  'uv-crm-account-summary': UvCrmAccountSummaryElement,
  'uv-crm-account-list': UvCrmAccountListElement,
  'uv-crm-account-detail': UvCrmAccountDetailElement,
  'uv-crm-account-toolbar': UvCrmAccountToolbarElement,
  'uv-crm-activity-card': UvCrmActivityCardElement,
  'uv-crm-activity-table': UvCrmActivityTableElement,
  'uv-crm-activity-metrics': UvCrmActivityMetricsElement,
  'uv-crm-activity-insights': UvCrmActivityInsightsElement,
  'uv-crm-activity-menu': UvCrmActivityMenuElement,
  'uv-crm-note-explorer': UvCrmNoteExplorerElement,
  'uv-crm-note-navigator': UvCrmNoteNavigatorElement,
  'uv-crm-note-viewer': UvCrmNoteViewerElement,
  'uv-crm-note-editor': UvCrmNoteEditorElement,
  'uv-crm-note-settings': UvCrmNoteSettingsElement,
  'uv-crm-task-queue': UvCrmTaskQueueElement,
  'uv-crm-task-board': UvCrmTaskBoardElement,
  'uv-crm-task-calendar': UvCrmTaskCalendarElement,
  'uv-crm-task-history': UvCrmTaskHistoryElement,
  'uv-crm-task-reports': UvCrmTaskReportsElement,
  'uv-crm-deal-header': UvCrmDealHeaderElement,
  'uv-crm-deal-sidebar': UvCrmDealSidebarElement,
  'uv-crm-deal-grid': UvCrmDealGridElement,
  'uv-crm-deal-panel': UvCrmDealPanelElement,
  'uv-crm-deal-footer': UvCrmDealFooterElement,
  'uv-crm-stage-monitor': UvCrmStageMonitorElement,
  'uv-crm-stage-tracker': UvCrmStageTrackerElement,
  'uv-crm-stage-alerts': UvCrmStageAlertsElement,
  'uv-crm-stage-activity': UvCrmStageActivityElement,
  'uv-crm-stage-controls': UvCrmStageControlsElement,
  'uv-crm-team-search': UvCrmTeamSearchElement,
  'uv-crm-team-selector': UvCrmTeamSelectorElement,
  'uv-crm-team-picker': UvCrmTeamPickerElement,
  'uv-crm-team-form': UvCrmTeamFormElement,
  'uv-crm-team-preview': UvCrmTeamPreviewElement,
  'uv-crm-territory-badge': UvCrmTerritoryBadgeElement,
  'uv-crm-territory-indicator': UvCrmTerritoryIndicatorElement,
  'uv-crm-territory-progress': UvCrmTerritoryProgressElement,
  'uv-crm-territory-score': UvCrmTerritoryScoreElement,
  'uv-crm-territory-meter': UvCrmTerritoryMeterElement,
  'uv-crm-import-map': UvCrmImportMapElement,
  'uv-crm-import-chart': UvCrmImportChartElement,
  'uv-crm-import-diagram': UvCrmImportDiagramElement,
  'uv-crm-import-breakdown': UvCrmImportBreakdownElement,
  'uv-crm-import-comparison': UvCrmImportComparisonElement,
  'uv-support-ticket-overview': UvSupportTicketOverviewElement,
  'uv-support-ticket-status': UvSupportTicketStatusElement,
  'uv-support-ticket-timeline': UvSupportTicketTimelineElement,
  'uv-support-ticket-filters': UvSupportTicketFiltersElement,
  'uv-support-ticket-actions': UvSupportTicketActionsElement,
  'uv-support-conversation-dashboard': UvSupportConversationDashboardElement,
  'uv-support-conversation-summary': UvSupportConversationSummaryElement,
  'uv-support-conversation-list': UvSupportConversationListElement,
  'uv-support-conversation-detail': UvSupportConversationDetailElement,
  'uv-support-conversation-toolbar': UvSupportConversationToolbarElement,
  'uv-support-queue-card': UvSupportQueueCardElement,
  'uv-support-queue-table': UvSupportQueueTableElement,
  'uv-support-queue-metrics': UvSupportQueueMetricsElement,
  'uv-support-queue-insights': UvSupportQueueInsightsElement,
  'uv-support-queue-menu': UvSupportQueueMenuElement,
  'uv-support-sla-explorer': UvSupportSlaExplorerElement,
  'uv-support-sla-navigator': UvSupportSlaNavigatorElement,
  'uv-support-sla-viewer': UvSupportSlaViewerElement,
  'uv-support-sla-editor': UvSupportSlaEditorElement,
  'uv-support-sla-settings': UvSupportSlaSettingsElement,
  'uv-support-agent-queue': UvSupportAgentQueueElement,
  'uv-support-agent-board': UvSupportAgentBoardElement,
  'uv-support-agent-calendar': UvSupportAgentCalendarElement,
  'uv-support-agent-history': UvSupportAgentHistoryElement,
  'uv-support-agent-reports': UvSupportAgentReportsElement,
  'uv-support-customer-header': UvSupportCustomerHeaderElement,
  'uv-support-customer-sidebar': UvSupportCustomerSidebarElement,
  'uv-support-customer-grid': UvSupportCustomerGridElement,
  'uv-support-customer-panel': UvSupportCustomerPanelElement,
  'uv-support-customer-footer': UvSupportCustomerFooterElement,
  'uv-support-knowledge-monitor': UvSupportKnowledgeMonitorElement,
  'uv-support-knowledge-tracker': UvSupportKnowledgeTrackerElement,
  'uv-support-knowledge-alerts': UvSupportKnowledgeAlertsElement,
  'uv-support-knowledge-activity': UvSupportKnowledgeActivityElement,
  'uv-support-knowledge-controls': UvSupportKnowledgeControlsElement,
  'uv-support-escalation-search': UvSupportEscalationSearchElement,
  'uv-support-escalation-selector': UvSupportEscalationSelectorElement,
  'uv-support-escalation-picker': UvSupportEscalationPickerElement,
  'uv-support-escalation-form': UvSupportEscalationFormElement,
  'uv-support-escalation-preview': UvSupportEscalationPreviewElement,
  'uv-support-satisfaction-badge': UvSupportSatisfactionBadgeElement,
  'uv-support-satisfaction-indicator': UvSupportSatisfactionIndicatorElement,
  'uv-support-satisfaction-progress': UvSupportSatisfactionProgressElement,
  'uv-support-satisfaction-score': UvSupportSatisfactionScoreElement,
  'uv-support-satisfaction-meter': UvSupportSatisfactionMeterElement,
  'uv-support-incident-map': UvSupportIncidentMapElement,
  'uv-support-incident-chart': UvSupportIncidentChartElement,
  'uv-support-incident-diagram': UvSupportIncidentDiagramElement,
  'uv-support-incident-breakdown': UvSupportIncidentBreakdownElement,
  'uv-support-incident-comparison': UvSupportIncidentComparisonElement,
  'uv-hr-employee-overview': UvHrEmployeeOverviewElement,
  'uv-hr-employee-status': UvHrEmployeeStatusElement,
  'uv-hr-employee-timeline': UvHrEmployeeTimelineElement,
  'uv-hr-employee-filters': UvHrEmployeeFiltersElement,
  'uv-hr-employee-actions': UvHrEmployeeActionsElement,
  'uv-hr-candidate-dashboard': UvHrCandidateDashboardElement,
  'uv-hr-candidate-summary': UvHrCandidateSummaryElement,
  'uv-hr-candidate-list': UvHrCandidateListElement,
  'uv-hr-candidate-detail': UvHrCandidateDetailElement,
  'uv-hr-candidate-toolbar': UvHrCandidateToolbarElement,
  'uv-hr-interview-card': UvHrInterviewCardElement,
  'uv-hr-interview-table': UvHrInterviewTableElement,
  'uv-hr-interview-metrics': UvHrInterviewMetricsElement,
  'uv-hr-interview-insights': UvHrInterviewInsightsElement,
  'uv-hr-interview-menu': UvHrInterviewMenuElement,
  'uv-hr-offer-explorer': UvHrOfferExplorerElement,
  'uv-hr-offer-navigator': UvHrOfferNavigatorElement,
  'uv-hr-offer-viewer': UvHrOfferViewerElement,
  'uv-hr-offer-editor': UvHrOfferEditorElement,
  'uv-hr-offer-settings': UvHrOfferSettingsElement,
  'uv-hr-onboarding-queue': UvHrOnboardingQueueElement,
  'uv-hr-onboarding-board': UvHrOnboardingBoardElement,
  'uv-hr-onboarding-calendar': UvHrOnboardingCalendarElement,
  'uv-hr-onboarding-history': UvHrOnboardingHistoryElement,
  'uv-hr-onboarding-reports': UvHrOnboardingReportsElement,
  'uv-hr-leave-header': UvHrLeaveHeaderElement,
  'uv-hr-leave-sidebar': UvHrLeaveSidebarElement,
  'uv-hr-leave-grid': UvHrLeaveGridElement,
  'uv-hr-leave-panel': UvHrLeavePanelElement,
  'uv-hr-leave-footer': UvHrLeaveFooterElement,
  'uv-laboratory-ops-monitor-panel': UvLaboratoryOpsMonitorPanelElement,
  'uv-laboratory-ops-monitor-card': UvLaboratoryOpsMonitorCardElement,
  'uv-laboratory-ops-monitor-table': UvLaboratoryOpsMonitorTableElement,
  'uv-laboratory-ops-monitor-form': UvLaboratoryOpsMonitorFormElement,
  'uv-laboratory-ops-monitor-widget': UvLaboratoryOpsMonitorWidgetElement,
  'uv-laboratory-ops-explorer-panel': UvLaboratoryOpsExplorerPanelElement,
  'uv-laboratory-ops-explorer-card': UvLaboratoryOpsExplorerCardElement,
  'uv-laboratory-ops-explorer-table': UvLaboratoryOpsExplorerTableElement,
  'uv-laboratory-ops-explorer-form': UvLaboratoryOpsExplorerFormElement,
  'uv-laboratory-ops-explorer-widget': UvLaboratoryOpsExplorerWidgetElement,
  'uv-laboratory-ops-manager-panel': UvLaboratoryOpsManagerPanelElement,
  'uv-laboratory-ops-manager-card': UvLaboratoryOpsManagerCardElement,
  'uv-laboratory-ops-manager-table': UvLaboratoryOpsManagerTableElement,
  'uv-laboratory-ops-manager-form': UvLaboratoryOpsManagerFormElement,
  'uv-laboratory-ops-manager-widget': UvLaboratoryOpsManagerWidgetElement,
  'uv-laboratory-ops-console-panel': UvLaboratoryOpsConsolePanelElement,
  'uv-laboratory-ops-console-card': UvLaboratoryOpsConsoleCardElement,
  'uv-laboratory-ops-console-table': UvLaboratoryOpsConsoleTableElement,
  'uv-laboratory-ops-console-form': UvLaboratoryOpsConsoleFormElement,
  'uv-laboratory-ops-console-widget': UvLaboratoryOpsConsoleWidgetElement,
  'uv-laboratory-ops-insights-panel': UvLaboratoryOpsInsightsPanelElement,
  'uv-laboratory-ops-insights-card': UvLaboratoryOpsInsightsCardElement,
  'uv-laboratory-ops-insights-table': UvLaboratoryOpsInsightsTableElement,
  'uv-laboratory-ops-insights-form': UvLaboratoryOpsInsightsFormElement,
  'uv-laboratory-ops-insights-widget': UvLaboratoryOpsInsightsWidgetElement,
  'uv-laboratory-ops-workflow-panel': UvLaboratoryOpsWorkflowPanelElement,
  'uv-laboratory-ops-workflow-card': UvLaboratoryOpsWorkflowCardElement,
  'uv-laboratory-ops-workflow-table': UvLaboratoryOpsWorkflowTableElement,
  'uv-laboratory-ops-workflow-form': UvLaboratoryOpsWorkflowFormElement,
  'uv-laboratory-ops-workflow-widget': UvLaboratoryOpsWorkflowWidgetElement,
  'uv-laboratory-ops-automation-panel': UvLaboratoryOpsAutomationPanelElement,
  'uv-laboratory-ops-automation-card': UvLaboratoryOpsAutomationCardElement,
  'uv-laboratory-ops-automation-table': UvLaboratoryOpsAutomationTableElement,
  'uv-laboratory-ops-automation-form': UvLaboratoryOpsAutomationFormElement,
  'uv-laboratory-ops-automation-widget': UvLaboratoryOpsAutomationWidgetElement,
  'uv-telehealth-ops-overview-panel': UvTelehealthOpsOverviewPanelElement,
  'uv-telehealth-ops-overview-card': UvTelehealthOpsOverviewCardElement,
  'uv-telehealth-ops-overview-table': UvTelehealthOpsOverviewTableElement,
  'uv-telehealth-ops-overview-form': UvTelehealthOpsOverviewFormElement,
  'uv-telehealth-ops-overview-widget': UvTelehealthOpsOverviewWidgetElement,
  'uv-telehealth-ops-workspace-panel': UvTelehealthOpsWorkspacePanelElement,
  'uv-telehealth-ops-workspace-card': UvTelehealthOpsWorkspaceCardElement,
  'uv-telehealth-ops-workspace-table': UvTelehealthOpsWorkspaceTableElement,
  'uv-telehealth-ops-workspace-form': UvTelehealthOpsWorkspaceFormElement,
  'uv-telehealth-ops-workspace-widget': UvTelehealthOpsWorkspaceWidgetElement,
  'uv-telehealth-ops-planner-panel': UvTelehealthOpsPlannerPanelElement,
  'uv-telehealth-ops-planner-card': UvTelehealthOpsPlannerCardElement,
  'uv-telehealth-ops-planner-table': UvTelehealthOpsPlannerTableElement,
  'uv-telehealth-ops-planner-form': UvTelehealthOpsPlannerFormElement,
  'uv-telehealth-ops-planner-widget': UvTelehealthOpsPlannerWidgetElement,
  'uv-telehealth-ops-monitor-panel': UvTelehealthOpsMonitorPanelElement,
  'uv-telehealth-ops-monitor-card': UvTelehealthOpsMonitorCardElement,
  'uv-telehealth-ops-monitor-table': UvTelehealthOpsMonitorTableElement,
  'uv-telehealth-ops-monitor-form': UvTelehealthOpsMonitorFormElement,
  'uv-telehealth-ops-monitor-widget': UvTelehealthOpsMonitorWidgetElement,
  'uv-telehealth-ops-explorer-panel': UvTelehealthOpsExplorerPanelElement,
  'uv-telehealth-ops-explorer-card': UvTelehealthOpsExplorerCardElement,
  'uv-telehealth-ops-explorer-table': UvTelehealthOpsExplorerTableElement,
  'uv-telehealth-ops-explorer-form': UvTelehealthOpsExplorerFormElement,
  'uv-telehealth-ops-explorer-widget': UvTelehealthOpsExplorerWidgetElement,
  'uv-telehealth-ops-manager-panel': UvTelehealthOpsManagerPanelElement,
  'uv-telehealth-ops-manager-card': UvTelehealthOpsManagerCardElement,
  'uv-telehealth-ops-manager-table': UvTelehealthOpsManagerTableElement,
  'uv-telehealth-ops-manager-form': UvTelehealthOpsManagerFormElement,
  'uv-telehealth-ops-manager-widget': UvTelehealthOpsManagerWidgetElement,
  'uv-telehealth-ops-console-panel': UvTelehealthOpsConsolePanelElement,
  'uv-telehealth-ops-console-card': UvTelehealthOpsConsoleCardElement,
  'uv-telehealth-ops-console-table': UvTelehealthOpsConsoleTableElement,
  'uv-telehealth-ops-console-form': UvTelehealthOpsConsoleFormElement,
  'uv-telehealth-ops-console-widget': UvTelehealthOpsConsoleWidgetElement,
  'uv-telehealth-ops-insights-panel': UvTelehealthOpsInsightsPanelElement,
  'uv-telehealth-ops-insights-card': UvTelehealthOpsInsightsCardElement,
  'uv-telehealth-ops-insights-table': UvTelehealthOpsInsightsTableElement,
  'uv-telehealth-ops-insights-form': UvTelehealthOpsInsightsFormElement,
  'uv-telehealth-ops-insights-widget': UvTelehealthOpsInsightsWidgetElement,
  'uv-telehealth-ops-workflow-panel': UvTelehealthOpsWorkflowPanelElement,
  'uv-telehealth-ops-workflow-card': UvTelehealthOpsWorkflowCardElement,
  'uv-telehealth-ops-workflow-table': UvTelehealthOpsWorkflowTableElement,
  'uv-telehealth-ops-workflow-form': UvTelehealthOpsWorkflowFormElement,
  'uv-telehealth-ops-workflow-widget': UvTelehealthOpsWorkflowWidgetElement,
  'uv-telehealth-ops-automation-panel': UvTelehealthOpsAutomationPanelElement,
  'uv-telehealth-ops-automation-card': UvTelehealthOpsAutomationCardElement,
  'uv-telehealth-ops-automation-table': UvTelehealthOpsAutomationTableElement,
  'uv-telehealth-ops-automation-form': UvTelehealthOpsAutomationFormElement,
  'uv-telehealth-ops-automation-widget': UvTelehealthOpsAutomationWidgetElement,
  'uv-wellness-ops-overview-panel': UvWellnessOpsOverviewPanelElement,
  'uv-wellness-ops-overview-card': UvWellnessOpsOverviewCardElement,
  'uv-wellness-ops-overview-table': UvWellnessOpsOverviewTableElement,
  'uv-wellness-ops-overview-form': UvWellnessOpsOverviewFormElement,
  'uv-wellness-ops-overview-widget': UvWellnessOpsOverviewWidgetElement,
  'uv-wellness-ops-workspace-panel': UvWellnessOpsWorkspacePanelElement,
  'uv-wellness-ops-workspace-card': UvWellnessOpsWorkspaceCardElement,
  'uv-wellness-ops-workspace-table': UvWellnessOpsWorkspaceTableElement,
  'uv-wellness-ops-workspace-form': UvWellnessOpsWorkspaceFormElement,
  'uv-wellness-ops-workspace-widget': UvWellnessOpsWorkspaceWidgetElement,
  'uv-wellness-ops-planner-panel': UvWellnessOpsPlannerPanelElement,
  'uv-wellness-ops-planner-card': UvWellnessOpsPlannerCardElement,
  'uv-wellness-ops-planner-table': UvWellnessOpsPlannerTableElement,
  'uv-wellness-ops-planner-form': UvWellnessOpsPlannerFormElement,
  'uv-wellness-ops-planner-widget': UvWellnessOpsPlannerWidgetElement,
  'uv-wellness-ops-monitor-panel': UvWellnessOpsMonitorPanelElement,
  'uv-wellness-ops-monitor-card': UvWellnessOpsMonitorCardElement,
  'uv-wellness-ops-monitor-table': UvWellnessOpsMonitorTableElement,
  'uv-wellness-ops-monitor-form': UvWellnessOpsMonitorFormElement,
  'uv-wellness-ops-monitor-widget': UvWellnessOpsMonitorWidgetElement,
  'uv-wellness-ops-explorer-panel': UvWellnessOpsExplorerPanelElement,
  'uv-wellness-ops-explorer-card': UvWellnessOpsExplorerCardElement,
  'uv-wellness-ops-explorer-table': UvWellnessOpsExplorerTableElement,
  'uv-wellness-ops-explorer-form': UvWellnessOpsExplorerFormElement,
  'uv-wellness-ops-explorer-widget': UvWellnessOpsExplorerWidgetElement,
  'uv-wellness-ops-manager-panel': UvWellnessOpsManagerPanelElement,
  'uv-wellness-ops-manager-card': UvWellnessOpsManagerCardElement,
  'uv-wellness-ops-manager-table': UvWellnessOpsManagerTableElement,
  'uv-wellness-ops-manager-form': UvWellnessOpsManagerFormElement,
  'uv-wellness-ops-manager-widget': UvWellnessOpsManagerWidgetElement,
  'uv-wellness-ops-console-panel': UvWellnessOpsConsolePanelElement,
  'uv-wellness-ops-console-card': UvWellnessOpsConsoleCardElement,
  'uv-wellness-ops-console-table': UvWellnessOpsConsoleTableElement,
  'uv-wellness-ops-console-form': UvWellnessOpsConsoleFormElement,
  'uv-wellness-ops-console-widget': UvWellnessOpsConsoleWidgetElement,
  'uv-wellness-ops-insights-panel': UvWellnessOpsInsightsPanelElement,
  'uv-wellness-ops-insights-card': UvWellnessOpsInsightsCardElement,
  'uv-wellness-ops-insights-table': UvWellnessOpsInsightsTableElement,
  'uv-wellness-ops-insights-form': UvWellnessOpsInsightsFormElement,
  'uv-wellness-ops-insights-widget': UvWellnessOpsInsightsWidgetElement,
  'uv-wellness-ops-workflow-panel': UvWellnessOpsWorkflowPanelElement,
  'uv-wellness-ops-workflow-card': UvWellnessOpsWorkflowCardElement,
  'uv-wellness-ops-workflow-table': UvWellnessOpsWorkflowTableElement,
  'uv-wellness-ops-workflow-form': UvWellnessOpsWorkflowFormElement,
  'uv-wellness-ops-workflow-widget': UvWellnessOpsWorkflowWidgetElement,
  'uv-wellness-ops-automation-panel': UvWellnessOpsAutomationPanelElement,
  'uv-wellness-ops-automation-card': UvWellnessOpsAutomationCardElement,
  'uv-wellness-ops-automation-table': UvWellnessOpsAutomationTableElement,
  'uv-wellness-ops-automation-form': UvWellnessOpsAutomationFormElement,
  'uv-wellness-ops-automation-widget': UvWellnessOpsAutomationWidgetElement,
  'uv-learning-ops-overview-panel': UvLearningOpsOverviewPanelElement,
  'uv-learning-ops-overview-card': UvLearningOpsOverviewCardElement,
  'uv-learning-ops-overview-table': UvLearningOpsOverviewTableElement,
  'uv-learning-ops-overview-form': UvLearningOpsOverviewFormElement,
  'uv-learning-ops-overview-widget': UvLearningOpsOverviewWidgetElement,
  'uv-learning-ops-workspace-panel': UvLearningOpsWorkspacePanelElement,
  'uv-learning-ops-workspace-card': UvLearningOpsWorkspaceCardElement,
  'uv-learning-ops-workspace-table': UvLearningOpsWorkspaceTableElement,
  'uv-learning-ops-workspace-form': UvLearningOpsWorkspaceFormElement,
  'uv-learning-ops-workspace-widget': UvLearningOpsWorkspaceWidgetElement,
  'uv-learning-ops-planner-panel': UvLearningOpsPlannerPanelElement,
  'uv-learning-ops-planner-card': UvLearningOpsPlannerCardElement,
  'uv-learning-ops-planner-table': UvLearningOpsPlannerTableElement,
  'uv-learning-ops-planner-form': UvLearningOpsPlannerFormElement,
  'uv-learning-ops-planner-widget': UvLearningOpsPlannerWidgetElement,
  'uv-learning-ops-monitor-panel': UvLearningOpsMonitorPanelElement,
  'uv-learning-ops-monitor-card': UvLearningOpsMonitorCardElement,
  'uv-learning-ops-monitor-table': UvLearningOpsMonitorTableElement,
  'uv-learning-ops-monitor-form': UvLearningOpsMonitorFormElement,
  'uv-learning-ops-monitor-widget': UvLearningOpsMonitorWidgetElement,
  'uv-learning-ops-explorer-panel': UvLearningOpsExplorerPanelElement,
  'uv-learning-ops-explorer-card': UvLearningOpsExplorerCardElement,
  'uv-learning-ops-explorer-table': UvLearningOpsExplorerTableElement,
  'uv-learning-ops-explorer-form': UvLearningOpsExplorerFormElement,
  'uv-learning-ops-explorer-widget': UvLearningOpsExplorerWidgetElement,
  'uv-learning-ops-manager-panel': UvLearningOpsManagerPanelElement,
  'uv-learning-ops-manager-card': UvLearningOpsManagerCardElement,
  'uv-learning-ops-manager-table': UvLearningOpsManagerTableElement,
  'uv-learning-ops-manager-form': UvLearningOpsManagerFormElement,
  'uv-learning-ops-manager-widget': UvLearningOpsManagerWidgetElement,
  'uv-learning-ops-console-panel': UvLearningOpsConsolePanelElement,
  'uv-learning-ops-console-card': UvLearningOpsConsoleCardElement,
  'uv-learning-ops-console-table': UvLearningOpsConsoleTableElement,
  'uv-learning-ops-console-form': UvLearningOpsConsoleFormElement,
  'uv-learning-ops-console-widget': UvLearningOpsConsoleWidgetElement,
  'uv-learning-ops-insights-panel': UvLearningOpsInsightsPanelElement,
  'uv-learning-ops-insights-card': UvLearningOpsInsightsCardElement,
  'uv-learning-ops-insights-table': UvLearningOpsInsightsTableElement,
  'uv-learning-ops-insights-form': UvLearningOpsInsightsFormElement,
  'uv-learning-ops-insights-widget': UvLearningOpsInsightsWidgetElement,
  'uv-learning-ops-workflow-panel': UvLearningOpsWorkflowPanelElement,
  'uv-learning-ops-workflow-card': UvLearningOpsWorkflowCardElement,
  'uv-learning-ops-workflow-table': UvLearningOpsWorkflowTableElement,
  'uv-learning-ops-workflow-form': UvLearningOpsWorkflowFormElement,
  'uv-learning-ops-workflow-widget': UvLearningOpsWorkflowWidgetElement,
  'uv-learning-ops-automation-panel': UvLearningOpsAutomationPanelElement,
  'uv-learning-ops-automation-card': UvLearningOpsAutomationCardElement,
  'uv-learning-ops-automation-table': UvLearningOpsAutomationTableElement,
  'uv-learning-ops-automation-form': UvLearningOpsAutomationFormElement,
  'uv-learning-ops-automation-widget': UvLearningOpsAutomationWidgetElement,
  'uv-campus-ops-overview-panel': UvCampusOpsOverviewPanelElement,
  'uv-campus-ops-overview-card': UvCampusOpsOverviewCardElement,
  'uv-campus-ops-overview-table': UvCampusOpsOverviewTableElement,
  'uv-campus-ops-overview-form': UvCampusOpsOverviewFormElement,
  'uv-campus-ops-overview-widget': UvCampusOpsOverviewWidgetElement,
  'uv-campus-ops-workspace-panel': UvCampusOpsWorkspacePanelElement,
  'uv-campus-ops-workspace-card': UvCampusOpsWorkspaceCardElement,
  'uv-campus-ops-workspace-table': UvCampusOpsWorkspaceTableElement,
  'uv-campus-ops-workspace-form': UvCampusOpsWorkspaceFormElement,
  'uv-campus-ops-workspace-widget': UvCampusOpsWorkspaceWidgetElement,
  'uv-campus-ops-planner-panel': UvCampusOpsPlannerPanelElement,
  'uv-campus-ops-planner-card': UvCampusOpsPlannerCardElement,
  'uv-campus-ops-planner-table': UvCampusOpsPlannerTableElement,
  'uv-campus-ops-planner-form': UvCampusOpsPlannerFormElement,
  'uv-campus-ops-planner-widget': UvCampusOpsPlannerWidgetElement,
  'uv-campus-ops-monitor-panel': UvCampusOpsMonitorPanelElement,
  'uv-campus-ops-monitor-card': UvCampusOpsMonitorCardElement,
  'uv-campus-ops-monitor-table': UvCampusOpsMonitorTableElement,
  'uv-campus-ops-monitor-form': UvCampusOpsMonitorFormElement,
  'uv-campus-ops-monitor-widget': UvCampusOpsMonitorWidgetElement,
  'uv-campus-ops-explorer-panel': UvCampusOpsExplorerPanelElement,
  'uv-campus-ops-explorer-card': UvCampusOpsExplorerCardElement,
  'uv-campus-ops-explorer-table': UvCampusOpsExplorerTableElement,
  'uv-campus-ops-explorer-form': UvCampusOpsExplorerFormElement,
  'uv-campus-ops-explorer-widget': UvCampusOpsExplorerWidgetElement,
  'uv-campus-ops-manager-panel': UvCampusOpsManagerPanelElement,
  'uv-campus-ops-manager-card': UvCampusOpsManagerCardElement,
  'uv-campus-ops-manager-table': UvCampusOpsManagerTableElement,
  'uv-campus-ops-manager-form': UvCampusOpsManagerFormElement,
  'uv-campus-ops-manager-widget': UvCampusOpsManagerWidgetElement,
  'uv-campus-ops-console-panel': UvCampusOpsConsolePanelElement,
  'uv-campus-ops-console-card': UvCampusOpsConsoleCardElement,
  'uv-campus-ops-console-table': UvCampusOpsConsoleTableElement,
  'uv-campus-ops-console-form': UvCampusOpsConsoleFormElement,
  'uv-campus-ops-console-widget': UvCampusOpsConsoleWidgetElement,
  'uv-campus-ops-insights-panel': UvCampusOpsInsightsPanelElement,
  'uv-campus-ops-insights-card': UvCampusOpsInsightsCardElement,
  'uv-campus-ops-insights-table': UvCampusOpsInsightsTableElement,
  'uv-campus-ops-insights-form': UvCampusOpsInsightsFormElement,
  'uv-campus-ops-insights-widget': UvCampusOpsInsightsWidgetElement,
  'uv-campus-ops-workflow-panel': UvCampusOpsWorkflowPanelElement,
  'uv-campus-ops-workflow-card': UvCampusOpsWorkflowCardElement,
  'uv-campus-ops-workflow-table': UvCampusOpsWorkflowTableElement,
  'uv-campus-ops-workflow-form': UvCampusOpsWorkflowFormElement,
  'uv-campus-ops-workflow-widget': UvCampusOpsWorkflowWidgetElement,
  'uv-campus-ops-automation-panel': UvCampusOpsAutomationPanelElement,
  'uv-campus-ops-automation-card': UvCampusOpsAutomationCardElement,
  'uv-campus-ops-automation-table': UvCampusOpsAutomationTableElement,
  'uv-campus-ops-automation-form': UvCampusOpsAutomationFormElement,
  'uv-campus-ops-automation-widget': UvCampusOpsAutomationWidgetElement,
  'uv-research-ops-workspace-panel': UvResearchOpsWorkspacePanelElement,
  'uv-research-ops-workspace-card': UvResearchOpsWorkspaceCardElement,
  'uv-research-ops-workspace-table': UvResearchOpsWorkspaceTableElement,
  'uv-research-ops-workspace-form': UvResearchOpsWorkspaceFormElement,
  'uv-research-ops-workspace-widget': UvResearchOpsWorkspaceWidgetElement,
  'uv-research-ops-planner-panel': UvResearchOpsPlannerPanelElement,
  'uv-research-ops-planner-card': UvResearchOpsPlannerCardElement,
  'uv-research-ops-planner-table': UvResearchOpsPlannerTableElement,
  'uv-research-ops-planner-form': UvResearchOpsPlannerFormElement,
  'uv-research-ops-planner-widget': UvResearchOpsPlannerWidgetElement,
  'uv-research-ops-monitor-panel': UvResearchOpsMonitorPanelElement,
  'uv-research-ops-monitor-card': UvResearchOpsMonitorCardElement,
  'uv-research-ops-monitor-table': UvResearchOpsMonitorTableElement,
  'uv-research-ops-monitor-form': UvResearchOpsMonitorFormElement,
  'uv-research-ops-monitor-widget': UvResearchOpsMonitorWidgetElement,
  'uv-research-ops-explorer-panel': UvResearchOpsExplorerPanelElement,
  'uv-research-ops-explorer-card': UvResearchOpsExplorerCardElement,
  'uv-research-ops-explorer-table': UvResearchOpsExplorerTableElement,
  'uv-research-ops-explorer-form': UvResearchOpsExplorerFormElement,
  'uv-research-ops-explorer-widget': UvResearchOpsExplorerWidgetElement,
  'uv-research-ops-manager-panel': UvResearchOpsManagerPanelElement,
  'uv-research-ops-manager-card': UvResearchOpsManagerCardElement,
  'uv-research-ops-manager-table': UvResearchOpsManagerTableElement,
  'uv-research-ops-manager-form': UvResearchOpsManagerFormElement,
  'uv-research-ops-manager-widget': UvResearchOpsManagerWidgetElement,
  'uv-research-ops-console-panel': UvResearchOpsConsolePanelElement,
  'uv-research-ops-console-card': UvResearchOpsConsoleCardElement,
  'uv-research-ops-console-table': UvResearchOpsConsoleTableElement,
  'uv-research-ops-console-form': UvResearchOpsConsoleFormElement,
  'uv-research-ops-console-widget': UvResearchOpsConsoleWidgetElement,
  'uv-research-ops-insights-panel': UvResearchOpsInsightsPanelElement,
  'uv-research-ops-insights-card': UvResearchOpsInsightsCardElement,
  'uv-research-ops-insights-table': UvResearchOpsInsightsTableElement,
  'uv-research-ops-insights-form': UvResearchOpsInsightsFormElement,
  'uv-research-ops-insights-widget': UvResearchOpsInsightsWidgetElement,
  'uv-research-ops-workflow-panel': UvResearchOpsWorkflowPanelElement,
  'uv-research-ops-workflow-card': UvResearchOpsWorkflowCardElement,
  'uv-research-ops-workflow-table': UvResearchOpsWorkflowTableElement,
  'uv-research-ops-workflow-form': UvResearchOpsWorkflowFormElement,
  'uv-research-ops-workflow-widget': UvResearchOpsWorkflowWidgetElement,
  'uv-research-ops-automation-panel': UvResearchOpsAutomationPanelElement,
  'uv-research-ops-automation-card': UvResearchOpsAutomationCardElement,
  'uv-research-ops-automation-table': UvResearchOpsAutomationTableElement,
  'uv-research-ops-automation-form': UvResearchOpsAutomationFormElement,
  'uv-research-ops-automation-widget': UvResearchOpsAutomationWidgetElement,
  'uv-library-ops-overview-panel': UvLibraryOpsOverviewPanelElement,
  'uv-library-ops-overview-card': UvLibraryOpsOverviewCardElement,
  'uv-library-ops-overview-table': UvLibraryOpsOverviewTableElement,
  'uv-library-ops-overview-form': UvLibraryOpsOverviewFormElement,
  'uv-library-ops-overview-widget': UvLibraryOpsOverviewWidgetElement,
  'uv-library-ops-workspace-panel': UvLibraryOpsWorkspacePanelElement,
  'uv-library-ops-workspace-card': UvLibraryOpsWorkspaceCardElement,
  'uv-library-ops-workspace-table': UvLibraryOpsWorkspaceTableElement,
  'uv-library-ops-workspace-form': UvLibraryOpsWorkspaceFormElement,
  'uv-library-ops-workspace-widget': UvLibraryOpsWorkspaceWidgetElement,
  'uv-library-ops-planner-panel': UvLibraryOpsPlannerPanelElement,
  'uv-library-ops-planner-card': UvLibraryOpsPlannerCardElement,
  'uv-library-ops-planner-table': UvLibraryOpsPlannerTableElement,
  'uv-library-ops-planner-form': UvLibraryOpsPlannerFormElement,
  'uv-library-ops-planner-widget': UvLibraryOpsPlannerWidgetElement,
  'uv-library-ops-monitor-panel': UvLibraryOpsMonitorPanelElement,
  'uv-library-ops-monitor-card': UvLibraryOpsMonitorCardElement,
  'uv-library-ops-monitor-table': UvLibraryOpsMonitorTableElement,
  'uv-library-ops-monitor-form': UvLibraryOpsMonitorFormElement,
  'uv-library-ops-monitor-widget': UvLibraryOpsMonitorWidgetElement,
  'uv-library-ops-explorer-panel': UvLibraryOpsExplorerPanelElement,
  'uv-library-ops-explorer-card': UvLibraryOpsExplorerCardElement,
  'uv-library-ops-explorer-table': UvLibraryOpsExplorerTableElement,
  'uv-library-ops-explorer-form': UvLibraryOpsExplorerFormElement,
  'uv-library-ops-explorer-widget': UvLibraryOpsExplorerWidgetElement,
  'uv-library-ops-manager-panel': UvLibraryOpsManagerPanelElement,
  'uv-library-ops-manager-card': UvLibraryOpsManagerCardElement,
  'uv-library-ops-manager-table': UvLibraryOpsManagerTableElement,
  'uv-library-ops-manager-form': UvLibraryOpsManagerFormElement,
  'uv-library-ops-manager-widget': UvLibraryOpsManagerWidgetElement,
  'uv-library-ops-console-panel': UvLibraryOpsConsolePanelElement,
  'uv-library-ops-console-card': UvLibraryOpsConsoleCardElement,
  'uv-library-ops-console-table': UvLibraryOpsConsoleTableElement,
  'uv-library-ops-console-form': UvLibraryOpsConsoleFormElement,
  'uv-library-ops-console-widget': UvLibraryOpsConsoleWidgetElement,
  'uv-library-ops-insights-panel': UvLibraryOpsInsightsPanelElement,
  'uv-library-ops-insights-card': UvLibraryOpsInsightsCardElement,
  'uv-library-ops-insights-table': UvLibraryOpsInsightsTableElement,
  'uv-library-ops-insights-form': UvLibraryOpsInsightsFormElement,
  'uv-library-ops-insights-widget': UvLibraryOpsInsightsWidgetElement,
  'uv-library-ops-workflow-panel': UvLibraryOpsWorkflowPanelElement,
  'uv-library-ops-workflow-card': UvLibraryOpsWorkflowCardElement,
  'uv-library-ops-workflow-table': UvLibraryOpsWorkflowTableElement,
  'uv-library-ops-workflow-form': UvLibraryOpsWorkflowFormElement,
  'uv-library-ops-workflow-widget': UvLibraryOpsWorkflowWidgetElement,
  'uv-library-ops-automation-panel': UvLibraryOpsAutomationPanelElement,
  'uv-library-ops-automation-card': UvLibraryOpsAutomationCardElement,
  'uv-library-ops-automation-table': UvLibraryOpsAutomationTableElement,
  'uv-library-ops-automation-form': UvLibraryOpsAutomationFormElement,
  'uv-library-ops-automation-widget': UvLibraryOpsAutomationWidgetElement,
  'uv-training-ops-overview-panel': UvTrainingOpsOverviewPanelElement,
  'uv-training-ops-overview-card': UvTrainingOpsOverviewCardElement,
  'uv-training-ops-overview-table': UvTrainingOpsOverviewTableElement,
  'uv-training-ops-overview-form': UvTrainingOpsOverviewFormElement,
  'uv-training-ops-overview-widget': UvTrainingOpsOverviewWidgetElement,
  'uv-training-ops-workspace-panel': UvTrainingOpsWorkspacePanelElement,
  'uv-training-ops-workspace-card': UvTrainingOpsWorkspaceCardElement,
  'uv-training-ops-workspace-table': UvTrainingOpsWorkspaceTableElement,
  'uv-training-ops-workspace-form': UvTrainingOpsWorkspaceFormElement,
  'uv-training-ops-workspace-widget': UvTrainingOpsWorkspaceWidgetElement,
  'uv-training-ops-planner-panel': UvTrainingOpsPlannerPanelElement,
  'uv-training-ops-planner-card': UvTrainingOpsPlannerCardElement,
  'uv-training-ops-planner-table': UvTrainingOpsPlannerTableElement,
  'uv-training-ops-planner-form': UvTrainingOpsPlannerFormElement,
  'uv-training-ops-planner-widget': UvTrainingOpsPlannerWidgetElement,
  'uv-training-ops-monitor-panel': UvTrainingOpsMonitorPanelElement,
  'uv-training-ops-monitor-card': UvTrainingOpsMonitorCardElement,
  'uv-training-ops-monitor-table': UvTrainingOpsMonitorTableElement,
  'uv-training-ops-monitor-form': UvTrainingOpsMonitorFormElement,
  'uv-training-ops-monitor-widget': UvTrainingOpsMonitorWidgetElement,
  'uv-training-ops-explorer-panel': UvTrainingOpsExplorerPanelElement,
  'uv-training-ops-explorer-card': UvTrainingOpsExplorerCardElement,
  'uv-training-ops-explorer-table': UvTrainingOpsExplorerTableElement,
  'uv-training-ops-explorer-form': UvTrainingOpsExplorerFormElement,
  'uv-training-ops-explorer-widget': UvTrainingOpsExplorerWidgetElement,
  'uv-training-ops-manager-panel': UvTrainingOpsManagerPanelElement,
  'uv-training-ops-manager-card': UvTrainingOpsManagerCardElement,
  'uv-training-ops-manager-table': UvTrainingOpsManagerTableElement,
  'uv-training-ops-manager-form': UvTrainingOpsManagerFormElement,
  'uv-training-ops-manager-widget': UvTrainingOpsManagerWidgetElement,
  'uv-training-ops-console-panel': UvTrainingOpsConsolePanelElement,
  'uv-training-ops-console-card': UvTrainingOpsConsoleCardElement,
  'uv-training-ops-console-table': UvTrainingOpsConsoleTableElement,
  'uv-training-ops-console-form': UvTrainingOpsConsoleFormElement,
  'uv-training-ops-console-widget': UvTrainingOpsConsoleWidgetElement,
  'uv-training-ops-insights-panel': UvTrainingOpsInsightsPanelElement,
  'uv-training-ops-insights-card': UvTrainingOpsInsightsCardElement,
  'uv-training-ops-insights-table': UvTrainingOpsInsightsTableElement,
  'uv-training-ops-insights-form': UvTrainingOpsInsightsFormElement,
  'uv-training-ops-insights-widget': UvTrainingOpsInsightsWidgetElement,
  'uv-training-ops-workflow-panel': UvTrainingOpsWorkflowPanelElement,
  'uv-training-ops-workflow-card': UvTrainingOpsWorkflowCardElement,
  'uv-training-ops-workflow-table': UvTrainingOpsWorkflowTableElement,
  'uv-training-ops-workflow-form': UvTrainingOpsWorkflowFormElement,
  'uv-training-ops-workflow-widget': UvTrainingOpsWorkflowWidgetElement,
  'uv-training-ops-automation-panel': UvTrainingOpsAutomationPanelElement,
  'uv-training-ops-automation-card': UvTrainingOpsAutomationCardElement,
  'uv-training-ops-automation-table': UvTrainingOpsAutomationTableElement,
  'uv-training-ops-automation-form': UvTrainingOpsAutomationFormElement,
  'uv-training-ops-automation-widget': UvTrainingOpsAutomationWidgetElement,
  'uv-fleet-ops-overview-panel': UvFleetOpsOverviewPanelElement,
  'uv-fleet-ops-overview-card': UvFleetOpsOverviewCardElement,
  'uv-fleet-ops-overview-table': UvFleetOpsOverviewTableElement,
  'uv-fleet-ops-overview-form': UvFleetOpsOverviewFormElement,
  'uv-fleet-ops-overview-widget': UvFleetOpsOverviewWidgetElement,
  'uv-fleet-ops-workspace-panel': UvFleetOpsWorkspacePanelElement,
  'uv-fleet-ops-workspace-card': UvFleetOpsWorkspaceCardElement,
  'uv-fleet-ops-workspace-table': UvFleetOpsWorkspaceTableElement,
  'uv-fleet-ops-workspace-form': UvFleetOpsWorkspaceFormElement,
  'uv-fleet-ops-workspace-widget': UvFleetOpsWorkspaceWidgetElement,
  'uv-fleet-ops-planner-panel': UvFleetOpsPlannerPanelElement,
  'uv-fleet-ops-planner-card': UvFleetOpsPlannerCardElement,
  'uv-fleet-ops-planner-table': UvFleetOpsPlannerTableElement,
  'uv-fleet-ops-planner-form': UvFleetOpsPlannerFormElement,
  'uv-fleet-ops-planner-widget': UvFleetOpsPlannerWidgetElement,
  'uv-fleet-ops-monitor-panel': UvFleetOpsMonitorPanelElement,
  'uv-fleet-ops-monitor-card': UvFleetOpsMonitorCardElement,
  'uv-fleet-ops-monitor-table': UvFleetOpsMonitorTableElement,
  'uv-fleet-ops-monitor-form': UvFleetOpsMonitorFormElement,
  'uv-fleet-ops-monitor-widget': UvFleetOpsMonitorWidgetElement,
  'uv-fleet-ops-explorer-panel': UvFleetOpsExplorerPanelElement,
  'uv-fleet-ops-explorer-card': UvFleetOpsExplorerCardElement,
  'uv-fleet-ops-explorer-table': UvFleetOpsExplorerTableElement,
  'uv-fleet-ops-explorer-form': UvFleetOpsExplorerFormElement,
  'uv-fleet-ops-explorer-widget': UvFleetOpsExplorerWidgetElement,
  'uv-fleet-ops-manager-panel': UvFleetOpsManagerPanelElement,
  'uv-fleet-ops-manager-card': UvFleetOpsManagerCardElement,
  'uv-fleet-ops-manager-table': UvFleetOpsManagerTableElement,
  'uv-fleet-ops-manager-form': UvFleetOpsManagerFormElement,
  'uv-fleet-ops-manager-widget': UvFleetOpsManagerWidgetElement,
  'uv-fleet-ops-console-panel': UvFleetOpsConsolePanelElement,
  'uv-fleet-ops-console-card': UvFleetOpsConsoleCardElement,
  'uv-fleet-ops-console-table': UvFleetOpsConsoleTableElement,
  'uv-fleet-ops-console-form': UvFleetOpsConsoleFormElement,
  'uv-fleet-ops-console-widget': UvFleetOpsConsoleWidgetElement,
  'uv-fleet-ops-insights-panel': UvFleetOpsInsightsPanelElement,
  'uv-fleet-ops-insights-card': UvFleetOpsInsightsCardElement,
  'uv-fleet-ops-insights-table': UvFleetOpsInsightsTableElement,
  'uv-fleet-ops-insights-form': UvFleetOpsInsightsFormElement,
  'uv-fleet-ops-insights-widget': UvFleetOpsInsightsWidgetElement,
  'uv-fleet-ops-workflow-panel': UvFleetOpsWorkflowPanelElement,
  'uv-fleet-ops-workflow-card': UvFleetOpsWorkflowCardElement,
  'uv-fleet-ops-workflow-table': UvFleetOpsWorkflowTableElement,
  'uv-fleet-ops-workflow-form': UvFleetOpsWorkflowFormElement,
  'uv-fleet-ops-workflow-widget': UvFleetOpsWorkflowWidgetElement,
  'uv-fleet-ops-automation-panel': UvFleetOpsAutomationPanelElement,
  'uv-fleet-ops-automation-card': UvFleetOpsAutomationCardElement,
  'uv-fleet-ops-automation-table': UvFleetOpsAutomationTableElement,
  'uv-fleet-ops-automation-form': UvFleetOpsAutomationFormElement,
  'uv-fleet-ops-automation-widget': UvFleetOpsAutomationWidgetElement,
  'uv-transit-ops-overview-panel': UvTransitOpsOverviewPanelElement,
  'uv-transit-ops-overview-card': UvTransitOpsOverviewCardElement,
  'uv-transit-ops-overview-table': UvTransitOpsOverviewTableElement,
  'uv-transit-ops-overview-form': UvTransitOpsOverviewFormElement,
  'uv-transit-ops-overview-widget': UvTransitOpsOverviewWidgetElement,
  'uv-transit-ops-workspace-panel': UvTransitOpsWorkspacePanelElement,
  'uv-transit-ops-workspace-card': UvTransitOpsWorkspaceCardElement,
  'uv-transit-ops-workspace-table': UvTransitOpsWorkspaceTableElement,
  'uv-transit-ops-workspace-form': UvTransitOpsWorkspaceFormElement,
  'uv-transit-ops-workspace-widget': UvTransitOpsWorkspaceWidgetElement,
  'uv-transit-ops-planner-panel': UvTransitOpsPlannerPanelElement,
  'uv-transit-ops-planner-card': UvTransitOpsPlannerCardElement,
  'uv-transit-ops-planner-table': UvTransitOpsPlannerTableElement,
  'uv-transit-ops-planner-form': UvTransitOpsPlannerFormElement,
  'uv-transit-ops-planner-widget': UvTransitOpsPlannerWidgetElement,
  'uv-transit-ops-monitor-panel': UvTransitOpsMonitorPanelElement,
  'uv-transit-ops-monitor-card': UvTransitOpsMonitorCardElement,
  'uv-transit-ops-monitor-table': UvTransitOpsMonitorTableElement,
  'uv-transit-ops-monitor-form': UvTransitOpsMonitorFormElement,
  'uv-transit-ops-monitor-widget': UvTransitOpsMonitorWidgetElement,
  'uv-transit-ops-explorer-panel': UvTransitOpsExplorerPanelElement,
  'uv-transit-ops-explorer-card': UvTransitOpsExplorerCardElement,
  'uv-transit-ops-explorer-table': UvTransitOpsExplorerTableElement,
  'uv-transit-ops-explorer-form': UvTransitOpsExplorerFormElement,
  'uv-transit-ops-explorer-widget': UvTransitOpsExplorerWidgetElement,
  'uv-transit-ops-manager-panel': UvTransitOpsManagerPanelElement,
  'uv-transit-ops-manager-card': UvTransitOpsManagerCardElement,
  'uv-transit-ops-manager-table': UvTransitOpsManagerTableElement,
  'uv-transit-ops-manager-form': UvTransitOpsManagerFormElement,
  'uv-transit-ops-manager-widget': UvTransitOpsManagerWidgetElement,
  'uv-transit-ops-console-panel': UvTransitOpsConsolePanelElement,
  'uv-transit-ops-console-card': UvTransitOpsConsoleCardElement,
  'uv-transit-ops-console-table': UvTransitOpsConsoleTableElement,
  'uv-transit-ops-console-form': UvTransitOpsConsoleFormElement,
  'uv-transit-ops-console-widget': UvTransitOpsConsoleWidgetElement,
  'uv-transit-ops-insights-panel': UvTransitOpsInsightsPanelElement,
  'uv-transit-ops-insights-card': UvTransitOpsInsightsCardElement,
  'uv-transit-ops-insights-table': UvTransitOpsInsightsTableElement,
  'uv-transit-ops-insights-form': UvTransitOpsInsightsFormElement,
  'uv-transit-ops-insights-widget': UvTransitOpsInsightsWidgetElement,
  'uv-transit-ops-workflow-panel': UvTransitOpsWorkflowPanelElement,
  'uv-transit-ops-workflow-card': UvTransitOpsWorkflowCardElement,
  'uv-transit-ops-workflow-table': UvTransitOpsWorkflowTableElement,
  'uv-transit-ops-workflow-form': UvTransitOpsWorkflowFormElement,
  'uv-transit-ops-workflow-widget': UvTransitOpsWorkflowWidgetElement,
  'uv-transit-ops-automation-panel': UvTransitOpsAutomationPanelElement,
  'uv-transit-ops-automation-card': UvTransitOpsAutomationCardElement,
  'uv-transit-ops-automation-table': UvTransitOpsAutomationTableElement,
  'uv-transit-ops-automation-form': UvTransitOpsAutomationFormElement,
  'uv-transit-ops-automation-widget': UvTransitOpsAutomationWidgetElement,
  'uv-aviation-ops-overview-panel': UvAviationOpsOverviewPanelElement,
  'uv-aviation-ops-overview-card': UvAviationOpsOverviewCardElement,
  'uv-aviation-ops-overview-table': UvAviationOpsOverviewTableElement,
  'uv-aviation-ops-overview-form': UvAviationOpsOverviewFormElement,
  'uv-aviation-ops-overview-widget': UvAviationOpsOverviewWidgetElement,
  'uv-aviation-ops-workspace-panel': UvAviationOpsWorkspacePanelElement,
  'uv-aviation-ops-workspace-card': UvAviationOpsWorkspaceCardElement,
  'uv-aviation-ops-workspace-table': UvAviationOpsWorkspaceTableElement,
  'uv-aviation-ops-workspace-form': UvAviationOpsWorkspaceFormElement,
  'uv-aviation-ops-workspace-widget': UvAviationOpsWorkspaceWidgetElement,
  'uv-aviation-ops-planner-panel': UvAviationOpsPlannerPanelElement,
  'uv-aviation-ops-planner-card': UvAviationOpsPlannerCardElement,
  'uv-aviation-ops-planner-table': UvAviationOpsPlannerTableElement,
  'uv-aviation-ops-planner-form': UvAviationOpsPlannerFormElement,
  'uv-aviation-ops-planner-widget': UvAviationOpsPlannerWidgetElement,
  'uv-aviation-ops-monitor-panel': UvAviationOpsMonitorPanelElement,
  'uv-aviation-ops-monitor-card': UvAviationOpsMonitorCardElement,
  'uv-aviation-ops-monitor-table': UvAviationOpsMonitorTableElement,
  'uv-aviation-ops-monitor-form': UvAviationOpsMonitorFormElement,
  'uv-aviation-ops-monitor-widget': UvAviationOpsMonitorWidgetElement,
  'uv-aviation-ops-explorer-panel': UvAviationOpsExplorerPanelElement,
  'uv-aviation-ops-explorer-card': UvAviationOpsExplorerCardElement,
  'uv-aviation-ops-explorer-table': UvAviationOpsExplorerTableElement,
  'uv-aviation-ops-explorer-form': UvAviationOpsExplorerFormElement,
  'uv-aviation-ops-explorer-widget': UvAviationOpsExplorerWidgetElement,
  'uv-aviation-ops-manager-panel': UvAviationOpsManagerPanelElement,
  'uv-aviation-ops-manager-card': UvAviationOpsManagerCardElement,
  'uv-aviation-ops-manager-table': UvAviationOpsManagerTableElement,
  'uv-aviation-ops-manager-form': UvAviationOpsManagerFormElement,
  'uv-aviation-ops-manager-widget': UvAviationOpsManagerWidgetElement,
  'uv-aviation-ops-console-panel': UvAviationOpsConsolePanelElement,
  'uv-aviation-ops-console-card': UvAviationOpsConsoleCardElement,
  'uv-aviation-ops-console-table': UvAviationOpsConsoleTableElement,
  'uv-aviation-ops-console-form': UvAviationOpsConsoleFormElement,
  'uv-aviation-ops-console-widget': UvAviationOpsConsoleWidgetElement,
  'uv-aviation-ops-insights-panel': UvAviationOpsInsightsPanelElement,
  'uv-aviation-ops-insights-card': UvAviationOpsInsightsCardElement,
  'uv-aviation-ops-insights-table': UvAviationOpsInsightsTableElement,
  'uv-aviation-ops-insights-form': UvAviationOpsInsightsFormElement,
  'uv-aviation-ops-insights-widget': UvAviationOpsInsightsWidgetElement,
  'uv-aviation-ops-workflow-panel': UvAviationOpsWorkflowPanelElement,
  'uv-aviation-ops-workflow-card': UvAviationOpsWorkflowCardElement,
  'uv-aviation-ops-workflow-table': UvAviationOpsWorkflowTableElement,
  'uv-aviation-ops-workflow-form': UvAviationOpsWorkflowFormElement,
  'uv-aviation-ops-workflow-widget': UvAviationOpsWorkflowWidgetElement,
  'uv-aviation-ops-automation-panel': UvAviationOpsAutomationPanelElement,
  'uv-aviation-ops-automation-card': UvAviationOpsAutomationCardElement,
  'uv-aviation-ops-automation-table': UvAviationOpsAutomationTableElement,
  'uv-aviation-ops-automation-form': UvAviationOpsAutomationFormElement,
  'uv-aviation-ops-automation-widget': UvAviationOpsAutomationWidgetElement,
  'uv-maritime-ops-overview-panel': UvMaritimeOpsOverviewPanelElement,
  'uv-maritime-ops-overview-card': UvMaritimeOpsOverviewCardElement,
  'uv-maritime-ops-overview-table': UvMaritimeOpsOverviewTableElement,
  'uv-maritime-ops-overview-form': UvMaritimeOpsOverviewFormElement,
  'uv-maritime-ops-overview-widget': UvMaritimeOpsOverviewWidgetElement,
  'uv-maritime-ops-workspace-panel': UvMaritimeOpsWorkspacePanelElement,
  'uv-maritime-ops-workspace-card': UvMaritimeOpsWorkspaceCardElement,
  'uv-maritime-ops-workspace-table': UvMaritimeOpsWorkspaceTableElement,
  'uv-maritime-ops-workspace-form': UvMaritimeOpsWorkspaceFormElement,
  'uv-maritime-ops-workspace-widget': UvMaritimeOpsWorkspaceWidgetElement,
  'uv-maritime-ops-planner-panel': UvMaritimeOpsPlannerPanelElement,
  'uv-maritime-ops-planner-card': UvMaritimeOpsPlannerCardElement,
  'uv-maritime-ops-planner-table': UvMaritimeOpsPlannerTableElement,
  'uv-maritime-ops-planner-form': UvMaritimeOpsPlannerFormElement,
  'uv-maritime-ops-planner-widget': UvMaritimeOpsPlannerWidgetElement,
  'uv-maritime-ops-monitor-panel': UvMaritimeOpsMonitorPanelElement,
  'uv-maritime-ops-monitor-card': UvMaritimeOpsMonitorCardElement,
  'uv-maritime-ops-monitor-table': UvMaritimeOpsMonitorTableElement,
  'uv-maritime-ops-monitor-form': UvMaritimeOpsMonitorFormElement,
  'uv-maritime-ops-monitor-widget': UvMaritimeOpsMonitorWidgetElement,
  'uv-maritime-ops-explorer-panel': UvMaritimeOpsExplorerPanelElement,
  'uv-maritime-ops-explorer-card': UvMaritimeOpsExplorerCardElement,
  'uv-maritime-ops-explorer-table': UvMaritimeOpsExplorerTableElement,
  'uv-maritime-ops-explorer-form': UvMaritimeOpsExplorerFormElement,
  'uv-maritime-ops-explorer-widget': UvMaritimeOpsExplorerWidgetElement,
  'uv-maritime-ops-manager-panel': UvMaritimeOpsManagerPanelElement,
  'uv-maritime-ops-manager-card': UvMaritimeOpsManagerCardElement,
  'uv-maritime-ops-manager-table': UvMaritimeOpsManagerTableElement,
  'uv-maritime-ops-manager-form': UvMaritimeOpsManagerFormElement,
  'uv-maritime-ops-manager-widget': UvMaritimeOpsManagerWidgetElement,
  'uv-maritime-ops-console-panel': UvMaritimeOpsConsolePanelElement,
  'uv-maritime-ops-console-card': UvMaritimeOpsConsoleCardElement,
  'uv-maritime-ops-console-table': UvMaritimeOpsConsoleTableElement,
  'uv-maritime-ops-console-form': UvMaritimeOpsConsoleFormElement,
  'uv-maritime-ops-console-widget': UvMaritimeOpsConsoleWidgetElement,
  'uv-maritime-ops-insights-panel': UvMaritimeOpsInsightsPanelElement,
  'uv-maritime-ops-insights-card': UvMaritimeOpsInsightsCardElement,
  'uv-maritime-ops-insights-table': UvMaritimeOpsInsightsTableElement,
  'uv-maritime-ops-insights-form': UvMaritimeOpsInsightsFormElement,
  'uv-maritime-ops-insights-widget': UvMaritimeOpsInsightsWidgetElement,
  'uv-maritime-ops-workflow-panel': UvMaritimeOpsWorkflowPanelElement,
  'uv-maritime-ops-workflow-card': UvMaritimeOpsWorkflowCardElement,
  'uv-maritime-ops-workflow-table': UvMaritimeOpsWorkflowTableElement,
  'uv-maritime-ops-workflow-form': UvMaritimeOpsWorkflowFormElement,
  'uv-maritime-ops-workflow-widget': UvMaritimeOpsWorkflowWidgetElement,
  'uv-maritime-ops-automation-panel': UvMaritimeOpsAutomationPanelElement,
  'uv-maritime-ops-automation-card': UvMaritimeOpsAutomationCardElement,
  'uv-maritime-ops-automation-table': UvMaritimeOpsAutomationTableElement,
  'uv-maritime-ops-automation-form': UvMaritimeOpsAutomationFormElement,
  'uv-maritime-ops-automation-widget': UvMaritimeOpsAutomationWidgetElement,
  'uv-warehouse-ops-overview-panel': UvWarehouseOpsOverviewPanelElement,
  'uv-warehouse-ops-overview-card': UvWarehouseOpsOverviewCardElement,
  'uv-warehouse-ops-overview-table': UvWarehouseOpsOverviewTableElement,
  'uv-warehouse-ops-overview-form': UvWarehouseOpsOverviewFormElement,
  'uv-warehouse-ops-overview-widget': UvWarehouseOpsOverviewWidgetElement,
  'uv-warehouse-ops-workspace-panel': UvWarehouseOpsWorkspacePanelElement,
  'uv-warehouse-ops-workspace-card': UvWarehouseOpsWorkspaceCardElement,
  'uv-warehouse-ops-workspace-table': UvWarehouseOpsWorkspaceTableElement,
  'uv-warehouse-ops-workspace-form': UvWarehouseOpsWorkspaceFormElement,
  'uv-warehouse-ops-workspace-widget': UvWarehouseOpsWorkspaceWidgetElement,
  'uv-warehouse-ops-planner-panel': UvWarehouseOpsPlannerPanelElement,
  'uv-warehouse-ops-planner-card': UvWarehouseOpsPlannerCardElement,
  'uv-warehouse-ops-planner-table': UvWarehouseOpsPlannerTableElement,
  'uv-warehouse-ops-planner-form': UvWarehouseOpsPlannerFormElement,
  'uv-warehouse-ops-planner-widget': UvWarehouseOpsPlannerWidgetElement,
  'uv-warehouse-ops-monitor-panel': UvWarehouseOpsMonitorPanelElement,
  'uv-warehouse-ops-monitor-card': UvWarehouseOpsMonitorCardElement,
  'uv-warehouse-ops-monitor-table': UvWarehouseOpsMonitorTableElement,
  'uv-warehouse-ops-monitor-form': UvWarehouseOpsMonitorFormElement,
  'uv-warehouse-ops-monitor-widget': UvWarehouseOpsMonitorWidgetElement,
  'uv-warehouse-ops-explorer-panel': UvWarehouseOpsExplorerPanelElement,
  'uv-warehouse-ops-explorer-card': UvWarehouseOpsExplorerCardElement,
  'uv-warehouse-ops-explorer-table': UvWarehouseOpsExplorerTableElement,
  'uv-warehouse-ops-explorer-form': UvWarehouseOpsExplorerFormElement,
  'uv-warehouse-ops-explorer-widget': UvWarehouseOpsExplorerWidgetElement,
  'uv-warehouse-ops-manager-panel': UvWarehouseOpsManagerPanelElement,
  'uv-warehouse-ops-manager-card': UvWarehouseOpsManagerCardElement,
  'uv-warehouse-ops-manager-table': UvWarehouseOpsManagerTableElement,
  'uv-warehouse-ops-manager-form': UvWarehouseOpsManagerFormElement,
  'uv-warehouse-ops-manager-widget': UvWarehouseOpsManagerWidgetElement,
  'uv-warehouse-ops-console-panel': UvWarehouseOpsConsolePanelElement,
  'uv-warehouse-ops-console-card': UvWarehouseOpsConsoleCardElement,
  'uv-warehouse-ops-console-table': UvWarehouseOpsConsoleTableElement,
  'uv-warehouse-ops-console-form': UvWarehouseOpsConsoleFormElement,
  'uv-warehouse-ops-console-widget': UvWarehouseOpsConsoleWidgetElement,
  'uv-warehouse-ops-insights-panel': UvWarehouseOpsInsightsPanelElement,
  'uv-warehouse-ops-insights-card': UvWarehouseOpsInsightsCardElement,
  'uv-warehouse-ops-insights-table': UvWarehouseOpsInsightsTableElement,
  'uv-warehouse-ops-insights-form': UvWarehouseOpsInsightsFormElement,
  'uv-warehouse-ops-insights-widget': UvWarehouseOpsInsightsWidgetElement,
  'uv-warehouse-ops-workflow-panel': UvWarehouseOpsWorkflowPanelElement,
  'uv-warehouse-ops-workflow-card': UvWarehouseOpsWorkflowCardElement,
  'uv-warehouse-ops-workflow-table': UvWarehouseOpsWorkflowTableElement,
  'uv-warehouse-ops-workflow-form': UvWarehouseOpsWorkflowFormElement,
  'uv-warehouse-ops-workflow-widget': UvWarehouseOpsWorkflowWidgetElement,
  'uv-warehouse-ops-automation-panel': UvWarehouseOpsAutomationPanelElement,
  'uv-warehouse-ops-automation-card': UvWarehouseOpsAutomationCardElement,
  'uv-warehouse-ops-automation-table': UvWarehouseOpsAutomationTableElement,
  'uv-warehouse-ops-automation-form': UvWarehouseOpsAutomationFormElement,
  'uv-warehouse-ops-automation-widget': UvWarehouseOpsAutomationWidgetElement,
  'uv-factory-ops-overview-panel': UvFactoryOpsOverviewPanelElement,
  'uv-factory-ops-overview-card': UvFactoryOpsOverviewCardElement,
  'uv-factory-ops-overview-table': UvFactoryOpsOverviewTableElement,
  'uv-factory-ops-overview-form': UvFactoryOpsOverviewFormElement,
  'uv-factory-ops-overview-widget': UvFactoryOpsOverviewWidgetElement,
  'uv-factory-ops-workspace-panel': UvFactoryOpsWorkspacePanelElement,
  'uv-factory-ops-workspace-card': UvFactoryOpsWorkspaceCardElement,
  'uv-factory-ops-workspace-table': UvFactoryOpsWorkspaceTableElement,
  'uv-factory-ops-workspace-form': UvFactoryOpsWorkspaceFormElement,
  'uv-factory-ops-workspace-widget': UvFactoryOpsWorkspaceWidgetElement,
  'uv-factory-ops-planner-panel': UvFactoryOpsPlannerPanelElement,
  'uv-factory-ops-planner-card': UvFactoryOpsPlannerCardElement,
  'uv-factory-ops-planner-table': UvFactoryOpsPlannerTableElement,
  'uv-factory-ops-planner-form': UvFactoryOpsPlannerFormElement,
  'uv-factory-ops-planner-widget': UvFactoryOpsPlannerWidgetElement,
  'uv-factory-ops-monitor-panel': UvFactoryOpsMonitorPanelElement,
  'uv-factory-ops-monitor-card': UvFactoryOpsMonitorCardElement,
  'uv-factory-ops-monitor-table': UvFactoryOpsMonitorTableElement,
  'uv-factory-ops-monitor-form': UvFactoryOpsMonitorFormElement,
  'uv-factory-ops-monitor-widget': UvFactoryOpsMonitorWidgetElement,
  'uv-factory-ops-explorer-panel': UvFactoryOpsExplorerPanelElement,
  'uv-factory-ops-explorer-card': UvFactoryOpsExplorerCardElement,
  'uv-factory-ops-explorer-table': UvFactoryOpsExplorerTableElement,
  'uv-factory-ops-explorer-form': UvFactoryOpsExplorerFormElement,
  'uv-factory-ops-explorer-widget': UvFactoryOpsExplorerWidgetElement,
  'uv-factory-ops-manager-panel': UvFactoryOpsManagerPanelElement,
  'uv-factory-ops-manager-card': UvFactoryOpsManagerCardElement,
  'uv-factory-ops-manager-table': UvFactoryOpsManagerTableElement,
  'uv-factory-ops-manager-form': UvFactoryOpsManagerFormElement,
  'uv-factory-ops-manager-widget': UvFactoryOpsManagerWidgetElement,
  'uv-factory-ops-console-panel': UvFactoryOpsConsolePanelElement,
  'uv-factory-ops-console-card': UvFactoryOpsConsoleCardElement,
  'uv-factory-ops-console-table': UvFactoryOpsConsoleTableElement,
  'uv-factory-ops-console-form': UvFactoryOpsConsoleFormElement,
  'uv-factory-ops-console-widget': UvFactoryOpsConsoleWidgetElement,
  'uv-factory-ops-insights-panel': UvFactoryOpsInsightsPanelElement,
  'uv-factory-ops-insights-card': UvFactoryOpsInsightsCardElement,
  'uv-factory-ops-insights-table': UvFactoryOpsInsightsTableElement,
  'uv-factory-ops-insights-form': UvFactoryOpsInsightsFormElement,
  'uv-factory-ops-insights-widget': UvFactoryOpsInsightsWidgetElement,
  'uv-factory-ops-workflow-panel': UvFactoryOpsWorkflowPanelElement,
  'uv-factory-ops-workflow-card': UvFactoryOpsWorkflowCardElement,
  'uv-factory-ops-workflow-table': UvFactoryOpsWorkflowTableElement,
  'uv-factory-ops-workflow-form': UvFactoryOpsWorkflowFormElement,
  'uv-factory-ops-workflow-widget': UvFactoryOpsWorkflowWidgetElement,
  'uv-factory-ops-automation-panel': UvFactoryOpsAutomationPanelElement,
  'uv-factory-ops-automation-card': UvFactoryOpsAutomationCardElement,
  'uv-factory-ops-automation-table': UvFactoryOpsAutomationTableElement,
  'uv-factory-ops-automation-form': UvFactoryOpsAutomationFormElement,
  'uv-factory-ops-automation-widget': UvFactoryOpsAutomationWidgetElement,
  'uv-maintenance-ops-overview-panel': UvMaintenanceOpsOverviewPanelElement,
  'uv-maintenance-ops-overview-card': UvMaintenanceOpsOverviewCardElement,
  'uv-maintenance-ops-overview-table': UvMaintenanceOpsOverviewTableElement,
  'uv-maintenance-ops-overview-form': UvMaintenanceOpsOverviewFormElement,
  'uv-maintenance-ops-overview-widget': UvMaintenanceOpsOverviewWidgetElement,
  'uv-maintenance-ops-workspace-panel': UvMaintenanceOpsWorkspacePanelElement,
  'uv-maintenance-ops-workspace-card': UvMaintenanceOpsWorkspaceCardElement,
  'uv-maintenance-ops-workspace-table': UvMaintenanceOpsWorkspaceTableElement,
  'uv-maintenance-ops-workspace-form': UvMaintenanceOpsWorkspaceFormElement,
  'uv-maintenance-ops-workspace-widget': UvMaintenanceOpsWorkspaceWidgetElement,
  'uv-maintenance-ops-planner-panel': UvMaintenanceOpsPlannerPanelElement,
  'uv-maintenance-ops-planner-card': UvMaintenanceOpsPlannerCardElement,
  'uv-maintenance-ops-planner-table': UvMaintenanceOpsPlannerTableElement,
  'uv-maintenance-ops-planner-form': UvMaintenanceOpsPlannerFormElement,
  'uv-maintenance-ops-planner-widget': UvMaintenanceOpsPlannerWidgetElement,
  'uv-maintenance-ops-monitor-panel': UvMaintenanceOpsMonitorPanelElement,
  'uv-maintenance-ops-monitor-card': UvMaintenanceOpsMonitorCardElement,
  'uv-maintenance-ops-monitor-table': UvMaintenanceOpsMonitorTableElement,
  'uv-maintenance-ops-monitor-form': UvMaintenanceOpsMonitorFormElement,
  'uv-maintenance-ops-monitor-widget': UvMaintenanceOpsMonitorWidgetElement,
  'uv-maintenance-ops-explorer-panel': UvMaintenanceOpsExplorerPanelElement,
  'uv-maintenance-ops-explorer-card': UvMaintenanceOpsExplorerCardElement,
  'uv-maintenance-ops-explorer-table': UvMaintenanceOpsExplorerTableElement,
  'uv-maintenance-ops-explorer-form': UvMaintenanceOpsExplorerFormElement,
  'uv-maintenance-ops-explorer-widget': UvMaintenanceOpsExplorerWidgetElement,
  'uv-maintenance-ops-manager-panel': UvMaintenanceOpsManagerPanelElement,
  'uv-maintenance-ops-manager-card': UvMaintenanceOpsManagerCardElement,
  'uv-maintenance-ops-manager-table': UvMaintenanceOpsManagerTableElement,
  'uv-maintenance-ops-manager-form': UvMaintenanceOpsManagerFormElement,
  'uv-maintenance-ops-manager-widget': UvMaintenanceOpsManagerWidgetElement,
  'uv-maintenance-ops-console-panel': UvMaintenanceOpsConsolePanelElement,
  'uv-maintenance-ops-console-card': UvMaintenanceOpsConsoleCardElement,
  'uv-maintenance-ops-console-table': UvMaintenanceOpsConsoleTableElement,
  'uv-maintenance-ops-console-form': UvMaintenanceOpsConsoleFormElement,
  'uv-maintenance-ops-console-widget': UvMaintenanceOpsConsoleWidgetElement,
  'uv-maintenance-ops-insights-panel': UvMaintenanceOpsInsightsPanelElement,
  'uv-maintenance-ops-insights-card': UvMaintenanceOpsInsightsCardElement,
  'uv-maintenance-ops-insights-table': UvMaintenanceOpsInsightsTableElement,
  'uv-maintenance-ops-insights-form': UvMaintenanceOpsInsightsFormElement,
  'uv-maintenance-ops-insights-widget': UvMaintenanceOpsInsightsWidgetElement,
  'uv-maintenance-ops-workflow-panel': UvMaintenanceOpsWorkflowPanelElement,
  'uv-maintenance-ops-workflow-card': UvMaintenanceOpsWorkflowCardElement,
  'uv-maintenance-ops-workflow-table': UvMaintenanceOpsWorkflowTableElement,
  'uv-maintenance-ops-workflow-form': UvMaintenanceOpsWorkflowFormElement,
  'uv-maintenance-ops-workflow-widget': UvMaintenanceOpsWorkflowWidgetElement,
  'uv-maintenance-ops-automation-panel': UvMaintenanceOpsAutomationPanelElement,
  'uv-maintenance-ops-automation-card': UvMaintenanceOpsAutomationCardElement,
  'uv-maintenance-ops-automation-table': UvMaintenanceOpsAutomationTableElement,
  'uv-maintenance-ops-automation-form': UvMaintenanceOpsAutomationFormElement,
  'uv-maintenance-ops-automation-widget': UvMaintenanceOpsAutomationWidgetElement,
  'uv-energy-ops-overview-panel': UvEnergyOpsOverviewPanelElement,
  'uv-energy-ops-overview-card': UvEnergyOpsOverviewCardElement,
  'uv-energy-ops-overview-table': UvEnergyOpsOverviewTableElement,
  'uv-energy-ops-overview-form': UvEnergyOpsOverviewFormElement,
  'uv-energy-ops-overview-widget': UvEnergyOpsOverviewWidgetElement,
  'uv-energy-ops-workspace-panel': UvEnergyOpsWorkspacePanelElement,
  'uv-energy-ops-workspace-card': UvEnergyOpsWorkspaceCardElement,
  'uv-energy-ops-workspace-table': UvEnergyOpsWorkspaceTableElement,
  'uv-energy-ops-workspace-form': UvEnergyOpsWorkspaceFormElement,
  'uv-energy-ops-workspace-widget': UvEnergyOpsWorkspaceWidgetElement,
  'uv-energy-ops-planner-panel': UvEnergyOpsPlannerPanelElement,
  'uv-energy-ops-planner-card': UvEnergyOpsPlannerCardElement,
  'uv-energy-ops-planner-table': UvEnergyOpsPlannerTableElement,
  'uv-energy-ops-planner-form': UvEnergyOpsPlannerFormElement,
  'uv-energy-ops-planner-widget': UvEnergyOpsPlannerWidgetElement,
  'uv-energy-ops-monitor-panel': UvEnergyOpsMonitorPanelElement,
  'uv-energy-ops-monitor-card': UvEnergyOpsMonitorCardElement,
  'uv-energy-ops-monitor-table': UvEnergyOpsMonitorTableElement,
  'uv-energy-ops-monitor-form': UvEnergyOpsMonitorFormElement,
  'uv-energy-ops-monitor-widget': UvEnergyOpsMonitorWidgetElement,
  'uv-energy-ops-explorer-panel': UvEnergyOpsExplorerPanelElement,
  'uv-energy-ops-explorer-card': UvEnergyOpsExplorerCardElement,
  'uv-energy-ops-explorer-table': UvEnergyOpsExplorerTableElement,
  'uv-energy-ops-explorer-form': UvEnergyOpsExplorerFormElement,
  'uv-energy-ops-explorer-widget': UvEnergyOpsExplorerWidgetElement,
  'uv-energy-ops-manager-panel': UvEnergyOpsManagerPanelElement,
  'uv-energy-ops-manager-card': UvEnergyOpsManagerCardElement,
  'uv-energy-ops-manager-table': UvEnergyOpsManagerTableElement,
  'uv-energy-ops-manager-form': UvEnergyOpsManagerFormElement,
  'uv-energy-ops-manager-widget': UvEnergyOpsManagerWidgetElement,
  'uv-energy-ops-console-panel': UvEnergyOpsConsolePanelElement,
  'uv-energy-ops-console-card': UvEnergyOpsConsoleCardElement,
  'uv-energy-ops-console-table': UvEnergyOpsConsoleTableElement,
  'uv-energy-ops-console-form': UvEnergyOpsConsoleFormElement,
  'uv-energy-ops-console-widget': UvEnergyOpsConsoleWidgetElement,
  'uv-energy-ops-insights-panel': UvEnergyOpsInsightsPanelElement,
  'uv-energy-ops-insights-card': UvEnergyOpsInsightsCardElement,
  'uv-energy-ops-insights-table': UvEnergyOpsInsightsTableElement,
  'uv-energy-ops-insights-form': UvEnergyOpsInsightsFormElement,
  'uv-energy-ops-insights-widget': UvEnergyOpsInsightsWidgetElement,
  'uv-energy-ops-workflow-panel': UvEnergyOpsWorkflowPanelElement,
  'uv-energy-ops-workflow-card': UvEnergyOpsWorkflowCardElement,
  'uv-energy-ops-workflow-table': UvEnergyOpsWorkflowTableElement,
  'uv-energy-ops-workflow-form': UvEnergyOpsWorkflowFormElement,
  'uv-energy-ops-workflow-widget': UvEnergyOpsWorkflowWidgetElement,
  'uv-energy-ops-automation-panel': UvEnergyOpsAutomationPanelElement,
  'uv-energy-ops-automation-card': UvEnergyOpsAutomationCardElement,
  'uv-energy-ops-automation-table': UvEnergyOpsAutomationTableElement,
  'uv-energy-ops-automation-form': UvEnergyOpsAutomationFormElement,
  'uv-energy-ops-automation-widget': UvEnergyOpsAutomationWidgetElement,
  'uv-utilities-ops-overview-panel': UvUtilitiesOpsOverviewPanelElement,
  'uv-utilities-ops-overview-card': UvUtilitiesOpsOverviewCardElement,
  'uv-utilities-ops-overview-table': UvUtilitiesOpsOverviewTableElement,
  'uv-utilities-ops-overview-form': UvUtilitiesOpsOverviewFormElement,
  'uv-utilities-ops-overview-widget': UvUtilitiesOpsOverviewWidgetElement,
  'uv-utilities-ops-workspace-panel': UvUtilitiesOpsWorkspacePanelElement,
  'uv-utilities-ops-workspace-card': UvUtilitiesOpsWorkspaceCardElement,
  'uv-utilities-ops-workspace-table': UvUtilitiesOpsWorkspaceTableElement,
  'uv-utilities-ops-workspace-form': UvUtilitiesOpsWorkspaceFormElement,
  'uv-utilities-ops-workspace-widget': UvUtilitiesOpsWorkspaceWidgetElement,
  'uv-utilities-ops-planner-panel': UvUtilitiesOpsPlannerPanelElement,
  'uv-utilities-ops-planner-card': UvUtilitiesOpsPlannerCardElement,
  'uv-utilities-ops-planner-table': UvUtilitiesOpsPlannerTableElement,
  'uv-utilities-ops-planner-form': UvUtilitiesOpsPlannerFormElement,
  'uv-utilities-ops-planner-widget': UvUtilitiesOpsPlannerWidgetElement,
  'uv-utilities-ops-monitor-panel': UvUtilitiesOpsMonitorPanelElement,
  'uv-utilities-ops-monitor-card': UvUtilitiesOpsMonitorCardElement,
  'uv-utilities-ops-monitor-table': UvUtilitiesOpsMonitorTableElement,
  'uv-utilities-ops-monitor-form': UvUtilitiesOpsMonitorFormElement,
  'uv-utilities-ops-monitor-widget': UvUtilitiesOpsMonitorWidgetElement,
  'uv-utilities-ops-explorer-panel': UvUtilitiesOpsExplorerPanelElement,
  'uv-utilities-ops-explorer-card': UvUtilitiesOpsExplorerCardElement,
  'uv-utilities-ops-explorer-table': UvUtilitiesOpsExplorerTableElement,
  'uv-utilities-ops-explorer-form': UvUtilitiesOpsExplorerFormElement,
  'uv-utilities-ops-explorer-widget': UvUtilitiesOpsExplorerWidgetElement,
  'uv-utilities-ops-manager-panel': UvUtilitiesOpsManagerPanelElement,
  'uv-utilities-ops-manager-card': UvUtilitiesOpsManagerCardElement,
  'uv-utilities-ops-manager-table': UvUtilitiesOpsManagerTableElement,
  'uv-utilities-ops-manager-form': UvUtilitiesOpsManagerFormElement,
  'uv-utilities-ops-manager-widget': UvUtilitiesOpsManagerWidgetElement,
  'uv-utilities-ops-console-panel': UvUtilitiesOpsConsolePanelElement,
  'uv-utilities-ops-console-card': UvUtilitiesOpsConsoleCardElement,
  'uv-utilities-ops-console-table': UvUtilitiesOpsConsoleTableElement,
  'uv-utilities-ops-console-form': UvUtilitiesOpsConsoleFormElement,
  'uv-utilities-ops-console-widget': UvUtilitiesOpsConsoleWidgetElement,
  'uv-utilities-ops-insights-panel': UvUtilitiesOpsInsightsPanelElement,
  'uv-utilities-ops-insights-card': UvUtilitiesOpsInsightsCardElement,
  'uv-utilities-ops-insights-table': UvUtilitiesOpsInsightsTableElement,
  'uv-utilities-ops-insights-form': UvUtilitiesOpsInsightsFormElement,
  'uv-utilities-ops-insights-widget': UvUtilitiesOpsInsightsWidgetElement,
  'uv-utilities-ops-workflow-panel': UvUtilitiesOpsWorkflowPanelElement,
  'uv-utilities-ops-workflow-card': UvUtilitiesOpsWorkflowCardElement,
  'uv-utilities-ops-workflow-table': UvUtilitiesOpsWorkflowTableElement,
  'uv-utilities-ops-workflow-form': UvUtilitiesOpsWorkflowFormElement,
  'uv-utilities-ops-workflow-widget': UvUtilitiesOpsWorkflowWidgetElement,
  'uv-utilities-ops-automation-panel': UvUtilitiesOpsAutomationPanelElement,
  'uv-utilities-ops-automation-card': UvUtilitiesOpsAutomationCardElement,
  'uv-utilities-ops-automation-table': UvUtilitiesOpsAutomationTableElement,
  'uv-utilities-ops-automation-form': UvUtilitiesOpsAutomationFormElement,
  'uv-utilities-ops-automation-widget': UvUtilitiesOpsAutomationWidgetElement,
  'uv-construction-ops-overview-panel': UvConstructionOpsOverviewPanelElement,
  'uv-construction-ops-overview-card': UvConstructionOpsOverviewCardElement,
  'uv-construction-ops-overview-table': UvConstructionOpsOverviewTableElement,
  'uv-construction-ops-overview-form': UvConstructionOpsOverviewFormElement,
  'uv-construction-ops-overview-widget': UvConstructionOpsOverviewWidgetElement,
  'uv-construction-ops-workspace-panel': UvConstructionOpsWorkspacePanelElement,
  'uv-construction-ops-workspace-card': UvConstructionOpsWorkspaceCardElement,
  'uv-construction-ops-workspace-table': UvConstructionOpsWorkspaceTableElement,
  'uv-construction-ops-workspace-form': UvConstructionOpsWorkspaceFormElement,
  'uv-construction-ops-workspace-widget': UvConstructionOpsWorkspaceWidgetElement,
  'uv-construction-ops-planner-panel': UvConstructionOpsPlannerPanelElement,
  'uv-construction-ops-planner-card': UvConstructionOpsPlannerCardElement,
  'uv-construction-ops-planner-table': UvConstructionOpsPlannerTableElement,
  'uv-construction-ops-planner-form': UvConstructionOpsPlannerFormElement,
  'uv-construction-ops-planner-widget': UvConstructionOpsPlannerWidgetElement,
  'uv-construction-ops-monitor-panel': UvConstructionOpsMonitorPanelElement,
  'uv-construction-ops-monitor-card': UvConstructionOpsMonitorCardElement,
  'uv-construction-ops-monitor-table': UvConstructionOpsMonitorTableElement,
  'uv-construction-ops-monitor-form': UvConstructionOpsMonitorFormElement,
  'uv-construction-ops-monitor-widget': UvConstructionOpsMonitorWidgetElement,
  'uv-construction-ops-explorer-panel': UvConstructionOpsExplorerPanelElement,
  'uv-construction-ops-explorer-card': UvConstructionOpsExplorerCardElement,
  'uv-construction-ops-explorer-table': UvConstructionOpsExplorerTableElement,
  'uv-construction-ops-explorer-form': UvConstructionOpsExplorerFormElement,
  'uv-construction-ops-explorer-widget': UvConstructionOpsExplorerWidgetElement,
  'uv-construction-ops-manager-panel': UvConstructionOpsManagerPanelElement,
  'uv-construction-ops-manager-card': UvConstructionOpsManagerCardElement,
  'uv-construction-ops-manager-table': UvConstructionOpsManagerTableElement,
  'uv-construction-ops-manager-form': UvConstructionOpsManagerFormElement,
  'uv-construction-ops-manager-widget': UvConstructionOpsManagerWidgetElement,
  'uv-construction-ops-console-panel': UvConstructionOpsConsolePanelElement,
  'uv-construction-ops-console-card': UvConstructionOpsConsoleCardElement,
  'uv-construction-ops-console-table': UvConstructionOpsConsoleTableElement,
  'uv-construction-ops-console-form': UvConstructionOpsConsoleFormElement,
  'uv-construction-ops-console-widget': UvConstructionOpsConsoleWidgetElement,
  'uv-construction-ops-insights-panel': UvConstructionOpsInsightsPanelElement,
  'uv-construction-ops-insights-card': UvConstructionOpsInsightsCardElement,
  'uv-construction-ops-insights-table': UvConstructionOpsInsightsTableElement,
  'uv-construction-ops-insights-form': UvConstructionOpsInsightsFormElement,
  'uv-construction-ops-insights-widget': UvConstructionOpsInsightsWidgetElement,
  'uv-construction-ops-workflow-panel': UvConstructionOpsWorkflowPanelElement,
  'uv-construction-ops-workflow-card': UvConstructionOpsWorkflowCardElement,
  'uv-construction-ops-workflow-table': UvConstructionOpsWorkflowTableElement,
  'uv-construction-ops-workflow-form': UvConstructionOpsWorkflowFormElement,
  'uv-construction-ops-workflow-widget': UvConstructionOpsWorkflowWidgetElement,
  'uv-construction-ops-automation-panel': UvConstructionOpsAutomationPanelElement,
  'uv-construction-ops-automation-card': UvConstructionOpsAutomationCardElement,
  'uv-construction-ops-automation-table': UvConstructionOpsAutomationTableElement,
  'uv-construction-ops-automation-form': UvConstructionOpsAutomationFormElement,
  'uv-construction-ops-automation-widget': UvConstructionOpsAutomationWidgetElement,
  'uv-property-ops-overview-panel': UvPropertyOpsOverviewPanelElement,
  'uv-property-ops-overview-card': UvPropertyOpsOverviewCardElement,
  'uv-property-ops-overview-table': UvPropertyOpsOverviewTableElement,
  'uv-property-ops-overview-form': UvPropertyOpsOverviewFormElement,
  'uv-property-ops-overview-widget': UvPropertyOpsOverviewWidgetElement,
  'uv-property-ops-workspace-panel': UvPropertyOpsWorkspacePanelElement,
  'uv-property-ops-workspace-card': UvPropertyOpsWorkspaceCardElement,
  'uv-property-ops-workspace-table': UvPropertyOpsWorkspaceTableElement,
  'uv-property-ops-workspace-form': UvPropertyOpsWorkspaceFormElement,
  'uv-property-ops-workspace-widget': UvPropertyOpsWorkspaceWidgetElement,
  'uv-property-ops-planner-panel': UvPropertyOpsPlannerPanelElement,
  'uv-property-ops-planner-card': UvPropertyOpsPlannerCardElement,
  'uv-property-ops-planner-table': UvPropertyOpsPlannerTableElement,
  'uv-property-ops-planner-form': UvPropertyOpsPlannerFormElement,
  'uv-property-ops-planner-widget': UvPropertyOpsPlannerWidgetElement,
  'uv-property-ops-monitor-panel': UvPropertyOpsMonitorPanelElement,
  'uv-property-ops-monitor-card': UvPropertyOpsMonitorCardElement,
  'uv-property-ops-monitor-table': UvPropertyOpsMonitorTableElement,
  'uv-property-ops-monitor-form': UvPropertyOpsMonitorFormElement,
  'uv-property-ops-monitor-widget': UvPropertyOpsMonitorWidgetElement,
  'uv-property-ops-explorer-panel': UvPropertyOpsExplorerPanelElement,
  'uv-property-ops-explorer-card': UvPropertyOpsExplorerCardElement,
  'uv-property-ops-explorer-table': UvPropertyOpsExplorerTableElement,
  'uv-property-ops-explorer-form': UvPropertyOpsExplorerFormElement,
  'uv-property-ops-explorer-widget': UvPropertyOpsExplorerWidgetElement,
  'uv-property-ops-manager-panel': UvPropertyOpsManagerPanelElement,
  'uv-property-ops-manager-card': UvPropertyOpsManagerCardElement,
  'uv-property-ops-manager-table': UvPropertyOpsManagerTableElement,
  'uv-property-ops-manager-form': UvPropertyOpsManagerFormElement,
  'uv-property-ops-manager-widget': UvPropertyOpsManagerWidgetElement,
  'uv-property-ops-console-panel': UvPropertyOpsConsolePanelElement,
  'uv-property-ops-console-card': UvPropertyOpsConsoleCardElement,
  'uv-property-ops-console-table': UvPropertyOpsConsoleTableElement,
  'uv-property-ops-console-form': UvPropertyOpsConsoleFormElement,
  'uv-property-ops-console-widget': UvPropertyOpsConsoleWidgetElement,
  'uv-property-ops-insights-panel': UvPropertyOpsInsightsPanelElement,
  'uv-property-ops-insights-card': UvPropertyOpsInsightsCardElement,
  'uv-property-ops-insights-table': UvPropertyOpsInsightsTableElement,
  'uv-property-ops-insights-form': UvPropertyOpsInsightsFormElement,
  'uv-property-ops-insights-widget': UvPropertyOpsInsightsWidgetElement,
  'uv-property-ops-workflow-panel': UvPropertyOpsWorkflowPanelElement,
  'uv-property-ops-workflow-card': UvPropertyOpsWorkflowCardElement,
  'uv-property-ops-workflow-table': UvPropertyOpsWorkflowTableElement,
  'uv-property-ops-workflow-form': UvPropertyOpsWorkflowFormElement,
  'uv-property-ops-workflow-widget': UvPropertyOpsWorkflowWidgetElement,
  'uv-property-ops-automation-panel': UvPropertyOpsAutomationPanelElement,
  'uv-property-ops-automation-card': UvPropertyOpsAutomationCardElement,
  'uv-property-ops-automation-table': UvPropertyOpsAutomationTableElement,
  'uv-property-ops-automation-form': UvPropertyOpsAutomationFormElement,
  'uv-property-ops-automation-widget': UvPropertyOpsAutomationWidgetElement,
  'uv-hospitality-ops-overview-panel': UvHospitalityOpsOverviewPanelElement,
  'uv-hospitality-ops-overview-card': UvHospitalityOpsOverviewCardElement,
  'uv-hospitality-ops-overview-table': UvHospitalityOpsOverviewTableElement,
  'uv-hospitality-ops-overview-form': UvHospitalityOpsOverviewFormElement,
  'uv-hospitality-ops-overview-widget': UvHospitalityOpsOverviewWidgetElement,
  'uv-hospitality-ops-workspace-panel': UvHospitalityOpsWorkspacePanelElement,
  'uv-hospitality-ops-workspace-card': UvHospitalityOpsWorkspaceCardElement,
  'uv-hospitality-ops-workspace-table': UvHospitalityOpsWorkspaceTableElement,
  'uv-hospitality-ops-workspace-form': UvHospitalityOpsWorkspaceFormElement,
  'uv-hospitality-ops-workspace-widget': UvHospitalityOpsWorkspaceWidgetElement,
  'uv-hospitality-ops-planner-panel': UvHospitalityOpsPlannerPanelElement,
  'uv-hospitality-ops-planner-card': UvHospitalityOpsPlannerCardElement,
  'uv-hospitality-ops-planner-table': UvHospitalityOpsPlannerTableElement,
  'uv-hospitality-ops-planner-form': UvHospitalityOpsPlannerFormElement,
  'uv-hospitality-ops-planner-widget': UvHospitalityOpsPlannerWidgetElement,
  'uv-hospitality-ops-monitor-panel': UvHospitalityOpsMonitorPanelElement,
  'uv-hospitality-ops-monitor-card': UvHospitalityOpsMonitorCardElement,
  'uv-hospitality-ops-monitor-table': UvHospitalityOpsMonitorTableElement,
  'uv-hospitality-ops-monitor-form': UvHospitalityOpsMonitorFormElement,
  'uv-hospitality-ops-monitor-widget': UvHospitalityOpsMonitorWidgetElement,
  'uv-hospitality-ops-explorer-panel': UvHospitalityOpsExplorerPanelElement,
  'uv-hospitality-ops-explorer-card': UvHospitalityOpsExplorerCardElement,
  'uv-hospitality-ops-explorer-table': UvHospitalityOpsExplorerTableElement,
  'uv-hospitality-ops-explorer-form': UvHospitalityOpsExplorerFormElement,
  'uv-hospitality-ops-explorer-widget': UvHospitalityOpsExplorerWidgetElement,
  'uv-hospitality-ops-manager-panel': UvHospitalityOpsManagerPanelElement,
  'uv-hospitality-ops-manager-card': UvHospitalityOpsManagerCardElement,
  'uv-hospitality-ops-manager-table': UvHospitalityOpsManagerTableElement,
  'uv-hospitality-ops-manager-form': UvHospitalityOpsManagerFormElement,
  'uv-hospitality-ops-manager-widget': UvHospitalityOpsManagerWidgetElement,
  'uv-hospitality-ops-console-panel': UvHospitalityOpsConsolePanelElement,
  'uv-hospitality-ops-console-card': UvHospitalityOpsConsoleCardElement,
  'uv-hospitality-ops-console-table': UvHospitalityOpsConsoleTableElement,
  'uv-hospitality-ops-console-form': UvHospitalityOpsConsoleFormElement,
  'uv-hospitality-ops-console-widget': UvHospitalityOpsConsoleWidgetElement,
  'uv-hospitality-ops-insights-panel': UvHospitalityOpsInsightsPanelElement,
  'uv-hospitality-ops-insights-card': UvHospitalityOpsInsightsCardElement,
  'uv-hospitality-ops-insights-table': UvHospitalityOpsInsightsTableElement,
  'uv-hospitality-ops-insights-form': UvHospitalityOpsInsightsFormElement,
  'uv-hospitality-ops-insights-widget': UvHospitalityOpsInsightsWidgetElement,
  'uv-hospitality-ops-workflow-panel': UvHospitalityOpsWorkflowPanelElement,
  'uv-hospitality-ops-workflow-card': UvHospitalityOpsWorkflowCardElement,
  'uv-hospitality-ops-workflow-table': UvHospitalityOpsWorkflowTableElement,
  'uv-hospitality-ops-workflow-form': UvHospitalityOpsWorkflowFormElement,
  'uv-hospitality-ops-workflow-widget': UvHospitalityOpsWorkflowWidgetElement,
  'uv-hospitality-ops-automation-panel': UvHospitalityOpsAutomationPanelElement,
  'uv-hospitality-ops-automation-card': UvHospitalityOpsAutomationCardElement,
  'uv-hospitality-ops-automation-table': UvHospitalityOpsAutomationTableElement,
  'uv-hospitality-ops-automation-form': UvHospitalityOpsAutomationFormElement,
  'uv-hospitality-ops-automation-widget': UvHospitalityOpsAutomationWidgetElement,
  'uv-travel-ops-overview-panel': UvTravelOpsOverviewPanelElement,
  'uv-travel-ops-overview-card': UvTravelOpsOverviewCardElement,
  'uv-travel-ops-overview-table': UvTravelOpsOverviewTableElement,
  'uv-travel-ops-overview-form': UvTravelOpsOverviewFormElement,
  'uv-travel-ops-overview-widget': UvTravelOpsOverviewWidgetElement,
  'uv-travel-ops-workspace-panel': UvTravelOpsWorkspacePanelElement,
  'uv-travel-ops-workspace-card': UvTravelOpsWorkspaceCardElement,
  'uv-travel-ops-workspace-table': UvTravelOpsWorkspaceTableElement,
  'uv-travel-ops-workspace-form': UvTravelOpsWorkspaceFormElement,
  'uv-travel-ops-workspace-widget': UvTravelOpsWorkspaceWidgetElement,
  'uv-travel-ops-planner-panel': UvTravelOpsPlannerPanelElement,
  'uv-travel-ops-planner-card': UvTravelOpsPlannerCardElement,
  'uv-travel-ops-planner-table': UvTravelOpsPlannerTableElement,
  'uv-travel-ops-planner-form': UvTravelOpsPlannerFormElement,
  'uv-travel-ops-planner-widget': UvTravelOpsPlannerWidgetElement,
  'uv-travel-ops-monitor-panel': UvTravelOpsMonitorPanelElement,
  'uv-travel-ops-monitor-card': UvTravelOpsMonitorCardElement,
  'uv-travel-ops-monitor-table': UvTravelOpsMonitorTableElement,
  'uv-travel-ops-monitor-form': UvTravelOpsMonitorFormElement,
  'uv-travel-ops-monitor-widget': UvTravelOpsMonitorWidgetElement,
  'uv-travel-ops-explorer-panel': UvTravelOpsExplorerPanelElement,
  'uv-travel-ops-explorer-card': UvTravelOpsExplorerCardElement,
  'uv-travel-ops-explorer-table': UvTravelOpsExplorerTableElement,
  'uv-travel-ops-explorer-form': UvTravelOpsExplorerFormElement,
  'uv-travel-ops-explorer-widget': UvTravelOpsExplorerWidgetElement,
  'uv-travel-ops-manager-panel': UvTravelOpsManagerPanelElement,
  'uv-travel-ops-manager-card': UvTravelOpsManagerCardElement,
  'uv-travel-ops-manager-table': UvTravelOpsManagerTableElement,
  'uv-travel-ops-manager-form': UvTravelOpsManagerFormElement,
  'uv-travel-ops-manager-widget': UvTravelOpsManagerWidgetElement,
  'uv-travel-ops-console-panel': UvTravelOpsConsolePanelElement,
  'uv-travel-ops-console-card': UvTravelOpsConsoleCardElement,
  'uv-travel-ops-console-table': UvTravelOpsConsoleTableElement,
  'uv-travel-ops-console-form': UvTravelOpsConsoleFormElement,
  'uv-travel-ops-console-widget': UvTravelOpsConsoleWidgetElement,
  'uv-travel-ops-insights-panel': UvTravelOpsInsightsPanelElement,
  'uv-travel-ops-insights-card': UvTravelOpsInsightsCardElement,
  'uv-travel-ops-insights-table': UvTravelOpsInsightsTableElement,
  'uv-travel-ops-insights-form': UvTravelOpsInsightsFormElement,
  'uv-travel-ops-insights-widget': UvTravelOpsInsightsWidgetElement,
  'uv-travel-ops-workflow-panel': UvTravelOpsWorkflowPanelElement,
  'uv-travel-ops-workflow-card': UvTravelOpsWorkflowCardElement,
  'uv-travel-ops-workflow-table': UvTravelOpsWorkflowTableElement,
  'uv-travel-ops-workflow-form': UvTravelOpsWorkflowFormElement,
  'uv-travel-ops-workflow-widget': UvTravelOpsWorkflowWidgetElement,
  'uv-travel-ops-automation-panel': UvTravelOpsAutomationPanelElement,
  'uv-travel-ops-automation-card': UvTravelOpsAutomationCardElement,
  'uv-travel-ops-automation-table': UvTravelOpsAutomationTableElement,
  'uv-travel-ops-automation-form': UvTravelOpsAutomationFormElement,
  'uv-travel-ops-automation-widget': UvTravelOpsAutomationWidgetElement,
  'uv-event-ops-overview-panel': UvEventOpsOverviewPanelElement,
  'uv-event-ops-overview-card': UvEventOpsOverviewCardElement,
  'uv-event-ops-overview-table': UvEventOpsOverviewTableElement,
  'uv-event-ops-overview-form': UvEventOpsOverviewFormElement,
  'uv-event-ops-overview-widget': UvEventOpsOverviewWidgetElement,
  'uv-event-ops-workspace-panel': UvEventOpsWorkspacePanelElement,
  'uv-event-ops-workspace-card': UvEventOpsWorkspaceCardElement,
  'uv-event-ops-workspace-table': UvEventOpsWorkspaceTableElement,
  'uv-event-ops-workspace-form': UvEventOpsWorkspaceFormElement,
  'uv-event-ops-workspace-widget': UvEventOpsWorkspaceWidgetElement,
  'uv-event-ops-planner-panel': UvEventOpsPlannerPanelElement,
  'uv-event-ops-planner-card': UvEventOpsPlannerCardElement,
  'uv-event-ops-planner-table': UvEventOpsPlannerTableElement,
  'uv-event-ops-planner-form': UvEventOpsPlannerFormElement,
  'uv-event-ops-planner-widget': UvEventOpsPlannerWidgetElement,
  'uv-event-ops-monitor-panel': UvEventOpsMonitorPanelElement,
  'uv-event-ops-monitor-card': UvEventOpsMonitorCardElement,
  'uv-event-ops-monitor-table': UvEventOpsMonitorTableElement,
  'uv-event-ops-monitor-form': UvEventOpsMonitorFormElement,
  'uv-event-ops-monitor-widget': UvEventOpsMonitorWidgetElement,
  'uv-event-ops-explorer-panel': UvEventOpsExplorerPanelElement,
  'uv-event-ops-explorer-card': UvEventOpsExplorerCardElement,
  'uv-event-ops-explorer-table': UvEventOpsExplorerTableElement,
  'uv-event-ops-explorer-form': UvEventOpsExplorerFormElement,
  'uv-event-ops-explorer-widget': UvEventOpsExplorerWidgetElement,
  'uv-event-ops-manager-panel': UvEventOpsManagerPanelElement,
  'uv-event-ops-manager-card': UvEventOpsManagerCardElement,
  'uv-event-ops-manager-table': UvEventOpsManagerTableElement,
  'uv-event-ops-manager-form': UvEventOpsManagerFormElement,
  'uv-event-ops-manager-widget': UvEventOpsManagerWidgetElement,
  'uv-event-ops-console-panel': UvEventOpsConsolePanelElement,
  'uv-event-ops-console-card': UvEventOpsConsoleCardElement,
  'uv-event-ops-console-table': UvEventOpsConsoleTableElement,
  'uv-event-ops-console-form': UvEventOpsConsoleFormElement,
  'uv-event-ops-console-widget': UvEventOpsConsoleWidgetElement,
  'uv-event-ops-insights-panel': UvEventOpsInsightsPanelElement,
  'uv-event-ops-insights-card': UvEventOpsInsightsCardElement,
  'uv-event-ops-insights-table': UvEventOpsInsightsTableElement,
  'uv-event-ops-insights-form': UvEventOpsInsightsFormElement,
  'uv-event-ops-insights-widget': UvEventOpsInsightsWidgetElement,
  'uv-event-ops-workflow-panel': UvEventOpsWorkflowPanelElement,
  'uv-event-ops-workflow-card': UvEventOpsWorkflowCardElement,
  'uv-event-ops-workflow-table': UvEventOpsWorkflowTableElement,
  'uv-event-ops-workflow-form': UvEventOpsWorkflowFormElement,
  'uv-event-ops-workflow-widget': UvEventOpsWorkflowWidgetElement,
  'uv-event-ops-automation-panel': UvEventOpsAutomationPanelElement,
  'uv-event-ops-automation-card': UvEventOpsAutomationCardElement,
  'uv-event-ops-automation-table': UvEventOpsAutomationTableElement,
  'uv-event-ops-automation-form': UvEventOpsAutomationFormElement,
  'uv-event-ops-automation-widget': UvEventOpsAutomationWidgetElement,
  'uv-media-ops-overview-panel': UvMediaOpsOverviewPanelElement,
  'uv-media-ops-overview-card': UvMediaOpsOverviewCardElement,
  'uv-media-ops-overview-table': UvMediaOpsOverviewTableElement,
  'uv-media-ops-overview-form': UvMediaOpsOverviewFormElement,
  'uv-media-ops-overview-widget': UvMediaOpsOverviewWidgetElement,
  'uv-media-ops-workspace-panel': UvMediaOpsWorkspacePanelElement,
  'uv-media-ops-workspace-card': UvMediaOpsWorkspaceCardElement,
  'uv-media-ops-workspace-table': UvMediaOpsWorkspaceTableElement,
  'uv-media-ops-workspace-form': UvMediaOpsWorkspaceFormElement,
  'uv-media-ops-workspace-widget': UvMediaOpsWorkspaceWidgetElement,
  'uv-media-ops-planner-panel': UvMediaOpsPlannerPanelElement,
  'uv-media-ops-planner-card': UvMediaOpsPlannerCardElement,
  'uv-media-ops-planner-table': UvMediaOpsPlannerTableElement,
  'uv-media-ops-planner-form': UvMediaOpsPlannerFormElement,
  'uv-media-ops-planner-widget': UvMediaOpsPlannerWidgetElement,
  'uv-media-ops-monitor-panel': UvMediaOpsMonitorPanelElement,
  'uv-media-ops-monitor-card': UvMediaOpsMonitorCardElement,
  'uv-media-ops-monitor-table': UvMediaOpsMonitorTableElement,
  'uv-media-ops-monitor-form': UvMediaOpsMonitorFormElement,
  'uv-media-ops-monitor-widget': UvMediaOpsMonitorWidgetElement,
  'uv-media-ops-explorer-panel': UvMediaOpsExplorerPanelElement,
  'uv-media-ops-explorer-card': UvMediaOpsExplorerCardElement,
  'uv-media-ops-explorer-table': UvMediaOpsExplorerTableElement,
  'uv-media-ops-explorer-form': UvMediaOpsExplorerFormElement,
  'uv-media-ops-explorer-widget': UvMediaOpsExplorerWidgetElement,
  'uv-media-ops-manager-panel': UvMediaOpsManagerPanelElement,
  'uv-media-ops-manager-card': UvMediaOpsManagerCardElement,
  'uv-media-ops-manager-table': UvMediaOpsManagerTableElement,
  'uv-media-ops-manager-form': UvMediaOpsManagerFormElement,
  'uv-media-ops-manager-widget': UvMediaOpsManagerWidgetElement,
  'uv-media-ops-console-panel': UvMediaOpsConsolePanelElement,
  'uv-media-ops-console-card': UvMediaOpsConsoleCardElement,
  'uv-media-ops-console-table': UvMediaOpsConsoleTableElement,
  'uv-media-ops-console-form': UvMediaOpsConsoleFormElement,
  'uv-media-ops-console-widget': UvMediaOpsConsoleWidgetElement,
  'uv-media-ops-insights-panel': UvMediaOpsInsightsPanelElement,
  'uv-media-ops-insights-card': UvMediaOpsInsightsCardElement,
  'uv-media-ops-insights-table': UvMediaOpsInsightsTableElement,
  'uv-media-ops-insights-form': UvMediaOpsInsightsFormElement,
  'uv-media-ops-insights-widget': UvMediaOpsInsightsWidgetElement,
  'uv-media-ops-workflow-panel': UvMediaOpsWorkflowPanelElement,
  'uv-media-ops-workflow-card': UvMediaOpsWorkflowCardElement,
  'uv-media-ops-workflow-table': UvMediaOpsWorkflowTableElement,
  'uv-media-ops-workflow-form': UvMediaOpsWorkflowFormElement,
  'uv-media-ops-workflow-widget': UvMediaOpsWorkflowWidgetElement,
  'uv-media-ops-automation-panel': UvMediaOpsAutomationPanelElement,
  'uv-media-ops-automation-card': UvMediaOpsAutomationCardElement,
  'uv-media-ops-automation-table': UvMediaOpsAutomationTableElement,
  'uv-media-ops-automation-form': UvMediaOpsAutomationFormElement,
  'uv-media-ops-automation-widget': UvMediaOpsAutomationWidgetElement,
  'uv-publishing-ops-overview-panel': UvPublishingOpsOverviewPanelElement,
  'uv-publishing-ops-overview-card': UvPublishingOpsOverviewCardElement,
  'uv-publishing-ops-overview-table': UvPublishingOpsOverviewTableElement,
  'uv-publishing-ops-overview-form': UvPublishingOpsOverviewFormElement,
  'uv-publishing-ops-overview-widget': UvPublishingOpsOverviewWidgetElement,
  'uv-publishing-ops-workspace-panel': UvPublishingOpsWorkspacePanelElement,
  'uv-publishing-ops-workspace-card': UvPublishingOpsWorkspaceCardElement,
  'uv-publishing-ops-workspace-table': UvPublishingOpsWorkspaceTableElement,
  'uv-publishing-ops-workspace-form': UvPublishingOpsWorkspaceFormElement,
  'uv-publishing-ops-workspace-widget': UvPublishingOpsWorkspaceWidgetElement,
  'uv-publishing-ops-planner-panel': UvPublishingOpsPlannerPanelElement,
  'uv-publishing-ops-planner-card': UvPublishingOpsPlannerCardElement,
  'uv-publishing-ops-planner-table': UvPublishingOpsPlannerTableElement,
  'uv-publishing-ops-planner-form': UvPublishingOpsPlannerFormElement,
  'uv-publishing-ops-planner-widget': UvPublishingOpsPlannerWidgetElement,
  'uv-publishing-ops-monitor-panel': UvPublishingOpsMonitorPanelElement,
  'uv-publishing-ops-monitor-card': UvPublishingOpsMonitorCardElement,
  'uv-publishing-ops-monitor-table': UvPublishingOpsMonitorTableElement,
  'uv-publishing-ops-monitor-form': UvPublishingOpsMonitorFormElement,
  'uv-publishing-ops-monitor-widget': UvPublishingOpsMonitorWidgetElement,
  'uv-publishing-ops-explorer-panel': UvPublishingOpsExplorerPanelElement,
  'uv-publishing-ops-explorer-card': UvPublishingOpsExplorerCardElement,
  'uv-publishing-ops-explorer-table': UvPublishingOpsExplorerTableElement,
  'uv-publishing-ops-explorer-form': UvPublishingOpsExplorerFormElement,
  'uv-publishing-ops-explorer-widget': UvPublishingOpsExplorerWidgetElement,
  'uv-publishing-ops-manager-panel': UvPublishingOpsManagerPanelElement,
  'uv-publishing-ops-manager-card': UvPublishingOpsManagerCardElement,
  'uv-publishing-ops-manager-table': UvPublishingOpsManagerTableElement,
  'uv-publishing-ops-manager-form': UvPublishingOpsManagerFormElement,
  'uv-publishing-ops-manager-widget': UvPublishingOpsManagerWidgetElement,
  'uv-publishing-ops-console-panel': UvPublishingOpsConsolePanelElement,
  'uv-publishing-ops-console-card': UvPublishingOpsConsoleCardElement,
  'uv-publishing-ops-console-table': UvPublishingOpsConsoleTableElement,
  'uv-publishing-ops-console-form': UvPublishingOpsConsoleFormElement,
  'uv-publishing-ops-console-widget': UvPublishingOpsConsoleWidgetElement,
  'uv-publishing-ops-insights-panel': UvPublishingOpsInsightsPanelElement,
  'uv-publishing-ops-insights-card': UvPublishingOpsInsightsCardElement,
  'uv-publishing-ops-insights-table': UvPublishingOpsInsightsTableElement,
  'uv-publishing-ops-insights-form': UvPublishingOpsInsightsFormElement,
  'uv-publishing-ops-insights-widget': UvPublishingOpsInsightsWidgetElement,
  'uv-publishing-ops-workflow-panel': UvPublishingOpsWorkflowPanelElement,
  'uv-publishing-ops-workflow-card': UvPublishingOpsWorkflowCardElement,
  'uv-publishing-ops-workflow-table': UvPublishingOpsWorkflowTableElement,
  'uv-publishing-ops-workflow-form': UvPublishingOpsWorkflowFormElement,
  'uv-publishing-ops-workflow-widget': UvPublishingOpsWorkflowWidgetElement,
  'uv-publishing-ops-automation-panel': UvPublishingOpsAutomationPanelElement,
  'uv-publishing-ops-automation-card': UvPublishingOpsAutomationCardElement,
  'uv-publishing-ops-automation-table': UvPublishingOpsAutomationTableElement,
  'uv-publishing-ops-automation-form': UvPublishingOpsAutomationFormElement,
  'uv-publishing-ops-automation-widget': UvPublishingOpsAutomationWidgetElement,
  'uv-gaming-ops-overview-panel': UvGamingOpsOverviewPanelElement,
  'uv-gaming-ops-overview-card': UvGamingOpsOverviewCardElement,
  'uv-gaming-ops-overview-table': UvGamingOpsOverviewTableElement,
  'uv-gaming-ops-overview-form': UvGamingOpsOverviewFormElement,
  'uv-gaming-ops-overview-widget': UvGamingOpsOverviewWidgetElement,
  'uv-gaming-ops-workspace-panel': UvGamingOpsWorkspacePanelElement,
  'uv-gaming-ops-workspace-card': UvGamingOpsWorkspaceCardElement,
  'uv-gaming-ops-workspace-table': UvGamingOpsWorkspaceTableElement,
  'uv-gaming-ops-workspace-form': UvGamingOpsWorkspaceFormElement,
  'uv-gaming-ops-workspace-widget': UvGamingOpsWorkspaceWidgetElement,
  'uv-gaming-ops-planner-panel': UvGamingOpsPlannerPanelElement,
  'uv-gaming-ops-planner-card': UvGamingOpsPlannerCardElement,
  'uv-gaming-ops-planner-table': UvGamingOpsPlannerTableElement,
  'uv-gaming-ops-planner-form': UvGamingOpsPlannerFormElement,
  'uv-gaming-ops-planner-widget': UvGamingOpsPlannerWidgetElement,
  'uv-gaming-ops-monitor-panel': UvGamingOpsMonitorPanelElement,
  'uv-gaming-ops-monitor-card': UvGamingOpsMonitorCardElement,
  'uv-gaming-ops-monitor-table': UvGamingOpsMonitorTableElement,
  'uv-gaming-ops-monitor-form': UvGamingOpsMonitorFormElement,
  'uv-gaming-ops-monitor-widget': UvGamingOpsMonitorWidgetElement,
  'uv-gaming-ops-explorer-panel': UvGamingOpsExplorerPanelElement,
  'uv-gaming-ops-explorer-card': UvGamingOpsExplorerCardElement,
  'uv-gaming-ops-explorer-table': UvGamingOpsExplorerTableElement,
  'uv-gaming-ops-explorer-form': UvGamingOpsExplorerFormElement,
  'uv-gaming-ops-explorer-widget': UvGamingOpsExplorerWidgetElement,
  'uv-gaming-ops-manager-panel': UvGamingOpsManagerPanelElement,
  'uv-gaming-ops-manager-card': UvGamingOpsManagerCardElement,
  'uv-gaming-ops-manager-table': UvGamingOpsManagerTableElement,
  'uv-gaming-ops-manager-form': UvGamingOpsManagerFormElement,
  'uv-gaming-ops-manager-widget': UvGamingOpsManagerWidgetElement,
  'uv-gaming-ops-console-panel': UvGamingOpsConsolePanelElement,
  'uv-gaming-ops-console-card': UvGamingOpsConsoleCardElement,
  'uv-gaming-ops-console-table': UvGamingOpsConsoleTableElement,
  'uv-gaming-ops-console-form': UvGamingOpsConsoleFormElement,
  'uv-gaming-ops-console-widget': UvGamingOpsConsoleWidgetElement,
  'uv-gaming-ops-insights-panel': UvGamingOpsInsightsPanelElement,
  'uv-gaming-ops-insights-card': UvGamingOpsInsightsCardElement,
  'uv-gaming-ops-insights-table': UvGamingOpsInsightsTableElement,
  'uv-gaming-ops-insights-form': UvGamingOpsInsightsFormElement,
  'uv-gaming-ops-insights-widget': UvGamingOpsInsightsWidgetElement,
  'uv-gaming-ops-workflow-panel': UvGamingOpsWorkflowPanelElement,
  'uv-gaming-ops-workflow-card': UvGamingOpsWorkflowCardElement,
  'uv-gaming-ops-workflow-table': UvGamingOpsWorkflowTableElement,
  'uv-gaming-ops-workflow-form': UvGamingOpsWorkflowFormElement,
  'uv-gaming-ops-workflow-widget': UvGamingOpsWorkflowWidgetElement,
  'uv-gaming-ops-automation-panel': UvGamingOpsAutomationPanelElement,
  'uv-gaming-ops-automation-card': UvGamingOpsAutomationCardElement,
  'uv-gaming-ops-automation-table': UvGamingOpsAutomationTableElement,
  'uv-gaming-ops-automation-form': UvGamingOpsAutomationFormElement,
  'uv-gaming-ops-automation-widget': UvGamingOpsAutomationWidgetElement,
  'uv-sports-ops-overview-panel': UvSportsOpsOverviewPanelElement,
  'uv-sports-ops-overview-card': UvSportsOpsOverviewCardElement,
  'uv-sports-ops-overview-table': UvSportsOpsOverviewTableElement,
  'uv-sports-ops-overview-form': UvSportsOpsOverviewFormElement,
  'uv-sports-ops-overview-widget': UvSportsOpsOverviewWidgetElement,
  'uv-sports-ops-workspace-panel': UvSportsOpsWorkspacePanelElement,
  'uv-sports-ops-workspace-card': UvSportsOpsWorkspaceCardElement,
  'uv-sports-ops-workspace-table': UvSportsOpsWorkspaceTableElement,
  'uv-sports-ops-workspace-form': UvSportsOpsWorkspaceFormElement,
  'uv-sports-ops-workspace-widget': UvSportsOpsWorkspaceWidgetElement,
  'uv-sports-ops-planner-panel': UvSportsOpsPlannerPanelElement,
  'uv-sports-ops-planner-card': UvSportsOpsPlannerCardElement,
  'uv-sports-ops-planner-table': UvSportsOpsPlannerTableElement,
  'uv-sports-ops-planner-form': UvSportsOpsPlannerFormElement,
  'uv-sports-ops-planner-widget': UvSportsOpsPlannerWidgetElement,
  'uv-sports-ops-monitor-panel': UvSportsOpsMonitorPanelElement,
  'uv-sports-ops-monitor-card': UvSportsOpsMonitorCardElement,
  'uv-sports-ops-monitor-table': UvSportsOpsMonitorTableElement,
  'uv-sports-ops-monitor-form': UvSportsOpsMonitorFormElement,
  'uv-sports-ops-monitor-widget': UvSportsOpsMonitorWidgetElement,
  'uv-sports-ops-explorer-panel': UvSportsOpsExplorerPanelElement,
  'uv-sports-ops-explorer-card': UvSportsOpsExplorerCardElement,
  'uv-sports-ops-explorer-table': UvSportsOpsExplorerTableElement,
  'uv-sports-ops-explorer-form': UvSportsOpsExplorerFormElement,
  'uv-sports-ops-explorer-widget': UvSportsOpsExplorerWidgetElement,
  'uv-sports-ops-manager-panel': UvSportsOpsManagerPanelElement,
  'uv-sports-ops-manager-card': UvSportsOpsManagerCardElement,
  'uv-sports-ops-manager-table': UvSportsOpsManagerTableElement,
  'uv-sports-ops-manager-form': UvSportsOpsManagerFormElement,
  'uv-sports-ops-manager-widget': UvSportsOpsManagerWidgetElement,
  'uv-sports-ops-console-panel': UvSportsOpsConsolePanelElement,
  'uv-sports-ops-console-card': UvSportsOpsConsoleCardElement,
  'uv-sports-ops-console-table': UvSportsOpsConsoleTableElement,
  'uv-sports-ops-console-form': UvSportsOpsConsoleFormElement,
  'uv-sports-ops-console-widget': UvSportsOpsConsoleWidgetElement,
  'uv-sports-ops-insights-panel': UvSportsOpsInsightsPanelElement,
  'uv-sports-ops-insights-card': UvSportsOpsInsightsCardElement,
  'uv-sports-ops-insights-table': UvSportsOpsInsightsTableElement,
  'uv-sports-ops-insights-form': UvSportsOpsInsightsFormElement,
  'uv-sports-ops-insights-widget': UvSportsOpsInsightsWidgetElement,
  'uv-sports-ops-workflow-panel': UvSportsOpsWorkflowPanelElement,
  'uv-sports-ops-workflow-card': UvSportsOpsWorkflowCardElement,
  'uv-sports-ops-workflow-table': UvSportsOpsWorkflowTableElement,
  'uv-sports-ops-workflow-form': UvSportsOpsWorkflowFormElement,
  'uv-sports-ops-workflow-widget': UvSportsOpsWorkflowWidgetElement,
  'uv-sports-ops-automation-panel': UvSportsOpsAutomationPanelElement,
  'uv-sports-ops-automation-card': UvSportsOpsAutomationCardElement,
  'uv-sports-ops-automation-table': UvSportsOpsAutomationTableElement,
  'uv-sports-ops-automation-form': UvSportsOpsAutomationFormElement,
  'uv-sports-ops-automation-widget': UvSportsOpsAutomationWidgetElement,
  'uv-community-ops-overview-panel': UvCommunityOpsOverviewPanelElement,
  'uv-community-ops-overview-card': UvCommunityOpsOverviewCardElement,
  'uv-community-ops-overview-table': UvCommunityOpsOverviewTableElement,
  'uv-community-ops-overview-form': UvCommunityOpsOverviewFormElement,
  'uv-community-ops-overview-widget': UvCommunityOpsOverviewWidgetElement,
  'uv-community-ops-workspace-panel': UvCommunityOpsWorkspacePanelElement,
  'uv-community-ops-workspace-card': UvCommunityOpsWorkspaceCardElement,
  'uv-community-ops-workspace-table': UvCommunityOpsWorkspaceTableElement,
  'uv-community-ops-workspace-form': UvCommunityOpsWorkspaceFormElement,
  'uv-community-ops-workspace-widget': UvCommunityOpsWorkspaceWidgetElement,
  'uv-community-ops-planner-panel': UvCommunityOpsPlannerPanelElement,
  'uv-community-ops-planner-card': UvCommunityOpsPlannerCardElement,
  'uv-community-ops-planner-table': UvCommunityOpsPlannerTableElement,
  'uv-community-ops-planner-form': UvCommunityOpsPlannerFormElement,
  'uv-community-ops-planner-widget': UvCommunityOpsPlannerWidgetElement,
  'uv-community-ops-monitor-panel': UvCommunityOpsMonitorPanelElement,
  'uv-community-ops-monitor-card': UvCommunityOpsMonitorCardElement,
  'uv-community-ops-monitor-table': UvCommunityOpsMonitorTableElement,
  'uv-community-ops-monitor-form': UvCommunityOpsMonitorFormElement,
  'uv-community-ops-monitor-widget': UvCommunityOpsMonitorWidgetElement,
  'uv-community-ops-explorer-panel': UvCommunityOpsExplorerPanelElement,
  'uv-community-ops-explorer-card': UvCommunityOpsExplorerCardElement,
  'uv-community-ops-explorer-table': UvCommunityOpsExplorerTableElement,
  'uv-community-ops-explorer-form': UvCommunityOpsExplorerFormElement,
  'uv-community-ops-explorer-widget': UvCommunityOpsExplorerWidgetElement,
  'uv-community-ops-manager-panel': UvCommunityOpsManagerPanelElement,
  'uv-community-ops-manager-card': UvCommunityOpsManagerCardElement,
  'uv-community-ops-manager-table': UvCommunityOpsManagerTableElement,
  'uv-community-ops-manager-form': UvCommunityOpsManagerFormElement,
  'uv-community-ops-manager-widget': UvCommunityOpsManagerWidgetElement,
  'uv-community-ops-console-panel': UvCommunityOpsConsolePanelElement,
  'uv-community-ops-console-card': UvCommunityOpsConsoleCardElement,
  'uv-community-ops-console-table': UvCommunityOpsConsoleTableElement,
  'uv-community-ops-console-form': UvCommunityOpsConsoleFormElement,
  'uv-community-ops-console-widget': UvCommunityOpsConsoleWidgetElement,
  'uv-community-ops-insights-panel': UvCommunityOpsInsightsPanelElement,
  'uv-community-ops-insights-card': UvCommunityOpsInsightsCardElement,
  'uv-community-ops-insights-table': UvCommunityOpsInsightsTableElement,
  'uv-community-ops-insights-form': UvCommunityOpsInsightsFormElement,
  'uv-community-ops-insights-widget': UvCommunityOpsInsightsWidgetElement,
  'uv-community-ops-workflow-panel': UvCommunityOpsWorkflowPanelElement,
  'uv-community-ops-workflow-card': UvCommunityOpsWorkflowCardElement,
  'uv-community-ops-workflow-table': UvCommunityOpsWorkflowTableElement,
  'uv-community-ops-workflow-form': UvCommunityOpsWorkflowFormElement,
  'uv-community-ops-workflow-widget': UvCommunityOpsWorkflowWidgetElement,
  'uv-community-ops-automation-panel': UvCommunityOpsAutomationPanelElement,
  'uv-community-ops-automation-card': UvCommunityOpsAutomationCardElement,
  'uv-community-ops-automation-table': UvCommunityOpsAutomationTableElement,
  'uv-community-ops-automation-form': UvCommunityOpsAutomationFormElement,
  'uv-community-ops-automation-widget': UvCommunityOpsAutomationWidgetElement,
  'uv-government-ops-overview-panel': UvGovernmentOpsOverviewPanelElement,
  'uv-government-ops-overview-card': UvGovernmentOpsOverviewCardElement,
  'uv-government-ops-overview-table': UvGovernmentOpsOverviewTableElement,
  'uv-government-ops-overview-form': UvGovernmentOpsOverviewFormElement,
  'uv-government-ops-overview-widget': UvGovernmentOpsOverviewWidgetElement,
  'uv-government-ops-workspace-panel': UvGovernmentOpsWorkspacePanelElement,
  'uv-government-ops-workspace-card': UvGovernmentOpsWorkspaceCardElement,
  'uv-government-ops-workspace-table': UvGovernmentOpsWorkspaceTableElement,
  'uv-government-ops-workspace-form': UvGovernmentOpsWorkspaceFormElement,
  'uv-government-ops-workspace-widget': UvGovernmentOpsWorkspaceWidgetElement,
  'uv-government-ops-planner-panel': UvGovernmentOpsPlannerPanelElement,
  'uv-government-ops-planner-card': UvGovernmentOpsPlannerCardElement,
  'uv-government-ops-planner-table': UvGovernmentOpsPlannerTableElement,
  'uv-government-ops-planner-form': UvGovernmentOpsPlannerFormElement,
  'uv-government-ops-planner-widget': UvGovernmentOpsPlannerWidgetElement,
  'uv-government-ops-monitor-panel': UvGovernmentOpsMonitorPanelElement,
  'uv-government-ops-monitor-card': UvGovernmentOpsMonitorCardElement,
  'uv-government-ops-monitor-table': UvGovernmentOpsMonitorTableElement,
  'uv-government-ops-monitor-form': UvGovernmentOpsMonitorFormElement,
  'uv-government-ops-monitor-widget': UvGovernmentOpsMonitorWidgetElement,
  'uv-government-ops-explorer-panel': UvGovernmentOpsExplorerPanelElement,
  'uv-government-ops-explorer-card': UvGovernmentOpsExplorerCardElement,
  'uv-government-ops-explorer-table': UvGovernmentOpsExplorerTableElement,
  'uv-government-ops-explorer-form': UvGovernmentOpsExplorerFormElement,
  'uv-government-ops-explorer-widget': UvGovernmentOpsExplorerWidgetElement,
  'uv-government-ops-manager-panel': UvGovernmentOpsManagerPanelElement,
  'uv-government-ops-manager-card': UvGovernmentOpsManagerCardElement,
  'uv-government-ops-manager-table': UvGovernmentOpsManagerTableElement,
  'uv-government-ops-manager-form': UvGovernmentOpsManagerFormElement,
  'uv-government-ops-manager-widget': UvGovernmentOpsManagerWidgetElement,
  'uv-government-ops-console-panel': UvGovernmentOpsConsolePanelElement,
  'uv-government-ops-console-card': UvGovernmentOpsConsoleCardElement,
  'uv-government-ops-console-table': UvGovernmentOpsConsoleTableElement,
  'uv-government-ops-console-form': UvGovernmentOpsConsoleFormElement,
  'uv-government-ops-console-widget': UvGovernmentOpsConsoleWidgetElement,
  'uv-government-ops-insights-panel': UvGovernmentOpsInsightsPanelElement,
  'uv-government-ops-insights-card': UvGovernmentOpsInsightsCardElement,
  'uv-government-ops-insights-table': UvGovernmentOpsInsightsTableElement,
  'uv-government-ops-insights-form': UvGovernmentOpsInsightsFormElement,
  'uv-government-ops-insights-widget': UvGovernmentOpsInsightsWidgetElement,
  'uv-government-ops-workflow-panel': UvGovernmentOpsWorkflowPanelElement,
  'uv-government-ops-workflow-card': UvGovernmentOpsWorkflowCardElement,
  'uv-government-ops-workflow-table': UvGovernmentOpsWorkflowTableElement,
  'uv-government-ops-workflow-form': UvGovernmentOpsWorkflowFormElement,
  'uv-government-ops-workflow-widget': UvGovernmentOpsWorkflowWidgetElement,
  'uv-government-ops-automation-panel': UvGovernmentOpsAutomationPanelElement,
  'uv-government-ops-automation-card': UvGovernmentOpsAutomationCardElement,
  'uv-government-ops-automation-table': UvGovernmentOpsAutomationTableElement,
  'uv-government-ops-automation-form': UvGovernmentOpsAutomationFormElement,
  'uv-government-ops-automation-widget': UvGovernmentOpsAutomationWidgetElement,
  'uv-legal-ops-overview-panel': UvLegalOpsOverviewPanelElement,
  'uv-legal-ops-overview-card': UvLegalOpsOverviewCardElement,
  'uv-legal-ops-overview-table': UvLegalOpsOverviewTableElement,
  'uv-legal-ops-overview-form': UvLegalOpsOverviewFormElement,
  'uv-legal-ops-overview-widget': UvLegalOpsOverviewWidgetElement,
  'uv-legal-ops-workspace-panel': UvLegalOpsWorkspacePanelElement,
  'uv-legal-ops-workspace-card': UvLegalOpsWorkspaceCardElement,
  'uv-legal-ops-workspace-table': UvLegalOpsWorkspaceTableElement,
  'uv-legal-ops-workspace-form': UvLegalOpsWorkspaceFormElement,
  'uv-legal-ops-workspace-widget': UvLegalOpsWorkspaceWidgetElement,
  'uv-legal-ops-planner-panel': UvLegalOpsPlannerPanelElement,
  'uv-legal-ops-planner-card': UvLegalOpsPlannerCardElement,
  'uv-legal-ops-planner-table': UvLegalOpsPlannerTableElement,
  'uv-legal-ops-planner-form': UvLegalOpsPlannerFormElement,
  'uv-legal-ops-planner-widget': UvLegalOpsPlannerWidgetElement,
  'uv-legal-ops-monitor-panel': UvLegalOpsMonitorPanelElement,
  'uv-legal-ops-monitor-card': UvLegalOpsMonitorCardElement,
  'uv-legal-ops-monitor-table': UvLegalOpsMonitorTableElement,
  'uv-legal-ops-monitor-form': UvLegalOpsMonitorFormElement,
  'uv-legal-ops-monitor-widget': UvLegalOpsMonitorWidgetElement,
  'uv-legal-ops-explorer-panel': UvLegalOpsExplorerPanelElement,
  'uv-legal-ops-explorer-card': UvLegalOpsExplorerCardElement,
  'uv-legal-ops-explorer-table': UvLegalOpsExplorerTableElement,
  'uv-legal-ops-explorer-form': UvLegalOpsExplorerFormElement,
  'uv-legal-ops-explorer-widget': UvLegalOpsExplorerWidgetElement,
  'uv-legal-ops-manager-panel': UvLegalOpsManagerPanelElement,
  'uv-legal-ops-manager-card': UvLegalOpsManagerCardElement,
  'uv-legal-ops-manager-table': UvLegalOpsManagerTableElement,
  'uv-legal-ops-manager-form': UvLegalOpsManagerFormElement,
  'uv-legal-ops-manager-widget': UvLegalOpsManagerWidgetElement,
  'uv-legal-ops-console-panel': UvLegalOpsConsolePanelElement,
  'uv-legal-ops-console-card': UvLegalOpsConsoleCardElement,
  'uv-legal-ops-console-table': UvLegalOpsConsoleTableElement,
  'uv-legal-ops-console-form': UvLegalOpsConsoleFormElement,
  'uv-legal-ops-console-widget': UvLegalOpsConsoleWidgetElement,
  'uv-legal-ops-insights-panel': UvLegalOpsInsightsPanelElement,
  'uv-legal-ops-insights-card': UvLegalOpsInsightsCardElement,
  'uv-legal-ops-insights-table': UvLegalOpsInsightsTableElement,
  'uv-legal-ops-insights-form': UvLegalOpsInsightsFormElement,
  'uv-legal-ops-insights-widget': UvLegalOpsInsightsWidgetElement,
  'uv-legal-ops-workflow-panel': UvLegalOpsWorkflowPanelElement,
  'uv-legal-ops-workflow-card': UvLegalOpsWorkflowCardElement,
  'uv-legal-ops-workflow-table': UvLegalOpsWorkflowTableElement,
  'uv-legal-ops-workflow-form': UvLegalOpsWorkflowFormElement,
  'uv-legal-ops-workflow-widget': UvLegalOpsWorkflowWidgetElement,
  'uv-legal-ops-automation-panel': UvLegalOpsAutomationPanelElement,
  'uv-legal-ops-automation-card': UvLegalOpsAutomationCardElement,
  'uv-legal-ops-automation-table': UvLegalOpsAutomationTableElement,
  'uv-legal-ops-automation-form': UvLegalOpsAutomationFormElement,
  'uv-legal-ops-automation-widget': UvLegalOpsAutomationWidgetElement,
  'uv-compliance-ops-overview-panel': UvComplianceOpsOverviewPanelElement,
  'uv-compliance-ops-overview-card': UvComplianceOpsOverviewCardElement,
  'uv-compliance-ops-overview-table': UvComplianceOpsOverviewTableElement,
  'uv-compliance-ops-overview-form': UvComplianceOpsOverviewFormElement,
  'uv-compliance-ops-overview-widget': UvComplianceOpsOverviewWidgetElement,
  'uv-compliance-ops-workspace-panel': UvComplianceOpsWorkspacePanelElement,
  'uv-compliance-ops-workspace-card': UvComplianceOpsWorkspaceCardElement,
  'uv-compliance-ops-workspace-table': UvComplianceOpsWorkspaceTableElement,
  'uv-compliance-ops-workspace-form': UvComplianceOpsWorkspaceFormElement,
  'uv-compliance-ops-workspace-widget': UvComplianceOpsWorkspaceWidgetElement,
  'uv-compliance-ops-planner-panel': UvComplianceOpsPlannerPanelElement,
  'uv-compliance-ops-planner-card': UvComplianceOpsPlannerCardElement,
  'uv-compliance-ops-planner-table': UvComplianceOpsPlannerTableElement,
  'uv-compliance-ops-planner-form': UvComplianceOpsPlannerFormElement,
  'uv-compliance-ops-planner-widget': UvComplianceOpsPlannerWidgetElement,
  'uv-compliance-ops-monitor-panel': UvComplianceOpsMonitorPanelElement,
  'uv-compliance-ops-monitor-card': UvComplianceOpsMonitorCardElement,
  'uv-compliance-ops-monitor-table': UvComplianceOpsMonitorTableElement,
  'uv-compliance-ops-monitor-form': UvComplianceOpsMonitorFormElement,
  'uv-compliance-ops-monitor-widget': UvComplianceOpsMonitorWidgetElement,
  'uv-compliance-ops-explorer-panel': UvComplianceOpsExplorerPanelElement,
  'uv-compliance-ops-explorer-card': UvComplianceOpsExplorerCardElement,
  'uv-compliance-ops-explorer-table': UvComplianceOpsExplorerTableElement,
  'uv-compliance-ops-explorer-form': UvComplianceOpsExplorerFormElement,
  'uv-compliance-ops-explorer-widget': UvComplianceOpsExplorerWidgetElement,
  'uv-compliance-ops-manager-panel': UvComplianceOpsManagerPanelElement,
  'uv-compliance-ops-manager-card': UvComplianceOpsManagerCardElement,
  'uv-compliance-ops-manager-table': UvComplianceOpsManagerTableElement,
  'uv-compliance-ops-manager-form': UvComplianceOpsManagerFormElement,
  'uv-compliance-ops-manager-widget': UvComplianceOpsManagerWidgetElement,
  'uv-compliance-ops-console-panel': UvComplianceOpsConsolePanelElement,
  'uv-compliance-ops-console-card': UvComplianceOpsConsoleCardElement,
  'uv-compliance-ops-console-table': UvComplianceOpsConsoleTableElement,
  'uv-compliance-ops-console-form': UvComplianceOpsConsoleFormElement,
  'uv-compliance-ops-console-widget': UvComplianceOpsConsoleWidgetElement,
  'uv-compliance-ops-insights-panel': UvComplianceOpsInsightsPanelElement,
  'uv-compliance-ops-insights-card': UvComplianceOpsInsightsCardElement,
  'uv-compliance-ops-insights-table': UvComplianceOpsInsightsTableElement,
  'uv-compliance-ops-insights-form': UvComplianceOpsInsightsFormElement,
  'uv-compliance-ops-insights-widget': UvComplianceOpsInsightsWidgetElement,
  'uv-compliance-ops-workflow-panel': UvComplianceOpsWorkflowPanelElement,
  'uv-compliance-ops-workflow-card': UvComplianceOpsWorkflowCardElement,
  'uv-compliance-ops-workflow-table': UvComplianceOpsWorkflowTableElement,
  'uv-compliance-ops-workflow-form': UvComplianceOpsWorkflowFormElement,
  'uv-compliance-ops-workflow-widget': UvComplianceOpsWorkflowWidgetElement,
  'uv-compliance-ops-automation-panel': UvComplianceOpsAutomationPanelElement,
  'uv-compliance-ops-automation-card': UvComplianceOpsAutomationCardElement,
  'uv-compliance-ops-automation-table': UvComplianceOpsAutomationTableElement,
  'uv-compliance-ops-automation-form': UvComplianceOpsAutomationFormElement,
  'uv-compliance-ops-automation-widget': UvComplianceOpsAutomationWidgetElement,
  'uv-security-ops-overview-panel': UvSecurityOpsOverviewPanelElement,
  'uv-security-ops-overview-card': UvSecurityOpsOverviewCardElement,
  'uv-security-ops-overview-table': UvSecurityOpsOverviewTableElement,
  'uv-security-ops-overview-form': UvSecurityOpsOverviewFormElement,
  'uv-security-ops-overview-widget': UvSecurityOpsOverviewWidgetElement,
  'uv-security-ops-workspace-panel': UvSecurityOpsWorkspacePanelElement,
  'uv-security-ops-workspace-card': UvSecurityOpsWorkspaceCardElement,
  'uv-security-ops-workspace-table': UvSecurityOpsWorkspaceTableElement,
  'uv-security-ops-workspace-form': UvSecurityOpsWorkspaceFormElement,
  'uv-security-ops-workspace-widget': UvSecurityOpsWorkspaceWidgetElement,
  'uv-security-ops-planner-panel': UvSecurityOpsPlannerPanelElement,
  'uv-security-ops-planner-card': UvSecurityOpsPlannerCardElement,
  'uv-security-ops-planner-table': UvSecurityOpsPlannerTableElement,
  'uv-security-ops-planner-form': UvSecurityOpsPlannerFormElement,
  'uv-security-ops-planner-widget': UvSecurityOpsPlannerWidgetElement,
  'uv-security-ops-monitor-panel': UvSecurityOpsMonitorPanelElement,
  'uv-security-ops-monitor-card': UvSecurityOpsMonitorCardElement,
  'uv-security-ops-monitor-table': UvSecurityOpsMonitorTableElement,
  'uv-security-ops-monitor-form': UvSecurityOpsMonitorFormElement,
  'uv-security-ops-monitor-widget': UvSecurityOpsMonitorWidgetElement,
  'uv-security-ops-explorer-panel': UvSecurityOpsExplorerPanelElement,
  'uv-security-ops-explorer-card': UvSecurityOpsExplorerCardElement,
  'uv-security-ops-explorer-table': UvSecurityOpsExplorerTableElement,
  'uv-security-ops-explorer-form': UvSecurityOpsExplorerFormElement,
  'uv-security-ops-explorer-widget': UvSecurityOpsExplorerWidgetElement,
  'uv-security-ops-manager-panel': UvSecurityOpsManagerPanelElement,
  'uv-security-ops-manager-card': UvSecurityOpsManagerCardElement,
  'uv-security-ops-manager-table': UvSecurityOpsManagerTableElement,
  'uv-security-ops-manager-form': UvSecurityOpsManagerFormElement,
  'uv-security-ops-manager-widget': UvSecurityOpsManagerWidgetElement,
  'uv-security-ops-console-panel': UvSecurityOpsConsolePanelElement,
  'uv-security-ops-console-card': UvSecurityOpsConsoleCardElement,
  'uv-security-ops-console-table': UvSecurityOpsConsoleTableElement,
  'uv-security-ops-console-form': UvSecurityOpsConsoleFormElement,
  'uv-security-ops-console-widget': UvSecurityOpsConsoleWidgetElement,
  'uv-security-ops-insights-panel': UvSecurityOpsInsightsPanelElement,
  'uv-security-ops-insights-card': UvSecurityOpsInsightsCardElement,
  'uv-security-ops-insights-table': UvSecurityOpsInsightsTableElement,
  'uv-security-ops-insights-form': UvSecurityOpsInsightsFormElement,
  'uv-security-ops-insights-widget': UvSecurityOpsInsightsWidgetElement,
  'uv-security-ops-workflow-panel': UvSecurityOpsWorkflowPanelElement,
  'uv-security-ops-workflow-card': UvSecurityOpsWorkflowCardElement,
  'uv-security-ops-workflow-table': UvSecurityOpsWorkflowTableElement,
  'uv-security-ops-workflow-form': UvSecurityOpsWorkflowFormElement,
  'uv-security-ops-workflow-widget': UvSecurityOpsWorkflowWidgetElement,
  'uv-security-ops-automation-panel': UvSecurityOpsAutomationPanelElement,
  'uv-security-ops-automation-card': UvSecurityOpsAutomationCardElement,
  'uv-security-ops-automation-table': UvSecurityOpsAutomationTableElement,
  'uv-security-ops-automation-form': UvSecurityOpsAutomationFormElement,
  'uv-security-ops-automation-widget': UvSecurityOpsAutomationWidgetElement,
  'uv-dev-ops-overview-panel': UvDevOpsOverviewPanelElement,
  'uv-dev-ops-overview-card': UvDevOpsOverviewCardElement,
  'uv-dev-ops-overview-table': UvDevOpsOverviewTableElement,
  'uv-dev-ops-overview-form': UvDevOpsOverviewFormElement,
  'uv-dev-ops-overview-widget': UvDevOpsOverviewWidgetElement,
  'uv-dev-ops-workspace-panel': UvDevOpsWorkspacePanelElement,
  'uv-dev-ops-workspace-card': UvDevOpsWorkspaceCardElement,
  'uv-dev-ops-workspace-table': UvDevOpsWorkspaceTableElement,
  'uv-dev-ops-workspace-form': UvDevOpsWorkspaceFormElement,
  'uv-dev-ops-workspace-widget': UvDevOpsWorkspaceWidgetElement,
  'uv-dev-ops-planner-panel': UvDevOpsPlannerPanelElement,
  'uv-dev-ops-planner-card': UvDevOpsPlannerCardElement,
  'uv-dev-ops-planner-table': UvDevOpsPlannerTableElement,
  'uv-dev-ops-planner-form': UvDevOpsPlannerFormElement,
  'uv-dev-ops-planner-widget': UvDevOpsPlannerWidgetElement,
  'uv-dev-ops-monitor-panel': UvDevOpsMonitorPanelElement,
  'uv-dev-ops-monitor-card': UvDevOpsMonitorCardElement,
  'uv-dev-ops-monitor-table': UvDevOpsMonitorTableElement,
  'uv-dev-ops-monitor-form': UvDevOpsMonitorFormElement,
  'uv-dev-ops-monitor-widget': UvDevOpsMonitorWidgetElement,
  'uv-dev-ops-explorer-panel': UvDevOpsExplorerPanelElement,
  'uv-dev-ops-explorer-card': UvDevOpsExplorerCardElement,
  'uv-dev-ops-explorer-table': UvDevOpsExplorerTableElement,
  'uv-dev-ops-explorer-form': UvDevOpsExplorerFormElement,
  'uv-dev-ops-explorer-widget': UvDevOpsExplorerWidgetElement,
  'uv-dev-ops-manager-panel': UvDevOpsManagerPanelElement,
  'uv-dev-ops-manager-card': UvDevOpsManagerCardElement,
  'uv-dev-ops-manager-table': UvDevOpsManagerTableElement,
  'uv-dev-ops-manager-form': UvDevOpsManagerFormElement,
  'uv-dev-ops-manager-widget': UvDevOpsManagerWidgetElement,
  'uv-dev-ops-console-panel': UvDevOpsConsolePanelElement,
  'uv-dev-ops-console-card': UvDevOpsConsoleCardElement,
  'uv-dev-ops-console-table': UvDevOpsConsoleTableElement,
  'uv-dev-ops-console-form': UvDevOpsConsoleFormElement,
  'uv-dev-ops-console-widget': UvDevOpsConsoleWidgetElement,
  'uv-dev-ops-insights-panel': UvDevOpsInsightsPanelElement,
  'uv-dev-ops-insights-card': UvDevOpsInsightsCardElement,
  'uv-dev-ops-insights-table': UvDevOpsInsightsTableElement,
  'uv-dev-ops-insights-form': UvDevOpsInsightsFormElement,
  'uv-dev-ops-insights-widget': UvDevOpsInsightsWidgetElement,
  'uv-dev-ops-workflow-panel': UvDevOpsWorkflowPanelElement,
  'uv-dev-ops-workflow-card': UvDevOpsWorkflowCardElement,
  'uv-dev-ops-workflow-table': UvDevOpsWorkflowTableElement,
  'uv-dev-ops-workflow-form': UvDevOpsWorkflowFormElement,
  'uv-dev-ops-workflow-widget': UvDevOpsWorkflowWidgetElement,
  'uv-dev-ops-automation-panel': UvDevOpsAutomationPanelElement,
  'uv-dev-ops-automation-card': UvDevOpsAutomationCardElement,
  'uv-dev-ops-automation-table': UvDevOpsAutomationTableElement,
  'uv-dev-ops-automation-form': UvDevOpsAutomationFormElement,
  'uv-dev-ops-automation-widget': UvDevOpsAutomationWidgetElement,
  'uv-data-ops-overview-panel': UvDataOpsOverviewPanelElement,
  'uv-data-ops-overview-card': UvDataOpsOverviewCardElement,
  'uv-data-ops-overview-table': UvDataOpsOverviewTableElement,
  'uv-data-ops-overview-form': UvDataOpsOverviewFormElement,
  'uv-data-ops-overview-widget': UvDataOpsOverviewWidgetElement,
  'uv-data-ops-workspace-panel': UvDataOpsWorkspacePanelElement,
  'uv-data-ops-workspace-card': UvDataOpsWorkspaceCardElement,
  'uv-data-ops-workspace-table': UvDataOpsWorkspaceTableElement,
  'uv-data-ops-workspace-form': UvDataOpsWorkspaceFormElement,
  'uv-data-ops-workspace-widget': UvDataOpsWorkspaceWidgetElement,
  'uv-data-ops-planner-panel': UvDataOpsPlannerPanelElement,
  'uv-data-ops-planner-card': UvDataOpsPlannerCardElement,
  'uv-data-ops-planner-table': UvDataOpsPlannerTableElement,
  'uv-data-ops-planner-form': UvDataOpsPlannerFormElement,
  'uv-data-ops-planner-widget': UvDataOpsPlannerWidgetElement,
  'uv-data-ops-monitor-panel': UvDataOpsMonitorPanelElement,
  'uv-data-ops-monitor-card': UvDataOpsMonitorCardElement,
  'uv-data-ops-monitor-table': UvDataOpsMonitorTableElement,
  'uv-data-ops-monitor-form': UvDataOpsMonitorFormElement,
  'uv-data-ops-monitor-widget': UvDataOpsMonitorWidgetElement,
  'uv-data-ops-explorer-panel': UvDataOpsExplorerPanelElement,
  'uv-data-ops-explorer-card': UvDataOpsExplorerCardElement,
  'uv-data-ops-explorer-table': UvDataOpsExplorerTableElement,
  'uv-data-ops-explorer-form': UvDataOpsExplorerFormElement,
  'uv-data-ops-explorer-widget': UvDataOpsExplorerWidgetElement,
  'uv-data-ops-manager-panel': UvDataOpsManagerPanelElement,
  'uv-data-ops-manager-card': UvDataOpsManagerCardElement,
  'uv-data-ops-manager-table': UvDataOpsManagerTableElement,
  'uv-data-ops-manager-form': UvDataOpsManagerFormElement,
  'uv-data-ops-manager-widget': UvDataOpsManagerWidgetElement,
  'uv-data-ops-console-panel': UvDataOpsConsolePanelElement,
  'uv-data-ops-console-card': UvDataOpsConsoleCardElement,
  'uv-data-ops-console-table': UvDataOpsConsoleTableElement,
  'uv-data-ops-console-form': UvDataOpsConsoleFormElement,
  'uv-data-ops-console-widget': UvDataOpsConsoleWidgetElement,
  'uv-data-ops-insights-panel': UvDataOpsInsightsPanelElement,
  'uv-data-ops-insights-card': UvDataOpsInsightsCardElement,
  'uv-data-ops-insights-table': UvDataOpsInsightsTableElement,
  'uv-data-ops-insights-form': UvDataOpsInsightsFormElement,
  'uv-data-ops-insights-widget': UvDataOpsInsightsWidgetElement,
  'uv-data-ops-workflow-panel': UvDataOpsWorkflowPanelElement,
  'uv-data-ops-workflow-card': UvDataOpsWorkflowCardElement,
  'uv-data-ops-workflow-table': UvDataOpsWorkflowTableElement,
  'uv-data-ops-workflow-form': UvDataOpsWorkflowFormElement,
  'uv-data-ops-workflow-widget': UvDataOpsWorkflowWidgetElement,
  'uv-data-ops-automation-panel': UvDataOpsAutomationPanelElement,
  'uv-data-ops-automation-card': UvDataOpsAutomationCardElement,
  'uv-data-ops-automation-table': UvDataOpsAutomationTableElement,
  'uv-data-ops-automation-form': UvDataOpsAutomationFormElement,
  'uv-data-ops-automation-widget': UvDataOpsAutomationWidgetElement,
  'uv-ai-ops-overview-panel': UvAiOpsOverviewPanelElement,
  'uv-ai-ops-overview-card': UvAiOpsOverviewCardElement,
  'uv-ai-ops-overview-table': UvAiOpsOverviewTableElement,
  'uv-ai-ops-overview-form': UvAiOpsOverviewFormElement,
  'uv-ai-ops-overview-widget': UvAiOpsOverviewWidgetElement,
  'uv-ai-ops-workspace-panel': UvAiOpsWorkspacePanelElement,
  'uv-ai-ops-workspace-card': UvAiOpsWorkspaceCardElement,
  'uv-ai-ops-workspace-table': UvAiOpsWorkspaceTableElement,
  'uv-ai-ops-workspace-form': UvAiOpsWorkspaceFormElement,
  'uv-ai-ops-workspace-widget': UvAiOpsWorkspaceWidgetElement,
  'uv-ai-ops-planner-panel': UvAiOpsPlannerPanelElement,
  'uv-ai-ops-planner-card': UvAiOpsPlannerCardElement,
  'uv-ai-ops-planner-table': UvAiOpsPlannerTableElement,
  'uv-ai-ops-planner-form': UvAiOpsPlannerFormElement,
  'uv-ai-ops-planner-widget': UvAiOpsPlannerWidgetElement,
  'uv-ai-ops-monitor-panel': UvAiOpsMonitorPanelElement,
  'uv-ai-ops-monitor-card': UvAiOpsMonitorCardElement,
  'uv-ai-ops-monitor-table': UvAiOpsMonitorTableElement,
  'uv-ai-ops-monitor-form': UvAiOpsMonitorFormElement,
  'uv-ai-ops-monitor-widget': UvAiOpsMonitorWidgetElement,
  'uv-ai-ops-explorer-panel': UvAiOpsExplorerPanelElement,
  'uv-ai-ops-explorer-card': UvAiOpsExplorerCardElement,
  'uv-ai-ops-explorer-table': UvAiOpsExplorerTableElement,
  'uv-ai-ops-explorer-form': UvAiOpsExplorerFormElement,
  'uv-ai-ops-explorer-widget': UvAiOpsExplorerWidgetElement,
  'uv-ai-ops-manager-panel': UvAiOpsManagerPanelElement,
  'uv-ai-ops-manager-card': UvAiOpsManagerCardElement,
  'uv-ai-ops-manager-table': UvAiOpsManagerTableElement,
  'uv-ai-ops-manager-form': UvAiOpsManagerFormElement,
  'uv-ai-ops-manager-widget': UvAiOpsManagerWidgetElement,
  'uv-ai-ops-console-panel': UvAiOpsConsolePanelElement,
  'uv-ai-ops-console-card': UvAiOpsConsoleCardElement,
  'uv-ai-ops-console-table': UvAiOpsConsoleTableElement,
  'uv-ai-ops-console-form': UvAiOpsConsoleFormElement,
  'uv-ai-ops-console-widget': UvAiOpsConsoleWidgetElement,
  'uv-ai-ops-insights-panel': UvAiOpsInsightsPanelElement,
  'uv-ai-ops-insights-card': UvAiOpsInsightsCardElement,
  'uv-ai-ops-insights-table': UvAiOpsInsightsTableElement,
  'uv-ai-ops-insights-form': UvAiOpsInsightsFormElement,
  'uv-ai-ops-insights-widget': UvAiOpsInsightsWidgetElement,
  'uv-ai-ops-workflow-panel': UvAiOpsWorkflowPanelElement,
  'uv-ai-ops-workflow-card': UvAiOpsWorkflowCardElement,
  'uv-ai-ops-workflow-table': UvAiOpsWorkflowTableElement,
  'uv-ai-ops-workflow-form': UvAiOpsWorkflowFormElement,
  'uv-ai-ops-workflow-widget': UvAiOpsWorkflowWidgetElement,
  'uv-ai-ops-automation-panel': UvAiOpsAutomationPanelElement,
  'uv-ai-ops-automation-card': UvAiOpsAutomationCardElement,
  'uv-ai-ops-automation-table': UvAiOpsAutomationTableElement,
  'uv-ai-ops-automation-form': UvAiOpsAutomationFormElement,
  'uv-ai-ops-automation-widget': UvAiOpsAutomationWidgetElement,
  'uv-robotics-ops-overview-panel': UvRoboticsOpsOverviewPanelElement,
  'uv-robotics-ops-overview-card': UvRoboticsOpsOverviewCardElement,
  'uv-robotics-ops-overview-table': UvRoboticsOpsOverviewTableElement,
  'uv-robotics-ops-overview-form': UvRoboticsOpsOverviewFormElement,
  'uv-robotics-ops-overview-widget': UvRoboticsOpsOverviewWidgetElement,
  'uv-robotics-ops-workspace-panel': UvRoboticsOpsWorkspacePanelElement,
  'uv-robotics-ops-workspace-card': UvRoboticsOpsWorkspaceCardElement,
  'uv-robotics-ops-workspace-table': UvRoboticsOpsWorkspaceTableElement,
  'uv-robotics-ops-workspace-form': UvRoboticsOpsWorkspaceFormElement,
  'uv-robotics-ops-workspace-widget': UvRoboticsOpsWorkspaceWidgetElement,
  'uv-robotics-ops-planner-panel': UvRoboticsOpsPlannerPanelElement,
  'uv-robotics-ops-planner-card': UvRoboticsOpsPlannerCardElement,
  'uv-robotics-ops-planner-table': UvRoboticsOpsPlannerTableElement,
  'uv-robotics-ops-planner-form': UvRoboticsOpsPlannerFormElement,
  'uv-robotics-ops-planner-widget': UvRoboticsOpsPlannerWidgetElement,
  'uv-robotics-ops-monitor-panel': UvRoboticsOpsMonitorPanelElement,
  'uv-robotics-ops-monitor-card': UvRoboticsOpsMonitorCardElement,
  'uv-robotics-ops-monitor-table': UvRoboticsOpsMonitorTableElement,
  'uv-robotics-ops-monitor-form': UvRoboticsOpsMonitorFormElement,
  'uv-robotics-ops-monitor-widget': UvRoboticsOpsMonitorWidgetElement,
  'uv-robotics-ops-explorer-panel': UvRoboticsOpsExplorerPanelElement,
  'uv-robotics-ops-explorer-card': UvRoboticsOpsExplorerCardElement,
  'uv-robotics-ops-explorer-table': UvRoboticsOpsExplorerTableElement,
  'uv-robotics-ops-explorer-form': UvRoboticsOpsExplorerFormElement,
  'uv-robotics-ops-explorer-widget': UvRoboticsOpsExplorerWidgetElement,
  'uv-robotics-ops-manager-panel': UvRoboticsOpsManagerPanelElement,
  'uv-robotics-ops-manager-card': UvRoboticsOpsManagerCardElement,
  'uv-robotics-ops-manager-table': UvRoboticsOpsManagerTableElement,
  'uv-robotics-ops-manager-form': UvRoboticsOpsManagerFormElement,
  'uv-robotics-ops-manager-widget': UvRoboticsOpsManagerWidgetElement,
  'uv-robotics-ops-console-panel': UvRoboticsOpsConsolePanelElement,
  'uv-robotics-ops-console-card': UvRoboticsOpsConsoleCardElement,
  'uv-robotics-ops-console-table': UvRoboticsOpsConsoleTableElement,
  'uv-robotics-ops-console-form': UvRoboticsOpsConsoleFormElement,
  'uv-robotics-ops-console-widget': UvRoboticsOpsConsoleWidgetElement,
  'uv-robotics-ops-insights-panel': UvRoboticsOpsInsightsPanelElement,
  'uv-robotics-ops-insights-card': UvRoboticsOpsInsightsCardElement,
  'uv-robotics-ops-insights-table': UvRoboticsOpsInsightsTableElement,
  'uv-robotics-ops-insights-form': UvRoboticsOpsInsightsFormElement,
  'uv-robotics-ops-insights-widget': UvRoboticsOpsInsightsWidgetElement,
  'uv-robotics-ops-workflow-panel': UvRoboticsOpsWorkflowPanelElement,
  'uv-robotics-ops-workflow-card': UvRoboticsOpsWorkflowCardElement,
  'uv-robotics-ops-workflow-table': UvRoboticsOpsWorkflowTableElement,
  'uv-robotics-ops-workflow-form': UvRoboticsOpsWorkflowFormElement,
  'uv-robotics-ops-workflow-widget': UvRoboticsOpsWorkflowWidgetElement,
  'uv-robotics-ops-automation-panel': UvRoboticsOpsAutomationPanelElement,
  'uv-robotics-ops-automation-card': UvRoboticsOpsAutomationCardElement,
  'uv-robotics-ops-automation-table': UvRoboticsOpsAutomationTableElement,
  'uv-robotics-ops-automation-form': UvRoboticsOpsAutomationFormElement,
  'uv-robotics-ops-automation-widget': UvRoboticsOpsAutomationWidgetElement,
  'uv-io-t-ops-overview-panel': UvIoTOpsOverviewPanelElement,
  'uv-io-t-ops-overview-card': UvIoTOpsOverviewCardElement,
  'uv-io-t-ops-overview-table': UvIoTOpsOverviewTableElement,
  'uv-io-t-ops-overview-form': UvIoTOpsOverviewFormElement,
  'uv-io-t-ops-overview-widget': UvIoTOpsOverviewWidgetElement,
  'uv-io-t-ops-workspace-panel': UvIoTOpsWorkspacePanelElement,
  'uv-io-t-ops-workspace-card': UvIoTOpsWorkspaceCardElement,
  'uv-io-t-ops-workspace-table': UvIoTOpsWorkspaceTableElement,
  'uv-io-t-ops-workspace-form': UvIoTOpsWorkspaceFormElement,
  'uv-io-t-ops-workspace-widget': UvIoTOpsWorkspaceWidgetElement,
  'uv-io-t-ops-planner-panel': UvIoTOpsPlannerPanelElement,
  'uv-io-t-ops-planner-card': UvIoTOpsPlannerCardElement,
  'uv-io-t-ops-planner-table': UvIoTOpsPlannerTableElement,
  'uv-io-t-ops-planner-form': UvIoTOpsPlannerFormElement,
  'uv-io-t-ops-planner-widget': UvIoTOpsPlannerWidgetElement,
  'uv-io-t-ops-monitor-panel': UvIoTOpsMonitorPanelElement,
  'uv-io-t-ops-monitor-card': UvIoTOpsMonitorCardElement,
  'uv-io-t-ops-monitor-table': UvIoTOpsMonitorTableElement,
  'uv-io-t-ops-monitor-form': UvIoTOpsMonitorFormElement,
  'uv-io-t-ops-monitor-widget': UvIoTOpsMonitorWidgetElement,
  'uv-io-t-ops-explorer-panel': UvIoTOpsExplorerPanelElement,
  'uv-io-t-ops-explorer-card': UvIoTOpsExplorerCardElement,
  'uv-io-t-ops-explorer-table': UvIoTOpsExplorerTableElement,
  'uv-io-t-ops-explorer-form': UvIoTOpsExplorerFormElement,
  'uv-io-t-ops-explorer-widget': UvIoTOpsExplorerWidgetElement,
  'uv-io-t-ops-manager-panel': UvIoTOpsManagerPanelElement,
  'uv-io-t-ops-manager-card': UvIoTOpsManagerCardElement,
  'uv-io-t-ops-manager-table': UvIoTOpsManagerTableElement,
  'uv-io-t-ops-manager-form': UvIoTOpsManagerFormElement,
  'uv-io-t-ops-manager-widget': UvIoTOpsManagerWidgetElement,
  'uv-io-t-ops-console-panel': UvIoTOpsConsolePanelElement,
  'uv-io-t-ops-console-card': UvIoTOpsConsoleCardElement,
  'uv-io-t-ops-console-table': UvIoTOpsConsoleTableElement,
  'uv-io-t-ops-console-form': UvIoTOpsConsoleFormElement,
  'uv-io-t-ops-console-widget': UvIoTOpsConsoleWidgetElement,
  'uv-io-t-ops-insights-panel': UvIoTOpsInsightsPanelElement,
  'uv-io-t-ops-insights-card': UvIoTOpsInsightsCardElement,
  'uv-io-t-ops-insights-table': UvIoTOpsInsightsTableElement,
  'uv-io-t-ops-insights-form': UvIoTOpsInsightsFormElement,
  'uv-io-t-ops-insights-widget': UvIoTOpsInsightsWidgetElement,
  'uv-io-t-ops-workflow-panel': UvIoTOpsWorkflowPanelElement,
  'uv-io-t-ops-workflow-card': UvIoTOpsWorkflowCardElement,
  'uv-io-t-ops-workflow-table': UvIoTOpsWorkflowTableElement,
  'uv-io-t-ops-workflow-form': UvIoTOpsWorkflowFormElement,
  'uv-io-t-ops-workflow-widget': UvIoTOpsWorkflowWidgetElement,
  'uv-io-t-ops-automation-panel': UvIoTOpsAutomationPanelElement,
  'uv-io-t-ops-automation-card': UvIoTOpsAutomationCardElement,
  'uv-io-t-ops-automation-table': UvIoTOpsAutomationTableElement,
  'uv-io-t-ops-automation-form': UvIoTOpsAutomationFormElement,
  'uv-io-t-ops-automation-widget': UvIoTOpsAutomationWidgetElement,
  'uv-sustainability-ops-overview-panel': UvSustainabilityOpsOverviewPanelElement,
  'uv-sustainability-ops-overview-card': UvSustainabilityOpsOverviewCardElement,
  'uv-sustainability-ops-overview-table': UvSustainabilityOpsOverviewTableElement,
  'uv-sustainability-ops-overview-form': UvSustainabilityOpsOverviewFormElement,
  'uv-sustainability-ops-overview-widget': UvSustainabilityOpsOverviewWidgetElement,
  'uv-sustainability-ops-workspace-panel': UvSustainabilityOpsWorkspacePanelElement,
  'uv-sustainability-ops-workspace-card': UvSustainabilityOpsWorkspaceCardElement,
  'uv-sustainability-ops-workspace-table': UvSustainabilityOpsWorkspaceTableElement,
  'uv-sustainability-ops-workspace-form': UvSustainabilityOpsWorkspaceFormElement,
  'uv-sustainability-ops-workspace-widget': UvSustainabilityOpsWorkspaceWidgetElement,
  'uv-sustainability-ops-planner-panel': UvSustainabilityOpsPlannerPanelElement,
  'uv-sustainability-ops-planner-card': UvSustainabilityOpsPlannerCardElement,
  'uv-sustainability-ops-planner-table': UvSustainabilityOpsPlannerTableElement,
  'uv-sustainability-ops-planner-form': UvSustainabilityOpsPlannerFormElement,
  'uv-sustainability-ops-planner-widget': UvSustainabilityOpsPlannerWidgetElement,
  'uv-sustainability-ops-monitor-panel': UvSustainabilityOpsMonitorPanelElement,
  'uv-sustainability-ops-monitor-card': UvSustainabilityOpsMonitorCardElement,
  'uv-sustainability-ops-monitor-table': UvSustainabilityOpsMonitorTableElement,
  'uv-sustainability-ops-monitor-form': UvSustainabilityOpsMonitorFormElement,
  'uv-sustainability-ops-monitor-widget': UvSustainabilityOpsMonitorWidgetElement,
  'uv-sustainability-ops-explorer-panel': UvSustainabilityOpsExplorerPanelElement,
  'uv-sustainability-ops-explorer-card': UvSustainabilityOpsExplorerCardElement,
  'uv-sustainability-ops-explorer-table': UvSustainabilityOpsExplorerTableElement,
  'uv-sustainability-ops-explorer-form': UvSustainabilityOpsExplorerFormElement,
  'uv-sustainability-ops-explorer-widget': UvSustainabilityOpsExplorerWidgetElement,
  'uv-sustainability-ops-manager-panel': UvSustainabilityOpsManagerPanelElement,
  'uv-sustainability-ops-manager-card': UvSustainabilityOpsManagerCardElement,
  'uv-sustainability-ops-manager-table': UvSustainabilityOpsManagerTableElement,
  'uv-sustainability-ops-manager-form': UvSustainabilityOpsManagerFormElement,
  'uv-sustainability-ops-manager-widget': UvSustainabilityOpsManagerWidgetElement,
  'uv-sustainability-ops-console-panel': UvSustainabilityOpsConsolePanelElement,
  'uv-sustainability-ops-console-card': UvSustainabilityOpsConsoleCardElement,
  'uv-sustainability-ops-console-table': UvSustainabilityOpsConsoleTableElement,
  'uv-sustainability-ops-console-form': UvSustainabilityOpsConsoleFormElement,
  'uv-sustainability-ops-console-widget': UvSustainabilityOpsConsoleWidgetElement,
  'uv-sustainability-ops-insights-panel': UvSustainabilityOpsInsightsPanelElement,
  'uv-sustainability-ops-insights-card': UvSustainabilityOpsInsightsCardElement,
  'uv-sustainability-ops-insights-table': UvSustainabilityOpsInsightsTableElement,
  'uv-sustainability-ops-insights-form': UvSustainabilityOpsInsightsFormElement,
  'uv-sustainability-ops-insights-widget': UvSustainabilityOpsInsightsWidgetElement,
  'uv-sustainability-ops-workflow-panel': UvSustainabilityOpsWorkflowPanelElement,
  'uv-sustainability-ops-workflow-card': UvSustainabilityOpsWorkflowCardElement,
  'uv-sustainability-ops-workflow-table': UvSustainabilityOpsWorkflowTableElement,
  'uv-sustainability-ops-workflow-form': UvSustainabilityOpsWorkflowFormElement,
  'uv-sustainability-ops-workflow-widget': UvSustainabilityOpsWorkflowWidgetElement,
  'uv-sustainability-ops-automation-panel': UvSustainabilityOpsAutomationPanelElement,
  'uv-sustainability-ops-automation-card': UvSustainabilityOpsAutomationCardElement,
  'uv-sustainability-ops-automation-table': UvSustainabilityOpsAutomationTableElement,
  'uv-sustainability-ops-automation-form': UvSustainabilityOpsAutomationFormElement,
  'uv-sustainability-ops-automation-widget': UvSustainabilityOpsAutomationWidgetElement,
  'uv-emergency-ops-overview-panel': UvEmergencyOpsOverviewPanelElement,
  'uv-emergency-ops-overview-card': UvEmergencyOpsOverviewCardElement,
  'uv-emergency-ops-overview-table': UvEmergencyOpsOverviewTableElement,
  'uv-emergency-ops-overview-form': UvEmergencyOpsOverviewFormElement,
  'uv-emergency-ops-overview-widget': UvEmergencyOpsOverviewWidgetElement,
  'uv-emergency-ops-workspace-panel': UvEmergencyOpsWorkspacePanelElement,
  'uv-emergency-ops-workspace-card': UvEmergencyOpsWorkspaceCardElement,
  'uv-emergency-ops-workspace-table': UvEmergencyOpsWorkspaceTableElement,
  'uv-emergency-ops-workspace-form': UvEmergencyOpsWorkspaceFormElement,
  'uv-emergency-ops-workspace-widget': UvEmergencyOpsWorkspaceWidgetElement,
  'uv-emergency-ops-planner-panel': UvEmergencyOpsPlannerPanelElement,
  'uv-emergency-ops-planner-card': UvEmergencyOpsPlannerCardElement,
  'uv-emergency-ops-planner-table': UvEmergencyOpsPlannerTableElement,
  'uv-emergency-ops-planner-form': UvEmergencyOpsPlannerFormElement,
  'uv-emergency-ops-planner-widget': UvEmergencyOpsPlannerWidgetElement,
  'uv-emergency-ops-monitor-panel': UvEmergencyOpsMonitorPanelElement,
  'uv-emergency-ops-monitor-card': UvEmergencyOpsMonitorCardElement,
  'uv-emergency-ops-monitor-table': UvEmergencyOpsMonitorTableElement,
  'uv-emergency-ops-monitor-form': UvEmergencyOpsMonitorFormElement,
  'uv-emergency-ops-monitor-widget': UvEmergencyOpsMonitorWidgetElement,
  'uv-emergency-ops-explorer-panel': UvEmergencyOpsExplorerPanelElement,
  'uv-emergency-ops-explorer-card': UvEmergencyOpsExplorerCardElement,
  'uv-emergency-ops-explorer-table': UvEmergencyOpsExplorerTableElement,
  'uv-emergency-ops-explorer-form': UvEmergencyOpsExplorerFormElement,
  'uv-emergency-ops-explorer-widget': UvEmergencyOpsExplorerWidgetElement,
  'uv-emergency-ops-manager-panel': UvEmergencyOpsManagerPanelElement,
  'uv-emergency-ops-manager-card': UvEmergencyOpsManagerCardElement,
  'uv-emergency-ops-manager-table': UvEmergencyOpsManagerTableElement,
  'uv-emergency-ops-manager-form': UvEmergencyOpsManagerFormElement,
  'uv-emergency-ops-manager-widget': UvEmergencyOpsManagerWidgetElement,
  'uv-emergency-ops-console-panel': UvEmergencyOpsConsolePanelElement,
  'uv-emergency-ops-console-card': UvEmergencyOpsConsoleCardElement,
  'uv-emergency-ops-console-table': UvEmergencyOpsConsoleTableElement,
  'uv-emergency-ops-console-form': UvEmergencyOpsConsoleFormElement,
  'uv-emergency-ops-console-widget': UvEmergencyOpsConsoleWidgetElement,
  'uv-emergency-ops-insights-panel': UvEmergencyOpsInsightsPanelElement,
  'uv-emergency-ops-insights-card': UvEmergencyOpsInsightsCardElement,
  'uv-emergency-ops-insights-table': UvEmergencyOpsInsightsTableElement,
  'uv-emergency-ops-insights-form': UvEmergencyOpsInsightsFormElement,
  'uv-emergency-ops-insights-widget': UvEmergencyOpsInsightsWidgetElement,
  'uv-emergency-ops-workflow-panel': UvEmergencyOpsWorkflowPanelElement,
  'uv-emergency-ops-workflow-card': UvEmergencyOpsWorkflowCardElement,
  'uv-emergency-ops-workflow-table': UvEmergencyOpsWorkflowTableElement,
  'uv-emergency-ops-workflow-form': UvEmergencyOpsWorkflowFormElement,
  'uv-emergency-ops-workflow-widget': UvEmergencyOpsWorkflowWidgetElement,
  'uv-emergency-ops-automation-panel': UvEmergencyOpsAutomationPanelElement,
  'uv-emergency-ops-automation-card': UvEmergencyOpsAutomationCardElement,
  'uv-emergency-ops-automation-table': UvEmergencyOpsAutomationTableElement,
  'uv-emergency-ops-automation-form': UvEmergencyOpsAutomationFormElement,
  'uv-emergency-ops-automation-widget': UvEmergencyOpsAutomationWidgetElement
}

export function registerAll(): void {
  for (const [tagName, constructor] of Object.entries(elementDefinitions)) defineElementOnce(tagName, constructor)
}
