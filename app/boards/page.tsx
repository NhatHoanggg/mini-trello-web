import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Plus, Users, LayoutDashboard, Settings, Bell } from "lucide-react"
import Image from "next/image"

export default function BoardManagement() {
  return (
    <div className="min-h-screen bg-slate-700">
      <header className="bg-slate-800 border-b border-slate-600 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <LayoutDashboard className="w-5 h-5 text-white" />
              <Image src="/assets/logo.png" alt="Logo" width={32} height={32} className="w-8 h-8" />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
              <Settings className="w-4 h-4" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-red-500 text-white text-sm">CM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-slate-800 min-h-[calc(100vh-64px)] p-4">
          <nav className="space-y-2">
            <Button variant="secondary" className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
              <LayoutDashboard className="w-4 h-4 mr-3" />
              Boards
            </Button>

            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700 hover:text-white">
              <Users className="w-4 h-4 mr-3" />
              All Members
            </Button>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-sm font-medium text-slate-400 uppercase tracking-wide">YOUR WORKSPACES</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Card className="bg-white hover:bg-gray-50 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-gray-900">My Trello board</h3>
              </CardContent>
            </Card>

            <Card className="bg-slate-600 border-2 border-dashed border-slate-500 hover:border-slate-400 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center justify-center min-h-[80px]">
                <div className="text-center">
                  <Plus className="w-5 h-5 text-slate-400 mx-auto mb-2" />
                  <span className="text-sm text-slate-300">Create a new board</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
