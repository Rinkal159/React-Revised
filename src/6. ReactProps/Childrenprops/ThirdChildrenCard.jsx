function ThirdChildrenCard({children, borderColor, backgroundColor}) {
  return (
    <div style={{borderColor:borderColor, backgroundColor:backgroundColor}} className="children-card">
        {children}
    </div>
  )
}

export default ThirdChildrenCard