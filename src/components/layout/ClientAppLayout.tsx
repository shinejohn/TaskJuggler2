'use client'

import React, { ReactNode } from 'react'
import { AppLayout } from './AppLayout'
import { useNavigation } from '@/hooks/useNavigation'

interface ClientAppLayoutProps {
  children: ReactNode
  showSidebar?: boolean
}

export function ClientAppLayout({ children, showSidebar = true }: ClientAppLayoutProps) {
  const nav = useNavigation()
  
  return (
    <AppLayout
      onCreateTaskClick={nav.goToCreateTask}
      onTaskReportClick={nav.goToTaskReport}
      onMyTasksClick={nav.goToMyTasks}
      onTaskMarketClick={nav.goToTaskMarketplace}
      onDoerMarketClick={nav.goToDoerMarket}
      onChatClick={nav.goToMessages}
      onProfileClick={nav.goToProfile}
      onHomeClick={nav.goToDashboard}
      onLogoutClick={nav.goToLogin}
      showSidebar={showSidebar}
    >
      {children}
    </AppLayout>
  )
}