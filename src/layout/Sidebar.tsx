import { NavLink } from 'react-router-dom'

const linkClass =
  'block px-4 py-2 rounded text-gray-700 hover:bg-gray-100'

const activeClass = 'bg-gray-200 font-medium'

export const Sidebar = () => {
  return (
    <aside className="w-60 bg-white border-r min-h-screen p-4">
      <h2 className="text-lg font-bold mb-6">Dev Analytics</h2>

      <nav className="space-y-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ''}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ''}`
          }
        >
          Tasks
        </NavLink>
      </nav>
    </aside>
  )
}
