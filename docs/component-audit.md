# Component Data Audit

Generated: 2025-08-10T14:12:08.648Z

## Components Found: 91


### AuthGatePage
- Path: `src/components/Auth/AuthGatePage.tsx`
- Has Mock Data: ❌
- Operations: create, read
- Props: 
```typescript
onLogin?: () => void;
  onSignup?: () => void;
  onCancel?: () => void;
  message?: string;
  redirectAfterAuth?: () => void;
  targetPageName?: string;
```



### AuthLayout
- Path: `src/components/Auth/AuthLayout.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
children: ReactNode;
  title: string;
  subtitle: string;
```



### ForgotPasswordPage
- Path: `src/components/Auth/ForgotPasswordPage.tsx`
- Has Mock Data: ❌
- Operations: create, read
- Props: 
```typescript
onBackToLogin?: () => void;
```



### InviteFriendsPage
- Path: `src/components/Auth/InviteFriendsPage.tsx`
- Has Mock Data: ✅
- Operations: create, read, delete
- Props: 
```typescript
onSkip?: () => void;
  onComplete?: () => void;
  userName?: string;
```



### LoginPage
- Path: `src/components/Auth/LoginPage.tsx`
- Has Mock Data: ❌
- Operations: create, read
- Props: 
```typescript
onLogin?: () => void;
  redirectAfterLogin?: boolean;
  redirectParams?: any;
  onSignupClick?: () => void;
  onForgotPasswordClick?: () => void;
  hideLayout?: boolean;
```



### SignupPage
- Path: `src/components/Auth/SignupPage.tsx`
- Has Mock Data: ✅
- Operations: create, read
- Props: 
```typescript
onSignupComplete?: () => void;
  onLoginClick?: () => void;
  hideLayout?: boolean;
```



### CTA
- Path: `src/components/CTA.tsx`
- Has Mock Data: ❌
- Operations: read, update
- Props: 
```typescript
onGetStartedClick?: () => void;
```



### TaskChat
- Path: `src/components/Chat/TaskChat.tsx`
- Has Mock Data: ❌
- Operations: create, read, update
- Props: None detected



### TaskChatPage
- Path: `src/components/Chat/TaskChatPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
```



### Dashboard
- Path: `src/components/Dashboard.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
```



### DoerTimeline
- Path: `src/components/DoerTimeline.tsx`
- Has Mock Data: ✅
- Operations: read, update
- Props: None detected



### Features
- Path: `src/components/Features.tsx`
- Has Mock Data: ❌
- Operations: create
- Props: None detected



### Footer
- Path: `src/components/Footer.tsx`
- Has Mock Data: ❌
- Operations: read
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onMyTasksClick?: () => void;
  onTaskMarketClick?: () => void;
  onDoerMarketClick?: () => void;
  onHomeClick?: () => void;
  onProfileClick?: () => void;
  onChatClick?: () => void;
  isAuthenticated?: boolean;
```



### FriendSelector
- Path: `src/components/FriendGroup/FriendSelector.tsx`
- Has Mock Data: ❌
- Operations: read
- Props: None detected



### FriendSelectorPage
- Path: `src/components/FriendGroup/FriendSelectorPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### Header
- Path: `src/components/Header.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onLogoClick?: () => void;
  onLoginClick?: () => void;
```



### Hero
- Path: `src/components/Hero.tsx`
- Has Mock Data: ❌
- Operations: update
- Props: 
```typescript
onGetStartedClick?: () => void;
```



### HireForTaskPage
- Path: `src/components/Hiring/HireForTaskPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
  onTaskCreated?: () => void;
```



### TaskHiringForm
- Path: `src/components/Hiring/TaskHiringForm.tsx`
- Has Mock Data: ❌
- Operations: create, read, delete
- Props: 
```typescript
onTaskCreated?: () => void;
```



### HowItWorks
- Path: `src/components/HowItWorks.tsx`
- Has Mock Data: ❌
- Operations: update
- Props: None detected



### InvitationRouting
- Path: `src/components/Invitation/InvitationRouting.tsx`
- Has Mock Data: ❌
- Operations: update
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
  onViewDashboard?: () => void;
  isAuthenticated?: boolean;
```



### SampleTaskInvitationPage
- Path: `src/components/Invitation/SampleTaskInvitationPage.tsx`
- Has Mock Data: ❌
- Operations: update
- Props: None detected



### TaskInvitationPage
- Path: `src/components/Invitation/TaskInvitationPage.tsx`
- Has Mock Data: ❌
- Operations: create, read
- Props: 
```typescript
onContinueToSignup?: (trackingParams: TrackingParams) => void;
  onContinueToLogin?: (trackingParams: TrackingParams) => void;
  isAuthenticated?: boolean;
  onViewTaskDirectly?: (trackingParams: TrackingParams) => void;
```



### TaskInviteSignupPage
- Path: `src/components/Invitation/TaskInviteSignupPage.tsx`
- Has Mock Data: ❌
- Operations: create, read, update
- Props: 
```typescript
trackingParams: TrackingParams;
  onSignupComplete?: (trackingParams: TrackingParams) => void;
```



### TaskResponsePage
- Path: `src/components/Invitation/TaskResponsePage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
response: 'accept' | 'reject';
  trackingParams: TrackingParams;
  onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
  onSetTimeline?: () => void;
  onViewDashboard?: () => void;
  onBackToTask?: () => void;
```



### TaskTimelinePage
- Path: `src/components/Invitation/TaskTimelinePage.tsx`
- Has Mock Data: ❌
- Operations: create, read
- Props: 
```typescript
taskId: string;
  taskTitle: string;
  suggestedDueDate: string;
  onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
  onTimelineSet?: () => void;
  onBackToTask?: () => void;
```



### TaskViewPage
- Path: `src/components/Invitation/TaskViewPage.tsx`
- Has Mock Data: ❌
- Operations: read, update
- Props: 
```typescript
trackingParams: TrackingParams;
  onRespond: (response: 'accept' | 'reject', trackingParams: TrackingParams) => void;
  onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
```



### InvoiceDetail
- Path: `src/components/Invoice/InvoiceDetail.tsx`
- Has Mock Data: ❌
- Operations: read, update
- Props: 
```typescript
invoice: Invoice;
  userType: 'client' | 'vendor';
  onBack: () => void;
  onPay?: () => void;
  onDownload: () => void;
```



### InvoiceForm
- Path: `src/components/Invoice/InvoiceForm.tsx`
- Has Mock Data: ❌
- Operations: create, read, update, delete
- Props: 
```typescript
taskId?: string;
  clientId?: string;
  clientName?: string;
  onSubmit: (invoiceData: any) => void;
  onCancel: () => void;
  existingInvoice?: any;
  availableTasks?: Task[];
  autoCreateLineItem?: boolean;
```



### InvoiceList
- Path: `src/components/Invoice/InvoiceList.tsx`
- Has Mock Data: ❌
- Operations: read, update
- Props: 
```typescript
invoices: Invoice[];
  userType: 'client' | 'vendor';
  onViewInvoice: (invoiceId: string) => void;
  onPayInvoice?: (invoiceId: string) => void;
```



### AIVendorProfileCreation
- Path: `src/components/Marketplace/AIVendorProfileCreation.tsx`
- Has Mock Data: ❌
- Operations: create, read, update, delete
- Props: None detected



### AIVendorProfileCreationPage
- Path: `src/components/Marketplace/AIVendorProfileCreationPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### MarketplacePage
- Path: `src/components/Marketplace/MarketplacePage.tsx`
- Has Mock Data: ❌
- Operations: read
- Props: None detected



### ProviderBrowse
- Path: `src/components/Marketplace/ProviderBrowse.tsx`
- Has Mock Data: ❌
- Operations: read
- Props: None detected



### ProviderDetail
- Path: `src/components/Marketplace/ProviderDetail.tsx`
- Has Mock Data: ❌
- Operations: create, read, update
- Props: 
```typescript
providerId: string;
  onBack: () => void;
```



### TaskDoerDashboard
- Path: `src/components/Marketplace/TaskDoerDashboard.tsx`
- Has Mock Data: ❌
- Operations: read
- Props: None detected



### TaskMapView
- Path: `src/components/Marketplace/TaskMapView.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onSwitchToListView: () => void;
```



### TaskMarketplace
- Path: `src/components/Marketplace/TaskMarketplace.tsx`
- Has Mock Data: ✅
- Operations: create, read, update
- Props: None detected



### VendorDetail
- Path: `src/components/Marketplace/VendorDetail.tsx`
- Has Mock Data: ❌
- Operations: create, read
- Props: None detected



### VendorDetailPage
- Path: `src/components/Marketplace/VendorDetailPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### VendorProfileCreation
- Path: `src/components/Marketplace/VendorProfileCreation.tsx`
- Has Mock Data: ❌
- Operations: create, read, update, delete
- Props: 
```typescript
onComplete?: () => void;
```



### VendorProfileCreationPage
- Path: `src/components/Marketplace/VendorProfileCreationPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
  onComplete?: () => void;
```



### ConversationList
- Path: `src/components/Messaging/ConversationList.tsx`
- Has Mock Data: ❌
- Operations: read, update
- Props: 
```typescript
onSelectConversation: (conversationId: string) => void;
  onNewMessage: () => void;
```



### MessageThread
- Path: `src/components/Messaging/MessageThread.tsx`
- Has Mock Data: ❌
- Operations: create, read, update
- Props: 
```typescript
conversationId: string;
  currentUserId: string;
  onBack?: () => void;
```



### EnhancedHeader
- Path: `src/components/Navigation/EnhancedHeader.tsx`
- Has Mock Data: ❌
- Operations: create, read, delete
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onMyTasksClick?: () => void;
  onTaskMarketClick?: () => void;
  onDoerMarketClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLoginClick?: () => void;
  onLogoutClick?: () => void;
  onLogoClick?: () => void;
  isAuthenticated?: boolean;
```



### PageNavigator
- Path: `src/components/PageNavigator.tsx`
- Has Mock Data: ❌
- Operations: create
- Props: 
```typescript
onNavigate: (page: string) => void;
  currentPage: string;
```



### ConversationListPage
- Path: `src/components/Pages/ConversationListPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### EscrowPaymentPage
- Path: `src/components/Pages/EscrowPaymentPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### MessageThreadPage
- Path: `src/components/Pages/MessageThreadPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### MyTasksViewerPage
- Path: `src/components/Pages/MyTasksViewerPage.tsx`
- Has Mock Data: ❌
- Operations: read, update
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskClick?: (taskId: string) => void;
  isVendor?: boolean; // Flag to indicate if the user is a vendor
```



### PaymentMethodSetupPage
- Path: `src/components/Pages/PaymentMethodSetupPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### SearchBarPage
- Path: `src/components/Pages/SearchBarPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### SearchResultsPage
- Path: `src/components/Pages/SearchResultsPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### SubmitReviewPage
- Path: `src/components/Pages/SubmitReviewPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### TaskDetailPage
- Path: `src/components/Pages/TaskDetailPage.tsx`
- Has Mock Data: ❌
- Operations: create, read, update
- Props: 
```typescript
taskId?: string;
  onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onMyTasksClick?: () => void;
  onTaskMarketClick?: () => void;
  onDoerMarketClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
  onBackToTasks?: () => void;
  onEditTask?: (taskId: string) => void;
```



### UserInvoicesPage
- Path: `src/components/Pages/UserInvoicesPage.tsx`
- Has Mock Data: ✅
- Operations: read, update
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
```



### VendorInvoicesPage
- Path: `src/components/Pages/VendorInvoicesPage.tsx`
- Has Mock Data: ✅
- Operations: read, update
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
```



### CheckoutPage
- Path: `src/components/Payment/CheckoutPage.tsx`
- Has Mock Data: ❌
- Operations: read, update
- Props: 
```typescript
onBack?: () => void;
  onSuccess?: () => void;
  onFailure?: () => void;
  selectedPlan?: {
    name: string;
    price: number;
    billingPeriod: 'monthly' | 'annual';
```



### EscrowPaymentScreen
- Path: `src/components/Payment/EscrowPaymentScreen.tsx`
- Has Mock Data: ❌
- Operations: read, update
- Props: 
```typescript
taskId: string;
  taskTitle: string;
  providerName: string;
  providerImage: string;
  amount: number;
  serviceFee: number;
  estimatedReleaseDate: Date;
  onPaymentComplete: () => void;
  onCancel: () => void;
```



### PaymentFailure
- Path: `src/components/Payment/PaymentFailure.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onRetry?: () => void;
  onBack?: () => void;
  onContactSupport?: () => void;
  errorDetails?: {
    errorCode: string;
    errorMessage: string;
```



### PaymentMethodSelector
- Path: `src/components/Payment/PaymentMethodSelector.tsx`
- Has Mock Data: ❌
- Operations: read, update
- Props: 
```typescript
onSelectMethod: (method: 'stripe' | 'plaid') => void;
```



### PaymentMethodSetup
- Path: `src/components/Payment/PaymentMethodSetup.tsx`
- Has Mock Data: ✅
- Operations: create, read, update
- Props: 
```typescript
onSave: (paymentMethod: PaymentMethod) => void;
  onCancel: () => void;
```



### PaymentSuccess
- Path: `src/components/Payment/PaymentSuccess.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onViewDashboard?: () => void;
  onViewInvoice?: () => void;
  purchaseDetails?: {
    planName: string;
    amount: number;
    billingPeriod: 'monthly' | 'annual';
    nextBillingDate: string;
    transactionId: string;
```



### PlaidPaymentForm
- Path: `src/components/Payment/PlaidPaymentForm.tsx`
- Has Mock Data: ❌
- Operations: read
- Props: 
```typescript
amount: number;
  invoiceId: string;
  onPaymentComplete: (paymentInfo: any) => void;
  onCancel: () => void;
```



### StripePaymentForm
- Path: `src/components/Payment/StripePaymentForm.tsx`
- Has Mock Data: ❌
- Operations: create, read, update
- Props: 
```typescript
amount: number;
  invoiceId: string;
  onPaymentComplete: (paymentInfo: any) => void;
  onCancel: () => void;
```



### PlanComparison
- Path: `src/components/Pricing/PlanComparison.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
planType: 'individual' | 'team' | 'provider';
```



### PricingPlansPage
- Path: `src/components/Pricing/PricingPlansPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### SubscriptionPlans
- Path: `src/components/Pricing/SubscriptionPlans.tsx`
- Has Mock Data: ❌
- Operations: create, read
- Props: None detected



### UpgradePrompt
- Path: `src/components/Pricing/UpgradePrompt.tsx`
- Has Mock Data: ❌
- Operations: create, read
- Props: 
```typescript
trigger: 'task-limit' | 'ai-features' | 'productivity' | 'collaboration';
  onClose: () => void;
  onUpgrade: () => void;
```



### ProfilePage
- Path: `src/components/Profile/ProfilePage.tsx`
- Has Mock Data: ❌
- Operations: create, update
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
  isVendor?: boolean;
  onToggleVendorStatus?: () => void;
```



### SubscriptionSection
- Path: `src/components/Profile/SubscriptionSection.tsx`
- Has Mock Data: ❌
- Operations: read, update
- Props: 
```typescript
subscriptionData: SubscriptionData;
```



### UserInfoSection
- Path: `src/components/Profile/UserInfoSection.tsx`
- Has Mock Data: ❌
- Operations: create, read, update
- Props: 
```typescript
userData: UserData;
```



### VendorProfile
- Path: `src/components/Profile/VendorProfile.tsx`
- Has Mock Data: ❌
- Operations: create, read
- Props: 
```typescript
onEditProfile: () => void;
  onAddService: () => void;
  onEditService: (serviceId: string) => void;
  onNavigateToVendorInvoices: () => void;
```



### VendorProfilePage
- Path: `src/components/Profile/VendorProfilePage.tsx`
- Has Mock Data: ❌
- Operations: create, update
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
  onNavigateToVendorInvoices?: () => void;
```



### VendorSettingsSection
- Path: `src/components/Profile/VendorSettingsSection.tsx`
- Has Mock Data: ❌
- Operations: create, update
- Props: 
```typescript
isVendor: boolean;
  onToggleVendorStatus: () => void;
  onNavigateToVendorProfileCreation: () => void;
  onNavigateToAIVendorProfileCreation: () => void;
```



### SubmitReviewForm
- Path: `src/components/Reviews/SubmitReviewForm.tsx`
- Has Mock Data: ✅
- Operations: create, read, delete
- Props: 
```typescript
providerName: string;
  providerImage: string;
  taskTitle: string;
  onSubmit: (reviewData: ReviewData) => void;
  onCancel: () => void;
```



### SearchBar
- Path: `src/components/Search/SearchBar.tsx`
- Has Mock Data: ❌
- Operations: create, read, delete
- Props: 
```typescript
onSearch: (term: string, category?: string) => void;
  placeholder?: string;
  showFilters?: boolean;
```



### SearchResults
- Path: `src/components/Search/SearchResults.tsx`
- Has Mock Data: ❌
- Operations: create, read
- Props: 
```typescript
searchTerm: string;
  onSearchChange: (term: string, category?: string) => void;
```



### SignupTaskCreationPage
- Path: `src/components/SignupTaskCreationPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onTaskCreated?: () => void;
```



### TaskCreationPage
- Path: `src/components/TaskCreationPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
  onTaskCreated?: () => void;
```



### TaskCreator
- Path: `src/components/TaskCreator.tsx`
- Has Mock Data: ❌
- Operations: create, read, delete
- Props: 
```typescript
isSignupFlow?: boolean;
  onTaskCreated?: () => void;
```



### TaskMarketplacePage
- Path: `src/components/TaskMarketplacePage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### TaskReport
- Path: `src/components/TaskReport.tsx`
- Has Mock Data: ✅
- Operations: create, read, update
- Props: 
```typescript
status: TaskStatus;
```



### TaskReportPage
- Path: `src/components/TaskReportPage.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
```



### MyTasksViewer
- Path: `src/components/Tasks/MyTasksViewer.tsx`
- Has Mock Data: ❌
- Operations: create, read, update
- Props: None detected



### Testimonials
- Path: `src/components/Testimonials.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: None detected



### UseCases
- Path: `src/components/UseCases.tsx`
- Has Mock Data: ❌
- Operations: create, read, update
- Props: None detected



### AppLayout
- Path: `src/components/layout/AppLayout.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
children: ReactNode;
  onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onMyTasksClick?: () => void;
  onTaskMarketClick?: () => void;
  onDoerMarketClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
  showSidebar?: boolean;
```



### AppNavigation
- Path: `src/components/layout/AppNavigation.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
```



### AppSidebar
- Path: `src/components/layout/AppSidebar.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLogoutClick?: () => void;
```



### MainLayout
- Path: `src/components/layout/MainLayout.tsx`
- Has Mock Data: ❌
- Operations: None detected
- Props: 
```typescript
children: ReactNode;
  onCreateTaskClick?: () => void;
  onTaskReportClick?: () => void;
  onMyTasksClick?: () => void;
  onTaskMarketClick?: () => void;
  onDoerMarketClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  onLoginClick?: () => void;
  onLogoutClick?: () => void;
  onLogoClick?: () => void;
  isAuthenticated?: boolean;
  showFooter?: boolean;
```



## Mock Data Summary
Total mock data instances found: 11
