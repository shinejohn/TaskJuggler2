'use client'

import { useRouter } from 'next/navigation'
import { navigationRoutes } from '@/lib/navigation'

export function useNavigation() {
  const router = useRouter()

  return {
    goToHome: () => router.push(navigationRoutes.home),
    goToDashboard: () => router.push(navigationRoutes.dashboard),
    goToLogin: () => router.push(navigationRoutes.login),
    goToSignup: () => router.push(navigationRoutes.signup),
    goToProfile: () => router.push(navigationRoutes.profile),
    goToCreateTask: () => router.push(navigationRoutes.createTask),
    goToTaskReport: () => router.push(navigationRoutes.taskReport),
    goToMyTasks: () => router.push(navigationRoutes.myTasks),
    goToTaskMarketplace: () => router.push(navigationRoutes.taskMarketplace),
    goToTaskChat: () => router.push(navigationRoutes.taskChat),
    goToHireForTask: () => router.push(navigationRoutes.hireForTask),
    goToDoerMarket: () => router.push(navigationRoutes.doerMarket),
    goToDoerDashboard: () => router.push(navigationRoutes.doerDashboard),
    goToVendorProfile: () => router.push(navigationRoutes.vendorProfile),
    goToAIVendorProfile: () => router.push(navigationRoutes.aiVendorProfile),
    goToMessages: () => router.push(navigationRoutes.messages),
    goToInvoices: () => router.push(navigationRoutes.invoices),
    goToPricing: () => router.push(navigationRoutes.pricing),
    goToSettings: () => router.push(navigationRoutes.settings),
    goToHelp: () => router.push(navigationRoutes.help),
  }
}