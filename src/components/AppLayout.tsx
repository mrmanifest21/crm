import { Link, useLocation } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  CheckSquare,
  FolderKanban,
  Sparkles,
  BookOpen,
  BarChart3,
  Settings,
  HelpCircle,
  Search,
  Bell,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Mail,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/contacts", label: "Contacts", icon: Users },
  { path: "/deals", label: "Deals", icon: Briefcase },
  { path: "/tasks", label: "Tasks", icon: CheckSquare },
  { path: "/projects", label: "Projects", icon: FolderKanban },
  { path: "/services", label: "Services", icon: BookOpen },
  { path: "/ai-assistant", label: "AI Assistant", icon: Sparkles },
  { path: "/reports", label: "Reports", icon: BarChart3 },
  { path: "/settings", label: "Settings", icon: Settings },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-[#0C0C0C] text-white overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-[260px] bg-[#0C0C0C] border-r border-white/[0.06]
          flex flex-col transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 h-16 border-b border-white/[0.06]">
          <div className="w-8 h-8 rounded-lg bg-[#00E676] flex items-center justify-center">
            <span className="text-black font-bold text-sm">O</span>
          </div>
          <span className="font-semibold text-base tracking-tight">OmegaElz</span>
          <button
            className="ml-auto lg:hidden text-[#616161] hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-3 h-10 rounded-xl text-sm font-medium
                  transition-all duration-150
                  ${
                    active
                      ? "bg-[#141414] text-[#00E676] border-l-[3px] border-[#00E676]"
                      : "text-[#9E9E9E] hover:bg-[#1A1A1A] hover:text-white"
                  }
                `}
              >
                <item.icon size={18} className={active ? "text-[#00E676]" : "text-[#616161]"} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="px-3 py-4 border-t border-white/[0.06] space-y-1">
          <Link
            to="/help"
            className="flex items-center gap-3 px-3 h-10 rounded-xl text-sm text-[#9E9E9E] hover:bg-[#1A1A1A] hover:text-white transition-all"
          >
            <HelpCircle size={18} className="text-[#616161]" />
            <span>Help & Support</span>
          </Link>
          <div className="px-3 pt-2">
            <p className="text-[11px] text-[#616161]">OmegaElz CRM v1.0</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TopBar */}
        <header className="flex items-center h-16 px-4 lg:px-6 border-b border-white/[0.06] bg-[#0C0C0C] shrink-0">
          <button
            className="lg:hidden mr-3 text-[#9E9E9E] hover:text-white"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={20} />
          </button>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-[400px]">
            <div className="relative w-full">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#616161]" />
              <input
                type="text"
                placeholder="Search contacts, deals..."
                className="w-full h-10 pl-9 pr-4 bg-[#141414] border border-white/[0.06] rounded-xl text-sm text-white placeholder:text-[#616161] focus:outline-none focus:border-[#00E676]/40 focus:ring-1 focus:ring-[#00E676]/10"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3 ml-auto">
            <button className="relative p-2 text-[#9E9E9E] hover:text-white transition-colors">
              <Mail size={20} />
            </button>
            <button className="relative p-2 text-[#9E9E9E] hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#00E676] rounded-full" />
            </button>

            {/* User menu */}
            <div className="relative">
              <button
                className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-xl hover:bg-[#1A1A1A] transition-colors"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <div className="w-8 h-8 rounded-full bg-[#00E676]/20 flex items-center justify-center">
                  <span className="text-[#00E676] text-xs font-semibold">
                    {(user?.name || "U").charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="hidden sm:block text-sm text-[#9E9E9E]">{user?.name || "User"}</span>
                <ChevronDown size={14} className="text-[#616161]" />
              </button>

              {userMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-48 bg-[#141414] border border-white/[0.06] rounded-xl shadow-xl z-50 py-1">
                    <div className="px-4 py-2 border-b border-white/[0.06]">
                      <p className="text-sm font-medium text-white">{user?.name}</p>
                      <p className="text-xs text-[#616161]">{user?.email}</p>
                    </div>
                    <Link
                      to="/settings"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-[#9E9E9E] hover:bg-[#1A1A1A] hover:text-white"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Settings size={14} /> Settings
                    </Link>
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-sm text-[#EF5350] hover:bg-[#1A1A1A] w-full text-left"
                      onClick={() => { logout(); setUserMenuOpen(false); }}
                    >
                      <LogOut size={14} /> Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
