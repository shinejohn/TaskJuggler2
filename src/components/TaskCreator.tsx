'use client'

import { TaskCreator as OriginalTaskCreator } from './TaskCreator.original'
import { useCreateTask } from '@/hooks/queries'
import { useRouter } from 'next/navigation'

export function TaskCreator({ userId, isSignupFlow = false }: { userId?: string; isSignupFlow?: boolean }) {
  const createMutation = useCreateTask()
  const router = useRouter()

  const handleTaskCreated = async (taskData: any) => {
    await createMutation.mutateAsync(taskData)
    if (!isSignupFlow) {
      router.push('/dashboard')
    }
  }

  return (
    <OriginalTaskCreator
      userId={userId}
      isSignupFlow={isSignupFlow}
      onTaskCreated={handleTaskCreated}
      isCreating={createMutation.isPending}
    />
  )
}
