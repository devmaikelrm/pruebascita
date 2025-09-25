# Design Guidelines for Spanish Consular Appointment Bot System

## Design Approach
**Utility-Focused Design System Approach**: This is a productivity tool for operators managing appointment automation. Using **Material Design** principles for clear information hierarchy and reliable interaction patterns.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Primary: 220 85% 25% (Deep professional blue)
- Primary Light: 220 75% 35% 
- Error: 0 75% 50% (Critical alerts)
- Success: 120 60% 40% (Successful bookings)
- Warning: 45 85% 55% (Captcha/manual intervention)

**Neutral Palette:**
- Background: 220 15% 8% (Dark mode primary)
- Surface: 220 12% 12% (Cards/panels)
- Border: 220 8% 20% 
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%

### B. Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono (for logs, timestamps, URLs)
- **Hierarchy**: text-xs to text-2xl, font weights 400-600

### C. Layout System
**Tailwind Spacing**: Consistent use of units 2, 4, 6, 8, 12, 16
- Component padding: p-4, p-6
- Section margins: m-8, mb-12
- Grid gaps: gap-4, gap-6

### D. Component Library

**Dashboard Layout:**
- Sidebar navigation (operators, clients, monitoring)
- Main content area with status cards and real-time logs
- Fixed header with system status indicators

**Status Cards:**
- Queue status (pending appointments)
- Active workers with progress bars
- Success/failure metrics with color coding
- Recent activity timeline

**Forms (Client/Operator Management):**
- Clean input fields with validation states
- Grouped sections for credentials vs preferences
- Action buttons clearly separated (Save/Cancel/Delete)

**Monitoring Interface:**
- Real-time log viewer with syntax highlighting
- Screenshot gallery with thumbnail grid
- Appointment history table with filtering
- Alert system for captchas and errors

**Telegram Integration:**
- Chat-like interface for captcha resolution
- Command palette for bot interactions
- Notification center showing sent messages

### E. Key Design Principles

**Information Density**: Efficient use of space for monitoring multiple clients and workers simultaneously

**Status Communication**: Clear visual indicators for:
- Queue status (idle/running/blocked)
- Account cooldowns with countdown timers
- Captcha intervention required
- Booking success/failure states

**Reliability Focus**: Minimal animations, emphasis on data accuracy and system stability

## Component Specifications

**Navigation**: Side panel with collapsible sections for Operators, Clients, Settings, Logs
**Data Tables**: Sortable columns, inline editing for client preferences
**Action Buttons**: Primary (blue), destructive (red), neutral (gray) with loading states
**Alert System**: Toast notifications for real-time updates, persistent banners for system-wide issues

This design prioritizes operational efficiency and clear system monitoring over visual flourishes, ensuring operators can effectively manage the appointment automation process.