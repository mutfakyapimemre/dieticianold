export { default as AdminHeader } from '../..\\components\\admin_includes\\AdminHeader.vue'
export { default as AdminSidebar } from '../..\\components\\admin_includes\\AdminSidebar.vue'
export { default as DieticianHeader } from '../..\\components\\dietician_includes\\DieticianHeader.vue'
export { default as DieticianSidebar } from '../..\\components\\dietician_includes\\DieticianSidebar.vue'
export { default as IncludesDieticianSidebarProfile } from '../..\\components\\includes\\DieticianSidebarProfile.vue'
export { default as IncludesFooter } from '../..\\components\\includes\\Footer.vue'
export { default as IncludesHeader } from '../..\\components\\includes\\Header.vue'
export { default as IncludesSidebar } from '../..\\components\\includes\\Sidebar.vue'

export const LazyAdminHeader = import('../..\\components\\admin_includes\\AdminHeader.vue' /* webpackChunkName: "components/admin-header" */).then(c => c.default || c)
export const LazyAdminSidebar = import('../..\\components\\admin_includes\\AdminSidebar.vue' /* webpackChunkName: "components/admin-sidebar" */).then(c => c.default || c)
export const LazyDieticianHeader = import('../..\\components\\dietician_includes\\DieticianHeader.vue' /* webpackChunkName: "components/dietician-header" */).then(c => c.default || c)
export const LazyDieticianSidebar = import('../..\\components\\dietician_includes\\DieticianSidebar.vue' /* webpackChunkName: "components/dietician-sidebar" */).then(c => c.default || c)
export const LazyIncludesDieticianSidebarProfile = import('../..\\components\\includes\\DieticianSidebarProfile.vue' /* webpackChunkName: "components/ıncludes-dietician-sidebar-profile" */).then(c => c.default || c)
export const LazyIncludesFooter = import('../..\\components\\includes\\Footer.vue' /* webpackChunkName: "components/ıncludes-footer" */).then(c => c.default || c)
export const LazyIncludesHeader = import('../..\\components\\includes\\Header.vue' /* webpackChunkName: "components/ıncludes-header" */).then(c => c.default || c)
export const LazyIncludesSidebar = import('../..\\components\\includes\\Sidebar.vue' /* webpackChunkName: "components/ıncludes-sidebar" */).then(c => c.default || c)
