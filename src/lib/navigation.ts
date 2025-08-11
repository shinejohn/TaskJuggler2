export const navigationRoutes = {
  home: '/',
  dashboard: '/dashboard',
  login: '/login',
  signup: '/signup',
  profile: '/profile',
  
  // Task routes
  createTask: '/tasks',
  taskReport: '/task-report',
  myTasks: '/tasks',
  taskMarketplace: '/marketplace',
  taskChat: '/chat',
  hireForTask: '/hire',
  
  // Vendor/Doer routes
  doerMarket: '/marketplace',
  doerDashboard: '/doer-dashboard',
  vendorProfile: '/vendor-profile',
  aiVendorProfile: '/ai-vendor-profile',
  
  // Other routes
  messages: '/messages',
  invoices: '/invoices',
  pricing: '/pricing',
  
  // Settings & Support
  settings: '/settings',
  help: '/help',
}

export const publicRoutes = [
  navigationRoutes.home,
  navigationRoutes.login,
  navigationRoutes.signup,
  navigationRoutes.pricing,
]

export const protectedRoutes = [
  navigationRoutes.dashboard,
  navigationRoutes.profile,
  navigationRoutes.createTask,
  navigationRoutes.taskReport,
  navigationRoutes.myTasks,
  navigationRoutes.taskMarketplace,
  navigationRoutes.taskChat,
  navigationRoutes.hireForTask,
  navigationRoutes.doerMarket,
  navigationRoutes.doerDashboard,
  navigationRoutes.vendorProfile,
  navigationRoutes.aiVendorProfile,
  navigationRoutes.messages,
  navigationRoutes.invoices,
]