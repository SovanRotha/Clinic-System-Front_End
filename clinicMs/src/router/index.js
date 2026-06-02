import { createRouter, createWebHistory } from "vue-router";

import LoginView from "@/views/auth/LoginView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import ForgotPasswordView from "@/views/auth/ForgotPasswordView.vue";

// Admin
import DashboardView from "@/views/admin/DashboardView.vue";
import DoctorManagementView from "@/views/admin/DoctorManagementView.vue";
import PatientManagementView from "@/views/admin/PatientManagementView.vue";
import AppointmentManagementView from "@/views/admin/AppointmentManagementView.vue";
import ReportsView from "@/views/admin/ReportsAndAnalyticeView.vue";
import SettingsView from "@/views/admin/SettingsView.vue";
import BillingAndPaymentView from "@/views/admin/BillingAndPaymentView.vue";
import PatientProfileView from "@/views/patient/PatientProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    // Auth
    {
      path: "/",
      component: LoginView,
    },
    {
      path: "/register",
      component: RegisterView,
    },
    {
      path: "/forgot-password",
      component: ForgotPasswordView,
    },

    // Admin
    {
      path: "/admin/dashboard",
      component: DashboardView,
      meta: { role: "admin" },
    },
    {
      path: "/admin/users",
      component: () => import("@/views/admin/UserManagementView.vue"),
      meta: { role: "admin" },
    },
    {
      path: "/admin/doctors",
      component: DoctorManagementView,
      meta: { role: "admin" },
    },
    {
      path: "/admin/patients",
      component: PatientManagementView,
      meta: { role: "admin" },
    },

    {
      path: "/admin/appointments",
      component: AppointmentManagementView,
      meta: { role: "admin" },
    },
    {
      path: "/admin/reports",
      component: ReportsView,
      meta: { role: "admin" },
    },
    {
      path: "/admin/settings",
      component: SettingsView,
      meta: { role: "admin" },
    },
    {
      path: "/admin/billing",
      component: BillingAndPaymentView,
      meta: { role: "admin" },
    },

    // Doctor
    {
      path: "/doctor/dashboard",
      component: () => import("@/views/doctor/DashboardView.vue"),
      meta: { role: "doctor" },
    },
    {
      path: "/doctor/mypatients",
      component: () => import("@/views/doctor/MyPatientsView.vue"),
      meta: { role: "doctor" },
    },
    {
      path: "/doctor/consultations",
      component: () => import("@/views/doctor/Consultation.vue"),
      meta: { role: "doctor" },
    },
    {
      path: "/doctor/prescriptions",
      component: () => import("@/views/doctor/PrescriptionsView.vue"),
      meta: { role: "doctor" },
    },
    {
      path: "/doctor/medical-records",
      component: () => import("@/views/doctor/MedicalRecordsView.vue"),
      meta: { role: "doctor" },
    },
    {
      path: "/doctor/add-new-consultation",
      component: () => import("@/views/doctor/AddNewConsultationView.vue"),
      meta: { role: "doctor" },
    },{
      path: "/doctor/settings",
      component: () => import("@/views/doctor/Setting.vue"),
      meta: { role: "doctor" },
    },

    // Patient
    {
      path: "/patient/dashboard",
      component: () => import("@/views/patient/DashboardView.vue"),
      meta: { role: "patient" },
    },
    {
      path: "/patient/myprofile",
      component: PatientProfileView,
      meta: { role: "patient" },
    },
    {
      path: "/patient/appointments",
      component: () => import("@/views/patient/AppointmentsView.vue"),
      meta: { role: "patient" },
    },
    {
      path: "/patient/medical-records",
      component: () => import("@/views/patient/MedicalHistoryView.vue"),
      meta: { role: "patient" },
    },
    {
      path: "/patient/prescriptions",
      component: () => import("@/views/patient/PrescriptionsView.vue"),
      meta: { role: "patient" },
    },
    {
      path: "/patient/billing",
      component: () => import("@/views/patient/BillingView.vue"),
      meta: { role: "patient" },
    },

    // Receptionist
    {
      path: "/receptionist/dashboard",
      component: () => import("@/views/receptionist/DashboardView.vue"),
      meta: { role: "receptionist" },
    },
    {
      path: "/receptionist/profile",
      component: () => import("@/views/receptionist/ProfileView.vue"),
      meta: { role: "receptionist" },
    },
    {
      path: "/receptionist/appointments",
      component: () =>
        import("@/views/receptionist/AppointmentBookingView.vue"),
      meta: { role: "receptionist" },
    },
    {
      path: "/receptionist/billing",
      component: () => import("@/views/receptionist/BillingView.vue"),
      meta: { role: "receptionist" },
    },
    {
      path: "/receptionist/reports",
      component: () => import("@/views/receptionist/ReportView.vue"),
      meta: { role: "receptionist" },
    },
    {
      path: "/receptionist/settings",
      component: () => import("@/views/receptionist/SettingView.vue"),
      meta: { role: "receptionist" },
    },
  ],
});

router.beforeEach((to, from) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const publicPages = ["/", "/register", "/forgot-password"];

  // Allow public pages
  if (publicPages.includes(to.path)) {
    return true;
  }

  // Not logged in
  if (!token) {
    return "/";
  }

  // Check role if route requires one
  if (to.meta.role) {
    if (!user || user.role !== to.meta.role) {
      return "/";
    }
  }

  return true;
});

export default router;
